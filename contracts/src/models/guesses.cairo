// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;


// Inernal imports

use tisland::models::index::Guesses;
use tisland::libs::utils;

mod errors {
    
}

#[generate_trait]
impl GuessesImpl of GuessesTrait {
    #[inline]
    fn new(game_id: u128, player_id: ContractAddress,
        x:u8, y:u8, round_number:u8, correct:bool
    ) -> Guesses {
        // [Return] GameRoom
        Guesses {
            game_id,
            player_id,
            x,
            y,
            index: utils::XY_TO_INDEX(x, y),
            round_number,
            correct
        }
    }


}