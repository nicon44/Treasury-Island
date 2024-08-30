// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;


// Inernal imports

use tisland::models::index::Gold;
use tisland::constants::DEFAULT_STARTING_GOLD;
use tisland::libs::utils;

mod errors {
    
}

#[generate_trait]
impl GoldImpl of GoldTrait {
    #[inline]
    fn new(game_id: u128, player_id: ContractAddress) -> Gold {
        // [Return] Round
        Gold {
            game_id,
            player_id,
            balance: DEFAULT_STARTING_GOLD
        }
    }


}