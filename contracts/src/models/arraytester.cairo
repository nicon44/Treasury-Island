// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;
use tisland::utils::arrays::{ArrayTrait};


// Inernal imports

use tisland::models::index::ArrayTester;
use tisland::constants::{MAX_TRIES, MAX_X, MAX_Y};
use tisland::libs::utils;

mod errors {
    
}

#[generate_trait]
impl ArrayTesterImpl of ArrayTesterTrait {
    #[inline]
    fn new(game_id: u128, round_number: u8) -> ArrayTester {
        // [Return] Round
        let mut newObj = ArrayTester {
            game_id,
            mapunits: array![],
        };
        let mut counter = 0;
        while counter < MAX_Y*MAX_X {
            newObj.mapunits.append(0);
            counter += 1;
        };

        newObj
    }

    #[inline]
    fn get_mapunits(ref self: ArrayTester, game_id: u128, index:u8) -> u8{
        // [Return] mapunits
        *self.mapunits.at(index.into())
    }


}