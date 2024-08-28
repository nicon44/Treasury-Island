// Starknet imports

use starknet::{ContractAddress, get_block_timestamp, get_block_info};

// Dojo imports

use dojo::world::IWorldDispatcher;

// Interfaces

#[dojo::interface]
trait ILobby {
    fn register_player(ref world: IWorldDispatcher, name: felt252, pfp_num: u8);
    fn update_pfp(ref world: IWorldDispatcher, pfp_num: u8);
    fn create_room(ref world: IWorldDispatcher);
    fn invite_player(ref world: IWorldDispatcher, player_id: ContractAddress, game_id: u128);
    fn refuse_invite(ref world: IWorldDispatcher, game_id: u128);
    fn join_room(ref world: IWorldDispatcher, game_id: u128);
    fn close_room(ref world: IWorldDispatcher, game_id: u128);
}

// Contracts

#[dojo::contract]
mod lobby {
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

        fn register_player(ref world: IWorldDispatcher, name: felt252, pfp_num: u8) {

            let caller: ContractAddress = starknet::get_caller_address();
            // [Create] Player
            let player = PlayerTrait::new(caller, name, pfp_num);

            // [Save] Player
            set!(self.world(), (player));
        }

        fn update_pfp(ref world: IWorldDispatcher, pfp_num: u8) {

            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] Player
            let mut player = get!(self.world(), (caller), Player);

            // [Update] Player
            player.update_pfp(pfp_num);

            // [Save] Player
            set!(self.world(), (player));
        }

        fn create_room(ref world: IWorldDispatcher) {

            let caller: ContractAddress = starknet::get_caller_address();

            let game_id: u128 = make_seed(caller, world.uuid()); // TODO: generate game_id
            // [Create] GameRoom
            let game_room = GameRoomTrait::new(game_id, caller);

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }

        fn invite_player(ref world: IWorldDispatcher, player_id: ContractAddress, game_id: u128) {

            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // [Update] GameRoom
            game_room.invite_player(player_id);

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }

        fn refuse_invite(ref world: IWorldDispatcher, game_id: u128) {

            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // [Update] GameRoom
            game_room.invite_player(utils::ZERO());

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }

        fn join_room(ref world: IWorldDispatcher, game_id: u128) {

            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            // [Update] GameRoom
            game_room.update_player2(caller);

            // [Save] GameRoom
            set!(self.world(), (game_room));
        }

        fn close_room(ref world: IWorldDispatcher, game_id: u128) {

            let caller: ContractAddress = starknet::get_caller_address();
            // [Get] GameRoom
            let mut game_room = get!(self.world(), (game_id), GameRoom);

            assert(caller == game_room.player1, 'Only player1 can close the room');

            // [Delete] GameRoom
            delete!(self.world(), (game_room));
        }
    }

}

