#[starknet::contract]
pub mod gameroom {
    use dojo::world;
    use dojo::world::IWorldDispatcher;
    use dojo::world::IWorldDispatcherTrait;
    use dojo::world::IWorldProvider;
    use dojo::contract::IContract;
    use starknet::storage::{
        StorageMapReadAccess, StorageMapWriteAccess, StoragePointerReadAccess,
        StoragePointerWriteAccess
    };

    component!(
        path: dojo::contract::upgradeable::upgradeable,
        storage: upgradeable,
        event: UpgradeableEvent
    );

    #[abi(embed_v0)]
    pub impl ContractImpl of IContract<ContractState> {
        fn contract_name(self: @ContractState) -> ByteArray {
            "gameroom"
        }

        fn namespace(self: @ContractState) -> ByteArray {
            "tisland"
        }

        fn tag(self: @ContractState) -> ByteArray {
            "tisland-gameroom"
        }

        fn name_hash(self: @ContractState) -> felt252 {
            3142590707297632784884233462480736491151153749418076044875530908436107920246
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            785100407485574687708722636754133465572252000084726510320129847110016753675
        }

        fn selector(self: @ContractState) -> felt252 {
            2787723860236768277408551973071652142026460331016330491089299513058681670197
        }
    }

    #[abi(embed_v0)]
    impl WorldProviderImpl of IWorldProvider<ContractState> {
        fn world(self: @ContractState) -> IWorldDispatcher {
            self.world_dispatcher.read()
        }
    }

    #[abi(embed_v0)]
    impl UpgradableImpl =
        dojo::contract::upgradeable::upgradeable::UpgradableImpl<ContractState>;

    // Component imports

    // Internal imports
    use starknet::{ContractAddress, get_block_timestamp, get_block_info};
    use tisland::models::index::{Player, GameRoom, IslandCoords, Loot, Round};
    use tisland::models::gameroom::{GameRoomTrait};
    use tisland::models::loot::{LootTrait};
    use tisland::models::islandcoords::{IslandCoordsTrait};
    use tisland::libs::utils;
    use tisland::constants;
    //use tisland::libs::seeder::{make_seed};

    // Local imports

    // Implementations

    #[abi(embed_v0)]
    impl GameRoomImpl of super::IGameRoom<ContractState> {
        fn start_game(ref self: ContractState, game_id: u128) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();

            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // assert both players in game not zero address
            assert(
                game_room.player1 != utils::ZERO() && game_room.player2 != utils::ZERO(),
                'Players are not in the game'
            );

            // [Update] GameRoom
            game_room.start_gameroom(caller);

            // initialize squares
            //suppose to add random obstacles later

            // initialize player loot tracker
            let mut player1_loot = LootTrait::new(game_id, game_room.player1);
            let mut player2_loot = LootTrait::new(game_id, game_room.player2);

            // [Save] GameRoom
            set!(self.world(), (game_room, player1_loot, player2_loot));
        }
        fn hide_loot(
            ref self: ContractState, game_id: u128, loot_id: u8, x0: u8, y0: u8, x1: u8, y1: u8
        ) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();

            let mut game_room = get!(self.world(), (game_id), GameRoom);
            // assert caller is in game
            assert(
                caller == game_room.player1 || caller == game_room.player2,
                'Caller is not in the game'
            );

            // assert if phase is 1: hide
            assert(game_room.phase == 1, 'Not in hide phase');

            let player = if (game_room.player1 == caller) {
                game_room.player1
            } else {
                game_room.player2
            };
            let mut player_loot = get!(self.world(), (game_id, player), Loot);

            // assert loot_id is valid
            assert(loot_id == 1 || loot_id == 2 || loot_id == 3, 'Invalid loot id');

            // assert coordinates are valid
            assert(x0 < constants::MAX_X && y0 < constants::MAX_Y, 'Invalid coordinates');
            assert(x1 < constants::MAX_X && y1 < constants::MAX_Y, 'Invalid coordinates');

            match loot_id {
                0 => { assert(false, 'Invalid loot id to hide'); },
                // 1x1
                1 => {
                    assert(
                        player_loot.one_one - player_loot.one_one_hidden > 0, 'No more 1x1 loot'
                    );

                    // Bury Loot
                    player_loot.one_one -= 1;
                    player_loot.one_one_hidden += 1;
                    let island_coords = IslandCoordsTrait::new(game_id, player, x0, y0, 1, 1);
                    set!(self.world(), (island_coords, player_loot));
                },
                // 3x1
                2 => {
                    assert(
                        player_loot.three_one - player_loot.three_one_hidden > 0, 'No more 3x1 loot'
                    );

                    // === Bury Loot ===

                    // track the long loot
                    if (player_loot.three_one - player_loot.three_one_hidden == 2) {
                        player_loot.three_long_x0_b = x0;
                        player_loot.three_long_x1_b = x1;
                        player_loot.three_long_y0_b = y0;
                        player_loot.three_long_y1_b = y1;
                    } else {
                        player_loot.three_long_x0_a = x0;
                        player_loot.three_long_x1_a = x1;
                        player_loot.three_long_y0_a = y0;
                        player_loot.three_long_y1_a = y1;
                    }

                    // decrement counters
                    player_loot.three_one -= 1;
                    player_loot.three_one_hidden += 1;

                    // set loot
                    let mut x = x0; //copy
                    let mut y = y0; //copy

                    while x < x1 + 1 {
                        while y < y1 + 1 {
                            let island_coords = IslandCoordsTrait::new(game_id, player, x, y, 1, 2);
                            set!(self.world(), (island_coords));
                            y += 1;
                        };
                        x += 1;
                    };

                    set!(self.world(), (player_loot));
                },
                // 4x1
                3 => {
                    assert(
                        player_loot.four_one - player_loot.four_one_hidden > 0, 'No more 4x1 loot'
                    );

                    // === Bury Loot ===

                    // track the long loot
                    if (player_loot.four_one - player_loot.four_one_hidden == 2) {
                        player_loot.four_long_x0_b = x0;
                        player_loot.four_long_x1_b = x1;
                        player_loot.four_long_y0_b = y0;
                        player_loot.four_long_y1_b = y1;
                    } else {
                        player_loot.four_long_x0_a = x0;
                        player_loot.four_long_x1_a = x1;
                        player_loot.four_long_y0_a = y0;
                        player_loot.four_long_y1_a = y1;
                    }

                    // decrement counters
                    player_loot.four_one -= 1;
                    player_loot.four_one_hidden += 1;

                    // set loot
                    let mut x = x0; //copy
                    let mut y = y0; //copy

                    while x < x1 + 1 {
                        while y < y1 + 1 {
                            let island_coords = IslandCoordsTrait::new(game_id, player, x, y, 1, 3);
                            set!(self.world(), (island_coords));
                            y += 1;
                        };
                        x += 1;
                    };

                    set!(self.world(), (player_loot));
                },
                _ => {
                    // invalid loot id
                    assert(false, 'Invalid loot id to hide');
                }
            }
        }
        fn set_trap(ref self: ContractState, game_id: u128, x: u8, y: u8) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();

            let mut game_room = get!(self.world(), (game_id), GameRoom);
            // assert caller is in game
            assert(
                caller == game_room.player1 || caller == game_room.player2,
                'Caller is not in the game'
            );

            // assert if phase is 1: hide
            assert(game_room.phase == 1, 'Not in hide phase');

            let player = if (game_room.player1 == caller) {
                game_room.player1
            } else {
                game_room.player2
            };
            let mut player_loot = get!(self.world(), (game_id, player), Loot);

            // assert coordinates are valid
            assert(x < constants::MAX_X && y < constants::MAX_Y, 'Invalid coordinates');

            // assert traps are available
            assert(player_loot.traps > 0, 'No more traps available');

            // set trap
            let island_coords = IslandCoordsTrait::new(game_id, player, x, y, 3, 0);
            player_loot.traps -= 1;
            set!(self.world(), (island_coords, player_loot));
        }
        fn dig_for_loot(ref self: ContractState, game_id: u128, x: u8, y: u8) -> bool {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();

            let mut game_room = get!(self.world(), (game_id), GameRoom);
            // assert caller is in game
            assert(
                caller == game_room.player1 || caller == game_room.player2,
                'Caller is not in the game'
            );

            // assert if phase is 2: seek
            assert(game_room.phase == 2, 'Not in seek phase');

            // check if there is enough tries
            let mut round = get!(self.world(), (game_id, game_room.round_num), Round);
            let player = if (game_room.player1 == caller) {
                game_room.player1
            } else {
                game_room.player2
            };
            let opponent = if (game_room.player1 == caller) {
                game_room.player2
            } else {
                game_room.player1
            };

            let mut player_loot = get!(self.world(), (game_id, player), Loot);
            let mut opponent_loot = get!(self.world(), (game_id, opponent), Loot);

            let player_tries = if (game_room.player1 == caller) {
                round.player1_tries
            } else {
                round.player2_tries
            };

            assert(player_tries + player_loot.shovels > 0, 'No more chances');

            // check to see if loot was found
            let mut island_coords = get!(self.world(), (game_id, opponent, x, y), IslandCoords);
            let found_loot = (island_coords.terrain == 1);
            if (found_loot) {
                island_coords.terrain = 88;
                set!(self.world(), (island_coords));
            } else {
                // reduce tries
                if (game_room.player1 == caller) {
                    round.player1_tries -= 1;
                } else {
                    round.player2_tries -= 1;
                }
            }

            // check and return and boolean if loot was entirely found
            if (island_coords.loot_id == 1) {
                opponent_loot.one_one_hidden -= 1;
                return true;
            } else if (island_coords.loot_id == 2) {
                // check if the entire loot 2 is found
                if (opponent_loot.three_one_hidden == 2) {
                    if (opponent_loot.three_long_x0_b != opponent_loot.three_long_x1_b) {
                        let mut check_x = opponent_loot.three_long_x0_b; //copy
                        let mut all_found = true;
                        while check_x < opponent_loot.three_long_x1_b + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, check_x, y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_x += 1;
                        };
                        return all_found;
                    } else {
                        // case when y0 != y1
                        let mut check_y = opponent_loot.three_long_y0_b; //copy
                        let mut all_found = true;
                        while check_y < opponent_loot.three_long_y1_b + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, x, check_y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_y += 1;
                        };
                        return all_found;
                    }
                    //return false;
                } else { // if hidden is 1 or 0
                    if (opponent_loot.three_long_x0_a != opponent_loot.three_long_x1_a) {
                        let mut check_x = opponent_loot.three_long_x0_a; //copy
                        let mut all_found = true;
                        while check_x < opponent_loot.three_long_x1_a + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, check_x, y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_x += 1;
                        };
                        return all_found;
                    } else {
                        // case when y0 != y1
                        let mut check_y = opponent_loot.three_long_y0_a; //copy
                        let mut all_found = true;
                        while check_y < opponent_loot.three_long_y1_a + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, x, check_y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_y += 1;
                        };
                        return all_found;
                    }
                    //return false;
                }
            } else {
                //(island_coords.loot_id == 3)
                // check if the entire loot 2 is found
                if (opponent_loot.four_one_hidden == 2) {
                    if (opponent_loot.four_long_x0_b != opponent_loot.four_long_x1_b) {
                        let mut check_x = opponent_loot.four_long_x0_b; //copy
                        let mut all_found = true;
                        while check_x < opponent_loot.four_long_x1_b + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, check_x, y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_x += 1;
                        };
                        return all_found;
                    } else {
                        // case when y0 != y1
                        let mut check_y = opponent_loot.four_long_y0_b; //copy
                        let mut all_found = true;
                        while check_y < opponent_loot.four_long_y1_b + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, x, check_y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_y += 1;
                        };
                        return all_found;
                    }
                    //return false;
                } else { // if hidden is 1 or 0
                    if (opponent_loot.four_long_x0_a != opponent_loot.four_long_x1_a) {
                        let mut check_x = opponent_loot.four_long_x0_a; //copy
                        let mut all_found = true;
                        while check_x < opponent_loot.four_long_x1_a + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, check_x, y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_x += 1;
                        };
                        return all_found;
                    } else {
                        // case when y0 != y1
                        let mut check_y = opponent_loot.four_long_y0_a; //copy
                        let mut all_found = true;
                        while check_y < opponent_loot.four_long_y1_a + 1 {
                            let check_island_coords = get!(
                                self.world(), (game_id, opponent, x, check_y), IslandCoords
                            );
                            if (check_island_coords.terrain == 1) {
                                all_found = false;
                            }
                            check_y += 1;
                        };
                        return all_found;
                    }
                    //return false;
                }
            }
        }
        fn end_round(ref self: ContractState, game_id: u128) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();

            let mut game_room = get!(self.world(), (game_id), GameRoom);
            // assert caller is in game
            assert(
                caller == game_room.player1 || caller == game_room.player2,
                'Caller is not in the game'
            );

            // assert round_num is not 0 and phase is not 0
            assert(game_room.round_num != 0 && game_room.phase != 0, 'Game has not started');

            let player = if (game_room.player1 == caller) {
                game_room.player1
            } else {
                game_room.player2
            };
            let opponent = if (game_room.player1 == caller) {
                game_room.player2
            } else {
                game_room.player1
            };

            let player_loot = get!(self.world(), (game_id, caller), Loot);
            let opponent_loot = get!(self.world(), (game_id, opponent), Loot);

            if (game_room.phase == 1) {
                game_room.phase = 2;
            } else if (game_room.phase == 2) {
                if (game_room.round_num < 3) {
                    game_room.phase = 1;
                    game_room.round_num += 1;
                } else {
                    // if round_num == 3 and phase ==2, tabulate score and end game

                    // ===== SCORE TABULATION and GameRoom Update =====
                    let player_score = (player_loot.one_one
                        + player_loot.one_one_hidden
                        + player_loot.three_one
                        + player_loot.three_one_hidden
                        + player_loot.four_one
                        + player_loot.four_one_hidden);

                    let opponent_score = (opponent_loot.one_one
                        + opponent_loot.one_one_hidden
                        + opponent_loot.three_one
                        + opponent_loot.three_one_hidden
                        + opponent_loot.four_one
                        + opponent_loot.four_one_hidden);

                    if (player_score > opponent_score) {
                        game_room.winner = player;
                    } else {
                        game_room.winner = opponent;
                    }
                    game_room.state = 6;
                }
            }

            set!(self.world(), (game_room));
        }
    }
    #[starknet::interface]
    trait IDojoInit<ContractState> {
        fn dojo_init(self: @ContractState);
    }

    #[abi(embed_v0)]
    impl IDojoInitImpl of IDojoInit<ContractState> {
        fn dojo_init(self: @ContractState) {
            assert(
                starknet::get_caller_address() == self.world().contract_address,
                'Only world can init'
            );
            assert(
                self
                    .world()
                    .is_owner(self.selector(), starknet::get_tx_info().account_contract_address),
                'Only owner can init'
            );
        }
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        UpgradeableEvent: dojo::contract::upgradeable::upgradeable::Event,
    }

    #[storage]
    struct Storage {
        world_dispatcher: IWorldDispatcher,
        #[substorage(v0)]
        upgradeable: dojo::contract::upgradeable::upgradeable::Storage,
    }
}

