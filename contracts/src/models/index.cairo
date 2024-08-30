use starknet:: ContractAddress;
use tisland::constants::{MAX_X, MAX_Y};
use tisland::utils::arrays::{ArrayTrait};

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Player {
    #[key]
    pub player_id: ContractAddress,
    pub name: felt252,
    pub pfp_num: u8,
    pub timestamp: u64, //time created
    pub score: u256,
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct GameRoom {
    #[key]
    pub game_id: u128,

    pub player1: ContractAddress,
    pub player2: ContractAddress,
    pub invited_player: ContractAddress,

    pub state: u8, // prototyping without enums (refer to types) 0 - 7
    pub round_num: u8, // 3 rounds according to Nico
    pub phase: u8, // 0: null, 1: hide, 2: seek, 3: market
    pub winner: ContractAddress,

    pub timestamp_start: u64,
    pub expiry_time: u64,
    pub timestamp_end: u64,
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Gold {
    #[key]
    pub game_id: u128,
    #[key]
    pub player_id: ContractAddress,
    pub balance: u32
}

#[derive(Drop, Serde)]
#[dojo::model]
pub struct ArrayTester {
    #[key]
    pub game_id: u128,
    pub mapunits: Array<u8>,
}


#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Round {
    #[key]
    game_id: u128,
    #[key]
    round_number: u8,

    player1_tries: u8, // number of tries to find loot
    player2_tries: u8,

    //---------------
    // state: RoundState,
    // shot_a: Shot,   // duelist_a shot
    // shot_b: Shot,   // duelist_b shot
} // (8 + 232 + 232) = 472 bits ~ 2 felts (max 504)

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct IslandCoords {
    #[key]
    pub game_id: u128,
    #[key]
    pub player_id: ContractAddress,
    #[key]
    pub x: u8,
    #[key]
    pub y: u8,
    pub index: u8,

    pub terrain: u8, // prototyping without enums first: 88-None, 1-Loot, 2-Obstacle, 3-Trap
    //pub loot_id: u8, // loot id: 1: one_one, 2: three_one, 3: four_one
    pub loot_id: u8, // should be the id of the loot object
}


#[derive(Drop, Serde)]
#[dojo::model]
pub struct LootObject {
    #[key]
    pub game_id: u128,
    #[key]
    pub player_id: ContractAddress,
    #[key]
    pub loot_id: u8, // running serial for each player

    pub loot_length: u8,
    pub hidden_indices: Array<u8>, //those indices that are hidden
    pub revealed_indices: Array<u8>, //those indices that are revealed
    pub hidden: bool,
    pub active: bool
}


#[derive(Drop, Serde)]
#[dojo::model]
pub struct LootTracker {
    // tracks where are the loot for each player
    #[key]
    pub game_id: u128,
    #[key]
    pub player_id: ContractAddress,

    pub loot_ids: Array<u8>, 
    pub loot_count: LOcounter,
    pub loot_hidden_count: LOcounter,

    pub shovels: u8,
    pub traps: u8,
}

#[derive(Copy, Drop, Serde, Introspect)]
pub struct LOcounter {
    pub five: u8,
    pub four: u8,
    pub three: u8,
    pub two: u8,
    pub one: u8,
}


#[derive(Drop, Serde)]
#[dojo::model]
pub struct Loot {
    #[key]
    pub game_id: u128,
    #[key]
    pub player_id: ContractAddress,

    // Count of type of Loots
    pub four_one: u8, 
    pub four_one_hidden: u8, // how many of the 4x1 loot are hidden
    // indices that track where they hide the loot
    pub four_one_indices: Array<u8>, // 4x1 loot indices
    //pub four_one_indices_a: Array<u8>, // 4x1 loot indices
    //pub four_one_indices_b: Array<u8>, // 4x1 loot indices


    pub three_one: u8,
    pub three_one_hidden: u8, // how many of the 3x1 loot are hidden
    // indices that track where they hide the loot
    pub three_one_indices: Array<u8>, // 3x1 loot indices
    //pub three_one_indices_a: Array<u8>, // 3x1 loot indices
    //pub three_one_indices_b: Array<u8>, // 3x1 loot indices


    pub two_one: u8,
    pub two_one_hidden: u8, // how many of the 2x1 loot are hidden
    // indices that track where they hide the loot
    pub two_one_indices: Array<u8>, // 2x1 loot indices
    //pub two_one_indices_a: Array<u8>, // 2x1 loot indices
    //pub two_one_indices_b: Array<u8>, // 2x1 loot indices


    pub one_one: u8,
    pub one_one_hidden: u8, // how many of the 1x1 loot are hidden
    // indices that track where they hide the loot
    pub one_one_indices: Array<u8>, // 1x1 loot indices

    pub shovels: u8,
    pub traps: u8,
}


#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Guesses {
    #[key]
    pub game_id: u128,
    #[key]
    pub player_id: ContractAddress,
    #[key]
    pub x: u8,
    #[key]
    pub y: u8,
    pub index: u8,
    pub round_number: u8,

    pub correct: bool,
    
}