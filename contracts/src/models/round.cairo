// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;


// Inernal imports

use tisland::models::index::Round;
use tisland::constants::MAX_TRIES;
use tisland::libs::utils;

mod errors {
    
}

#[generate_trait]
impl RoundImpl of RoundTrait {
    #[inline]
    fn new(game_id: u128, round_number: u8) -> Round {
        // [Return] Round
        Round {
            game_id,
            round_number,
            player1_tries: MAX_TRIES,
            player2_tries: MAX_TRIES
        }
    }


}