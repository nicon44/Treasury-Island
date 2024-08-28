// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;


// Inernal imports

use tisland::models::index::GameRoom;
use tisland::libs::utils;

mod errors {
    
}

#[generate_trait]
impl GameRoomImpl of GameRoomTrait {
    #[inline]
    fn new(game_id: u128, player1: ContractAddress) -> GameRoom {
        // [Return] GameRoom
        GameRoom {
            game_id,
            player1,
            player2:utils::ZERO(),
            invited_player: utils::ZERO(),
            state: 1,
            round_num: 0,
            phase: 0,
            winner: utils::ZERO(),
            timestamp_start: get_block_timestamp(),
            expiry_time: 0,
            timestamp_end: 0
        }
    }

    #[inline]
    fn invite_player(ref self: GameRoom, player_id: ContractAddress) {
        self.invited_player = player_id;
    }

    #[inline]
    fn update_player2(ref self: GameRoom, player2: ContractAddress) {
        //TODO: asserts (especially invite player check)

        self.player2 = player2;
    }

    #[inline]
    fn update_players(ref self: GameRoom, player1: ContractAddress, player2: ContractAddress) {
        //TODO: asserts

        self.player1 = player1;
        self.player2 = player2;
    }

    #[inline]
    fn start_gameroom(ref self: GameRoom, caller: ContractAddress) {
        //TODO: assert if caller is from game

        // [Assert] Caller is player1 or player2
        assert(caller == self.player1 || caller == self.player2, 
            'Caller is not in the game');

        self.state = 5;
        self.round_num = 1;
        self.phase= 1;

        // TODO: initialize island Coords?
    }

    #[inline]
    fn update_state(ref self: GameRoom, state: u8) {
        self.state = state;
    }

    #[inline]
    fn update_round_num(ref self: GameRoom, round_num: u8) {
        self.round_num = round_num;
    }

    #[inline]
    fn update_phase(ref self: GameRoom, phase: u8) {
        self.phase = phase;
    }

    #[inline]
    fn update_winner(ref self: GameRoom, winner: ContractAddress) {
        self.winner = winner;
    }

    #[inline]
    fn update_timestamp_end(ref self: GameRoom) {
        self.timestamp_end = get_block_timestamp();
    }


}