// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;


// Inernal imports

use tisland::models::index::{LootTracker, LOcounter};
use tisland::constants::MAX_TRIES;
use tisland::libs::utils;

mod errors {
    
}

#[generate_trait]
impl LootTrackerImpl of LootTrackerTrait {
    #[inline]
    fn new(game_id: u128, player_id: ContractAddress
    ) -> LootTracker {
        
        LootTracker {
            game_id,
            player_id,
            loot_ids: ArrayTrait::<u8>::new(),
            loot_count: LOcounter{five:0,four:0,three:0,two:0,one:0},
            loot_hidden_count: LOcounter{five:0,four:0,three:0,two:0,one:0},
            shovels: 0,
            traps: 0
        }
    }


}