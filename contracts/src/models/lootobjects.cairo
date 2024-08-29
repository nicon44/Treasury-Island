// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;


// Inernal imports

use tisland::models::index::LootObject;
use tisland::constants::MAX_TRIES;
use tisland::libs::utils;
//use tisland::utils::arrays::{ArrayTrait};

mod errors {
    
}

#[generate_trait]
impl LootObjectImpl of LootObjectTrait {
    #[inline]
    fn new(game_id: u128, player_id: ContractAddress, 
        loot_id:u8, loot_length:u8,

    ) -> LootObject {
        // [Return] Round
        LootObject {
            game_id,
            player_id,
            loot_id,
            loot_length,
            hidden_indices: ArrayTrait::<u8>::new(),
            revealed_indices: ArrayTrait::<u8>::new(),
            hidden: false
        }
    }


}