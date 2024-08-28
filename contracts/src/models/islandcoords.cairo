// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;


// Inernal imports

use tisland::models::index::IslandCoords;
use tisland::libs::utils;

mod errors {
    
}

#[generate_trait]
impl IslandCoordsImpl of IslandCoordsTrait {
    #[inline]
    fn new(game_id: u128, player_id: ContractAddress,
        x:u8, y:u8, terrain:u8, loot_id:u8
    ) -> IslandCoords {
        // [Return] GameRoom
        IslandCoords {
            game_id,
            player_id,
            x,
            y,
            terrain,
            loot_id
        }
    }


}