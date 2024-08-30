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
    use tisland::models::index::{
        Player, GameRoom, IslandCoords, Loot, Round, ArrayTester, LootObject, LootTracker, Guesses
    };
    use tisland::models::gameroom::{GameRoomTrait};
    use tisland::models::loot::{LootTrait};
    use tisland::models::loottracker::{LootTrackerTrait};
    use tisland::models::islandcoords::{IslandCoordsTrait};
    use tisland::models::round::{RoundTrait};
    use tisland::models::arraytester::{ArrayTesterTrait};
    use tisland::models::lootobjects::{LootObjectTrait};
    use tisland::models::guesses::{GuessesTrait};
    use tisland::libs::utils;
    //use super::{ArrayTrait};
    //use tisland::utils::arrays::{ArrayTrait};
    use tisland::constants::{
        FOUR_BY_ONE, FOUR_BY_ONE_DIMS, THREE_BY_ONE, THREE_BY_ONE_DIMS, TWO_BY_ONE, TWO_BY_ONE_DIMS,
        ONE_BY_ONE, ONE_BY_ONE_DIMS, MAX_X, MAX_Y
    };
    //use tisland::libs::seeder::{make_seed};

    // Local imports

    // Implementations

    #[abi(embed_v0)]
    impl GameRoomImpl of super::IGameRoom<ContractState> {
        fn start_game(ref self: ContractState, game_id: u128) {
            let world = self.world_dispatcher.read();
            //1. asserts: both players are in game
            //2. init GameRoom object (set state, round_num, phase)
            //3. init Round tracker
            //4. init LootTracker
            //5. init LootObjects

            let caller: ContractAddress = starknet::get_caller_address();
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // assert caller is in game
            // assert both players in game not zero address
            assert(
                game_room.player1 != utils::ZERO() && game_room.player2 != utils::ZERO(),
                'Players are not in the game'
            );
            // assert game not started

            // 2. init GameRoom object (set state, round_num, phase)
            game_room.start_gameroom(caller);

            // 3. init Round tracker
            let round = RoundTrait::new(game_id, game_room.round_num);

            // 4. init LootTracker
            let mut player1_loottracker = LootTrackerTrait::new(game_id, game_room.player1);
            let mut player2_loottracker = LootTrackerTrait::new(game_id, game_room.player2);

            // 5. init LootObjects
            let mut loot_id = 1;
            let mut loot4_count = 1;
            while loot4_count < FOUR_BY_ONE + 1 {
                let player1_loot = LootObjectTrait::new(
                    game_id, game_room.player1, loot_id, FOUR_BY_ONE_DIMS
                );
                player1_loottracker.loot_ids.append(loot_id);
                player1_loottracker.loot_count.four += 1;
                //player1_loottracker.loot_hidden_count.four +=1;

                loot_id += 1;
                let player2_loot = LootObjectTrait::new(
                    game_id, game_room.player2, loot_id, FOUR_BY_ONE_DIMS
                );
                player2_loottracker.loot_ids.append(loot_id);
                player2_loottracker.loot_count.four += 1;
                //player2_loottracker.loot_hidden_count.four +=1;

                set!(self.world(), (player1_loot, player2_loot));
                loot4_count += 1;
                loot_id += 1;
            };

            let mut loot3_count = 1;
            while loot3_count < THREE_BY_ONE + 1 {
                let player1_loot = LootObjectTrait::new(
                    game_id, game_room.player1, loot_id, THREE_BY_ONE_DIMS
                );
                player1_loottracker.loot_ids.append(loot_id);
                player1_loottracker.loot_count.three += 1;
                //player1_loottracker.loot_hidden_count.three +=1;

                loot_id += 1;
                let player2_loot = LootObjectTrait::new(
                    game_id, game_room.player2, loot_id, THREE_BY_ONE_DIMS
                );
                player2_loottracker.loot_ids.append(loot_id);
                player2_loottracker.loot_count.three += 1;
                //player2_loottracker.loot_hidden_count.three +=1;

                set!(self.world(), (player1_loot, player2_loot));
                loot3_count += 1;
                loot_id += 1;
            };
            let mut loot2_count = 1;
            while loot2_count < TWO_BY_ONE + 1 {
                let player1_loot = LootObjectTrait::new(
                    game_id, game_room.player1, loot_id, TWO_BY_ONE_DIMS
                );
                player1_loottracker.loot_ids.append(loot_id);
                player1_loottracker.loot_count.two += 1;
                //player1_loottracker.loot_hidden_count.two +=1;

                loot_id += 1;
                let player2_loot = LootObjectTrait::new(
                    game_id, game_room.player2, loot_id, TWO_BY_ONE_DIMS
                );
                player2_loottracker.loot_ids.append(loot_id);
                player2_loottracker.loot_count.two += 1;
                //player2_loottracker.loot_hidden_count.two +=1;

                set!(self.world(), (player1_loot, player2_loot));
                loot2_count += 1;
                loot_id += 1;
            };

            let mut loot1_count = 1;
            while loot1_count < ONE_BY_ONE + 1 {
                let player1_loot = LootObjectTrait::new(
                    game_id, game_room.player1, loot_id, ONE_BY_ONE_DIMS
                );
                player1_loottracker.loot_ids.append(loot_id);
                player1_loottracker.loot_count.one += 1;
                //player1_loottracker.loot_hidden_count.one +=1;

                loot_id += 1;
                let player2_loot = LootObjectTrait::new(
                    game_id, game_room.player2, loot_id, ONE_BY_ONE_DIMS
                );
                player2_loottracker.loot_ids.append(loot_id);
                player2_loottracker.loot_count.one += 1;
                //player2_loottracker.loot_hidden_count.one +=1;

                set!(self.world(), (player1_loot, player2_loot));
                loot1_count += 1;
                loot_id += 1;
            };

            // [Save] Models
            set!(self.world(), (game_room, round, player1_loottracker, player2_loottracker));
        }
        fn hide_loot(
            ref self: ContractState, game_id: u128, loot_length: u8, x0: u8, y0: u8, x1: u8, y1: u8
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
            let mut player_loottracker = get!(self.world(), (game_id, player), LootTracker);

            // assert loot_id is valid
            assert(loot_length > 0, 'Invalid loot length');

            // assert coordinates are valid
            assert(x0 < MAX_X && y0 < MAX_Y, 'Invalid coordinates');
            assert(x1 < MAX_X && y1 < MAX_Y, 'Invalid coordinates');

            match loot_length {
                0 => { assert(false, 'Invalid loot id to hide'); },
                1 => {
                    assert(player_loottracker.loot_count.one > 0, 'No more 1x1 loot');

                    // Bury Loot
                    let mut loot_ids_array_counter = 0;
                    let mut new_loot_ids: Array<u8> = array![];
                    let mut using_loot_id = 0;
                    while loot_ids_array_counter < player_loottracker.loot_ids.len() {
                        let current_loot_id: u8 = *player_loottracker
                            .loot_ids[loot_ids_array_counter];
                        let loot_object = get!(
                            self.world(), (game_id, player, current_loot_id), LootObject
                        );

                        // look for loot_id with correct length and return back new_loot_ids
                        if (loot_object.loot_length == 1) {
                            using_loot_id = current_loot_id;
                        } else {
                            new_loot_ids.append(current_loot_id);
                        }
                        loot_ids_array_counter += 1;
                    };

                    assert(using_loot_id != 0, 'No more 1x1 loot');

                    // update loot object values
                    let mut actual_loot_object = get!(
                        self.world(), (game_id, player, using_loot_id), LootObject
                    );

                    // update loot object hidden indices
                    let mut x = x0;
                    while x < x1 + 1 {
                        let mut y = y0;
                        while y < y1 + 1 {
                            println!("x: {} y: {}", x, y);
                            let newIndex = utils::XY_TO_INDEX(x, y);

                            // checking if contains (29/08/2024:1447hrs - don't have to check if
                            // contains)
                            // let mut hidden_indices_span =
                            // actual_loot_object.hidden_indices.span();
                            // let contains_object = loop {
                            //     match hidden_indices_span.pop_front() {
                            //         Option::Some(v) => { if v == @newIndex {
                            //             break true;
                            //         } },
                            //         Option::None => { break false; },
                            //     };
                            // };

                            // if(contains_object != true){
                            actual_loot_object.hidden_indices.append(newIndex);

                            // also update island coords with loot id
                            let island_coords = IslandCoordsTrait::new(
                                game_id, player, x, y, 1, using_loot_id
                            ); // specify correct loot_id
                            set!(self.world(), (island_coords));
                            // };
                            y += 1;
                        };
                        x += 1;
                    };

                    // also update loot object hidden status
                    actual_loot_object.hidden = true;

                    // Re-assign back loot_ids_array in loot_tracker

                    //player_loottracker.loot_ids = new_loot_ids; // don't have to reassign until it
                    //is found

                    // update counters in loot_tracker
                    player_loottracker.loot_count.one -= 1; // decrement loot count
                    player_loottracker.loot_hidden_count.one += 1; // add hidden count

                    // Update Island Coords with Loot Id
                    let island_coords = IslandCoordsTrait::new(
                        game_id, player, x0, y0, 1, using_loot_id
                    ); // specify correct loot_id
                    set!(self.world(), (island_coords, player_loottracker, actual_loot_object));
                },
                2 => {
                    assert(player_loottracker.loot_count.two > 0, 'No more 2x1 loot');

                    // Bury Loot
                    let mut loot_ids_array_counter = 0;
                    let mut new_loot_ids: Array<u8> = array![];
                    let mut using_loot_id = 0;
                    while loot_ids_array_counter < player_loottracker.loot_ids.len() {
                        let current_loot_id: u8 = *player_loottracker
                            .loot_ids[loot_ids_array_counter];
                        let loot_object = get!(
                            self.world(), (game_id, player, current_loot_id), LootObject
                        );

                        // look for loot_id with correct length and return back new_loot_ids
                        if (loot_object.loot_length == 2) {
                            using_loot_id = current_loot_id;
                        } else {
                            new_loot_ids.append(current_loot_id);
                        }
                        loot_ids_array_counter += 1;
                    };

                    assert(using_loot_id != 0, 'No more 2x1 loot');

                    // update loot object values
                    let mut actual_loot_object = get!(
                        self.world(), (game_id, player, using_loot_id), LootObject
                    );

                    // update loot object hidden indices
                    let mut x = x0;
                    while x < x1 + 1 {
                        let mut y = y0;
                        while y < y1 + 1 {
                            println!("x: {} y: {}", x, y);
                            let newIndex = utils::XY_TO_INDEX(x, y);

                            // checking if contains (29/08/2024:1447hrs - don't have to check if
                            // contains)
                            // let mut hidden_indices_span =
                            // actual_loot_object.hidden_indices.span();
                            // let contains_object = loop {
                            //     match hidden_indices_span.pop_front() {
                            //         Option::Some(v) => { if v == @newIndex {
                            //             break true;
                            //         } },
                            //         Option::None => { break false; },
                            //     };
                            // };

                            // if(contains_object != true){
                            actual_loot_object.hidden_indices.append(newIndex);

                            // also update island coords with loot id
                            let island_coords = IslandCoordsTrait::new(
                                game_id, player, x, y, 1, using_loot_id
                            ); // specify correct loot_id
                            set!(self.world(), (island_coords));
                            // };
                            y += 1;
                        };
                        x += 1;
                    };

                    // also update loot object hidden status
                    actual_loot_object.hidden = true;

                    // Re-assign back loot_ids_array in loot_tracker

                    //player_loottracker.loot_ids = new_loot_ids; // don't have to reassign until it
                    //is found

                    // update counters in loot_tracker
                    player_loottracker.loot_count.two -= 1; // decrement loot count
                    player_loottracker.loot_hidden_count.two += 1; // add hidden count

                    // Update Island Coords with Loot Id
                    // let island_coords = IslandCoordsTrait::new(game_id, player, x0, y0, 1,
                    // using_loot_id); // specify correct loot_id
                    set!(self.world(), (player_loottracker, actual_loot_object));
                },
                3 => {
                    assert(player_loottracker.loot_count.three > 0, 'No more 3x1 loot');

                    // Bury Loot
                    let mut loot_ids_array_counter = 0;
                    let mut new_loot_ids: Array<u8> = array![];
                    let mut using_loot_id = 0;
                    while loot_ids_array_counter < player_loottracker.loot_ids.len() {
                        let current_loot_id: u8 = *player_loottracker
                            .loot_ids[loot_ids_array_counter];
                        let loot_object = get!(
                            self.world(), (game_id, player, current_loot_id), LootObject
                        );

                        // look for loot_id with correct length and return back new_loot_ids
                        if (loot_object.loot_length == 3) {
                            using_loot_id = current_loot_id;
                        } else {
                            new_loot_ids.append(current_loot_id);
                        }
                        loot_ids_array_counter += 1;
                    };

                    assert(using_loot_id != 0, 'No more 3x1 loot');

                    // update loot object values
                    let mut actual_loot_object = get!(
                        self.world(), (game_id, player, using_loot_id), LootObject
                    );

                    // update loot object hidden indices
                    let mut x = x0;
                    while x < x1 + 1 {
                        let mut y = y0;
                        while y < y1 + 1 {
                            println!("x: {} y: {}", x, y);
                            let newIndex = utils::XY_TO_INDEX(x, y);

                            // checking if contains (29/08/2024:1447hrs - don't have to check if
                            // contains)
                            // let mut hidden_indices_span =
                            // actual_loot_object.hidden_indices.span();
                            // let contains_object = loop {
                            //     match hidden_indices_span.pop_front() {
                            //         Option::Some(v) => { if v == @newIndex {
                            //             break true;
                            //         } },
                            //         Option::None => { break false; },
                            //     };
                            // };

                            // if(contains_object != true){
                            actual_loot_object.hidden_indices.append(newIndex);

                            // also update island coords with loot id
                            let island_coords = IslandCoordsTrait::new(
                                game_id, player, x, y, 1, using_loot_id
                            ); // specify correct loot_id
                            set!(self.world(), (island_coords));
                            // };
                            y += 1;
                        };
                        x += 1;
                    };

                    // also update loot object hidden status
                    actual_loot_object.hidden = true;

                    // Re-assign back loot_ids_array in loot_tracker

                    //player_loottracker.loot_ids = new_loot_ids; // don't have to reassign until it
                    //is found

                    // update counters in loot_tracker
                    player_loottracker.loot_count.three -= 1; // decrement loot count
                    player_loottracker.loot_hidden_count.three += 1; // add hidden count

                    // Update Island Coords with Loot Id
                    let island_coords = IslandCoordsTrait::new(
                        game_id, player, x0, y0, 1, using_loot_id
                    ); // specify correct loot_id
                    set!(self.world(), (island_coords, player_loottracker, actual_loot_object));
                },
                4 => {
                    assert(player_loottracker.loot_count.four > 0, 'No more 4x1 loot');

                    // Bury Loot
                    let mut loot_ids_array_counter = 0;
                    let mut new_loot_ids: Array<u8> = array![];
                    let mut using_loot_id = 0;
                    while loot_ids_array_counter < player_loottracker.loot_ids.len() {
                        let current_loot_id: u8 = *player_loottracker
                            .loot_ids[loot_ids_array_counter];
                        let loot_object = get!(
                            self.world(), (game_id, player, current_loot_id), LootObject
                        );

                        // look for loot_id with correct length and return back new_loot_ids
                        if (loot_object.loot_length == 4) {
                            using_loot_id = current_loot_id;
                        } else {
                            new_loot_ids.append(current_loot_id);
                        }
                        loot_ids_array_counter += 1;
                    };

                    assert(using_loot_id != 0, 'No more 4x1 loot');

                    // update loot object values
                    let mut actual_loot_object = get!(
                        self.world(), (game_id, player, using_loot_id), LootObject
                    );

                    // update loot object hidden indices
                    let mut x = x0;
                    while x < x1 + 1 {
                        let mut y = y0;
                        while y < y1 + 1 {
                            println!("x: {} y: {}", x, y);
                            let newIndex = utils::XY_TO_INDEX(x, y);

                            // checking if contains (29/08/2024:1447hrs - don't have to check if
                            // contains)
                            // let mut hidden_indices_span =
                            // actual_loot_object.hidden_indices.span();
                            // let contains_object = loop {
                            //     match hidden_indices_span.pop_front() {
                            //         Option::Some(v) => { if v == @newIndex {
                            //             break true;
                            //         } },
                            //         Option::None => { break false; },
                            //     };
                            // };

                            // if(contains_object != true){
                            actual_loot_object.hidden_indices.append(newIndex);

                            // also update island coords with loot id
                            let island_coords = IslandCoordsTrait::new(
                                game_id, player, x, y, 1, using_loot_id
                            ); // specify correct loot_id
                            set!(self.world(), (island_coords));
                            // };
                            y += 1;
                        };
                        x += 1;
                    };

                    // also update loot object hidden status
                    actual_loot_object.hidden = true;

                    // Re-assign back loot_ids_array in loot_tracker

                    //player_loottracker.loot_ids = new_loot_ids; // don't have to reassign until it
                    //is found

                    // update counters in loot_tracker
                    player_loottracker.loot_count.four -= 1; // decrement loot count
                    player_loottracker.loot_hidden_count.four += 1; // add hidden count

                    // Update Island Coords with Loot Id
                    let island_coords = IslandCoordsTrait::new(
                        game_id, player, x0, y0, 1, using_loot_id
                    ); // specify correct loot_id
                    set!(self.world(), (island_coords, player_loottracker, actual_loot_object));
                },
                5 => {
                    assert(player_loottracker.loot_count.five > 0, 'No more 5x1 loot');

                    // Bury Loot
                    let mut loot_ids_array_counter = 0;
                    let mut new_loot_ids: Array<u8> = array![];
                    let mut using_loot_id = 0;
                    while loot_ids_array_counter < player_loottracker.loot_ids.len() {
                        let current_loot_id: u8 = *player_loottracker
                            .loot_ids[loot_ids_array_counter];
                        let loot_object = get!(
                            self.world(), (game_id, player, current_loot_id), LootObject
                        );

                        // look for loot_id with correct length and return back new_loot_ids
                        if (loot_object.loot_length == 5) {
                            using_loot_id = current_loot_id;
                        } else {
                            new_loot_ids.append(current_loot_id);
                        }
                        loot_ids_array_counter += 1;
                    };

                    assert(using_loot_id != 0, 'No more 5x1 loot');

                    // update loot object values
                    let mut actual_loot_object = get!(
                        self.world(), (game_id, player, using_loot_id), LootObject
                    );

                    // update loot object hidden indices
                    let mut x = x0;
                    while x < x1 + 1 {
                        let mut y = y0;
                        while y < y1 + 1 {
                            println!("x: {} y: {}", x, y);
                            let newIndex = utils::XY_TO_INDEX(x, y);

                            // checking if contains (29/08/2024:1447hrs - don't have to check if
                            // contains)
                            // let mut hidden_indices_span =
                            // actual_loot_object.hidden_indices.span();
                            // let contains_object = loop {
                            //     match hidden_indices_span.pop_front() {
                            //         Option::Some(v) => { if v == @newIndex {
                            //             break true;
                            //         } },
                            //         Option::None => { break false; },
                            //     };
                            // };

                            // if(contains_object != true){
                            actual_loot_object.hidden_indices.append(newIndex);

                            // also update island coords with loot id
                            let island_coords = IslandCoordsTrait::new(
                                game_id, player, x, y, 1, using_loot_id
                            ); // specify correct loot_id
                            set!(self.world(), (island_coords));
                            // };
                            y += 1;
                        };
                        x += 1;
                    };

                    // also update loot object hidden status
                    actual_loot_object.hidden = true;

                    // Re-assign back loot_ids_array in loot_tracker

                    //player_loottracker.loot_ids = new_loot_ids; // don't have to reassign until it
                    //is found

                    // update counters in loot_tracker
                    player_loottracker.loot_count.five -= 1; // decrement loot count
                    player_loottracker.loot_hidden_count.five += 1; // add hidden count

                    // Update Island Coords with Loot Id
                    let island_coords = IslandCoordsTrait::new(
                        game_id, player, x0, y0, 1, using_loot_id
                    ); // specify correct loot_id
                    set!(self.world(), (island_coords, player_loottracker, actual_loot_object));
                },
                _ => {
                    // invalid loot id
                    assert(false, 'Invalid loot length to hide');
                }
            }
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

            let mut player_loottracker = get!(self.world(), (game_id, player), LootTracker);
            let mut opponent_loottracker = get!(self.world(), (game_id, opponent), LootTracker);

            let player_tries = if (game_room.player1 == caller) {
                round.player1_tries
            } else {
                round.player2_tries
            };

            //assert(player_tries + player_loottracker.shovels > 0, 'No more chances'); // THIS
            //CAUSING MOVE ERROR
            assert(player_tries > 0, 'No more chances');

            // check to see if loot was found
            let mut island_coords = get!(self.world(), (game_id, opponent, x, y), IslandCoords);
            let found_loot = (island_coords.terrain == 1);
            let player_guesses = GuessesTrait::new(
                game_id, player, x, y, game_room.round_num, found_loot
            );
            set!(self.world(), (player_guesses));

            //if loot is found, update player loot
            //else reduce tries
            if (found_loot) {
                // remove loot from island coords
                island_coords.terrain = 88;
                let found_loot_id = island_coords.loot_id;
                island_coords.loot_id = 0;
                set!(self.world(), (island_coords));

                // update loot object that holds this loot coord
                // and check if entire loot is found

                let mut related_loot_object = get!(
                    self.world(), (game_id, opponent, found_loot_id), LootObject
                );
                let mut new_hidden_indices: Array<u8> = array![];
                let mut h_indices_counter = 0;
                while h_indices_counter < related_loot_object.hidden_indices.len() {
                    let current_index = *related_loot_object.hidden_indices[h_indices_counter];
                    if (current_index != utils::XY_TO_INDEX(x, y)) {
                        new_hidden_indices.append(current_index);
                    } else {
                        related_loot_object.revealed_indices.append(current_index);
                    }
                    h_indices_counter += 1;
                };

                related_loot_object.hidden_indices = new_hidden_indices.clone();

                // check if entire loot is found
                if (new_hidden_indices.len() == 0) {
                    println!("Entire loot is found");
                    // update loot hidden tracker stats
                    related_loot_object.hidden = false;
                    match related_loot_object.loot_length {
                        0 => {
                            //assert(false, 'Invalid loot length');
                            println!("Invalid loot length");
                        },
                        1 => {
                            println!("1x1 loot found");
                            opponent_loottracker.loot_hidden_count.one -= 1;
                            player_loottracker.loot_count.one += 1;
                        },
                        2 => {
                            println!("2x1 loot found");
                            opponent_loottracker.loot_hidden_count.two -= 1;
                            player_loottracker.loot_count.two += 1;
                        },
                        3 => {
                            println!("3x1 loot found");
                            opponent_loottracker.loot_hidden_count.three -= 1;
                            player_loottracker.loot_count.three += 1;
                        },
                        4 => {
                            println!("4x1 loot found");
                            opponent_loottracker.loot_hidden_count.four -= 1;
                            player_loottracker.loot_count.four += 1;
                        },
                        5 => {
                            println!("5x1 loot found");
                            opponent_loottracker.loot_hidden_count.five -= 1;
                            player_loottracker.loot_count.five += 1;
                        },
                        _ => {//assert(false, 'Invalid loot length');
                        }
                    }

                    // change owner of loot object
                    let new_loot_object = LootObjectTrait::new(
                        game_id, player, found_loot_id, related_loot_object.loot_length
                    );

                    set!(self.world(), (new_loot_object));
                    //delete!(self.world(), (related_loot_object));

                    // transfer loot_id to player loot tracker
                    player_loottracker.loot_ids.append(found_loot_id);

                    // pop loot_id from opponent
                    let mut loot_ids_array_counter = 0;
                    let mut new_loot_ids: Array<u8> = array![];
                    while loot_ids_array_counter < opponent_loottracker.loot_ids.len() {
                        let current_loot_id: u8 = *opponent_loottracker
                            .loot_ids[loot_ids_array_counter];
                        if (current_loot_id != found_loot_id) {
                            new_loot_ids.append(current_loot_id);
                        }
                        loot_ids_array_counter += 1;
                    };
                    opponent_loottracker.loot_ids = new_loot_ids;
                } else {
                    println!("Loot only partially found");
                }

                // update related_loot_object
                set!(self.world(), (related_loot_object));
                // let previous_related_loot_object = get!(self.world(),
                //     (game_id, opponent, found_loot_id), LootObject);
                // delete!(self.world(), (previous_related_loot_object));

                // not sure why this is moved (problem with player_loottracker)
                set!(self.world(), (player_loottracker, opponent_loottracker));
            } else {
                //reduce tries
                if (game_room.player1 == caller) {
                    round.player1_tries -= 1;
                } else {
                    round.player2_tries -= 1;
                }
                set!(self.world(), (round));
            }

            found_loot
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

            let player_loottracker = get!(self.world(), (game_id, caller), LootTracker);
            let opponent_loottracker = get!(self.world(), (game_id, opponent), LootTracker);

            if (game_room.phase == 1) {
                game_room.phase = 2;
            } else if (game_room.phase == 2) {
                if (game_room.round_num < 3) {
                    game_room.phase = 1;
                    game_room.round_num += 1;

                    // init new round
                    let round = RoundTrait::new(game_id, game_room.round_num);
                    set!(self.world(), (round));
                } else {
                    // if round_num == 3 and phase ==2, tabulate score and end game

                    // ===== SCORE TABULATION and GameRoom Update =====
                    let player_score = player_loottracker.loot_ids.len();
                    let opponent_score = opponent_loottracker.loot_ids.len();

                    if (player_score < opponent_score) {
                        game_room.winner = opponent;
                    } else {
                        game_room.winner = player;
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

