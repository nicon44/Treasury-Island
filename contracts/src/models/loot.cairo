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
            four_one_indices: ArrayTrait::<u8>::new(),

            three_one: 1,
            three_one_hidden: 0,
            three_one_indices: ArrayTrait::<u8>::new(),

            two_one: 1,
            two_one_hidden: 0,
            two_one_indices: ArrayTrait::<u8>::new(),
        
            one_one: 2,
            one_one_hidden: 0,
            one_one_indices: ArrayTrait::<u8>::new(),

            shovels: 0,
            traps: 0
        }
    }


}