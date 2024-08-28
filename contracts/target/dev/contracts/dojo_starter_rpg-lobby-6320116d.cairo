#[starknet::contract]
pub mod lobby {
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
            "lobby"
        }

        fn namespace(self: @ContractState) -> ByteArray {
            "dojo_starter_rpg"
        }

        fn tag(self: @ContractState) -> ByteArray {
            "dojo_starter_rpg-lobby"
        }

        fn name_hash(self: @ContractState) -> felt252 {
            229973454543114727866574277222284690692772446799889403184419435092149680199
        }

        fn namespace_hash(self: @ContractState) -> felt252 {
            478818318480335965857378696073169770196363091739687234837836645523859370417
        }

        fn selector(self: @ContractState) -> felt252 {
            2802226962479351512134971387636205908564969699330108894029013938632005856798
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
    use tisland::models::index::{Player, GameRoom};
    use tisland::models::player::{PlayerTrait};
    use tisland::models::gameroom::{GameRoomTrait};
    use tisland::libs::utils;
    use tisland::libs::seeder::{make_seed};

    // Local imports

    // Implementations

    #[abi(embed_v0)]
    impl LobbyImpl of super::ILobby<ContractState> {
        fn register_player(ref self: ContractState, name: felt252, pfp_num: u8) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();
            // [Create] Player
            let player = PlayerTrait::new(caller, name, pfp_num);

            // [Save] Player
            set!(self.world(), (player));
        }
        fn update_pfp(ref self: ContractState, pfp_num: u8) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] Player
            let mut player = get!(self.world(), (caller), Player);

            // [Update] Player
            player.update_pfp(pfp_num);

            // [Save] Player
            set!(self.world(), (player));
        }
        fn create_room(ref self: ContractState) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();

            let game_id: u128 = make_seed(caller, world.uuid()); // TODO: generate game_id
            // [Create] GameRoom
            let game_room = GameRoomTrait::new(game_id, caller);

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }
        fn invite_player(ref self: ContractState, player_id: ContractAddress, game_id: u128) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // [Update] GameRoom
            game_room.invite_player(player_id);

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }
        fn refuse_invite(ref self: ContractState, game_id: u128) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // [Update] GameRoom
            game_room.invite_player(utils::ZERO());

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }
        fn join_room(ref self: ContractState, game_id: u128) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // [Update] GameRoom
            game_room.update_player2(caller);

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }
        fn close_room(ref self: ContractState, game_id: u128) {
            let world = self.world_dispatcher.read();
            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            assert(caller == game_room.player1, 'Only player1 can close the room');

            // [Delete] GameRoom
            delete!(self.world(), (game_room));
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

