// Core imports
use starknet::{ContractAddress, get_block_timestamp, get_block_info};
use core::debug::PrintTrait;

// Inernal imports

use tisland::models::index::Player;

mod errors {
    const PLAYER_NOT_EXIST: felt252 = 'Player: does not exist';
    const PLAYER_ALREADY_EXIST: felt252 = 'Player: already exist';
    const PLAYER_INVALID_NAME: felt252 = 'Player: invalid name';
    const PLAYER_IS_DEAD: felt252 = 'Player: is dead';
}

#[generate_trait]
impl PlayerImpl of PlayerTrait {
    #[inline]
    fn new(player_id: ContractAddress, name: felt252, pfp_num:u8) -> Player {
        // [Check] Name is valid
        assert(name != 0, errors::PLAYER_INVALID_NAME);
        
        // [Return] Player
        Player {
            player_id,
            name,
            pfp_num,
            timestamp: get_block_timestamp(),
            score: 0
        }
    }

    #[inline]
    fn update_pfp(ref self: Player, pfp_num:u8) {
        //TODO: do asserts
        self.pfp_num = pfp_num;
    }

    #[inline]
    fn update_score(ref self: Player, score:u256) {
        //TODO: do asserts
        self.score = score;
    }

}

#[generate_trait]
impl PlayerAssert of AssertTrait {
    #[inline]
    fn assert_exists(self: Player) {
        assert(0 != self.name, errors::PLAYER_NOT_EXIST);
    }

    #[inline]
    fn assert_not_exists(self: Player) {
        assert(0 == self.name, errors::PLAYER_ALREADY_EXIST);
    }
}

#[cfg(test)]
mod tests {
    // Local imports

    // use super::{
    //     Player, PlayerTrait, 
    //     Role, Mode, ModeTrait, Direction, Monster, MonsterTrait,
    //     DEFAULT_PLAYER_DAMAGE, DEFAULT_PLAYER_HEALTH, DEFAULT_PLAYER_GOLD, DEFAULT_POTION_COST,
    //     DEFAULT_POTION_HEAL
    // };

    // // Constants

    // const ID: felt252 = 'ID';
    // const PLAYER_NAME: felt252 = 'Alice';
    // const TIME: u64 = 0;
    // const MODE: Mode = Mode::Easy;

    // #[test]
    // fn test_player_new() {
    //     let player = PlayerTrait::new(ID, PLAYER_NAME, TIME, MODE);
    //     // assert_eq!(player.id, ID);
    //     assert_eq!(player.name, PLAYER_NAME);
    //     // assert_eq!(player.mode, MODE.into());
    //     // assert_eq!(player.role, Role::None.into());
    //     // assert_eq!(player.damage, DEFAULT_PLAYER_DAMAGE);
    //     // assert_eq!(player.health, DEFAULT_PLAYER_HEALTH);
    //     // assert_eq!(player.gold, DEFAULT_PLAYER_GOLD);
    //     // assert_eq!(player.score, 0);
    // }

}

