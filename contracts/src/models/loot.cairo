// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;

// Inernal imports

use tisland::models::index::Loot;

mod errors {

}

#[generate_trait]
impl LootImpl of LootTrait {
    #[inline]
    fn new(game_id:u128, player_id: ContractAddress) -> Loot {
        // [Return] Loot
        Loot {
            game_id,
            player_id,
            
            four_one: 1,
            four_one_hidden: 0,
            four_long_x0_a: 88,  
            four_long_x1_a: 88,
            four_long_y0_a: 88,
            four_long_y1_a: 88,
            four_long_x0_b: 88,
            four_long_x1_b: 88,
            four_long_y0_b: 88,
            four_long_y1_b: 88,

            three_one: 1,
            three_one_hidden: 0,
            three_long_x0_a: 88,
            three_long_x1_a: 88,
            three_long_y0_a: 88,
            three_long_y1_a: 88,
            three_long_x0_b: 88,
            three_long_x1_b: 88,
            three_long_y0_b: 88,
            three_long_y1_b: 88,

            one_one: 2,
            one_one_hidden: 0,

            shovels: 0,
            traps: 0
        }
    }


}