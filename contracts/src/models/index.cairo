use starknet:: ContractAddress;

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

    pub terrain: u8, // prototyping without enums first: 88-None, 1-Loot, 2-Obstacle, 3-Trap
    pub loot_id: u8, // loot id: 1: one_one, 2: three_one, 3: four_one
}

#[derive(Copy, Drop, Serde)]
#[dojo::model]
pub struct Loot {
    #[key]
    pub game_id: u128,
    #[key]
    pub player_id: ContractAddress,

    // Count of type of Loots
    pub four_one: u8, 
    pub four_one_hidden: u8, // how many of the 4x1 loot are hidden
    pub four_long_x0_a: u8,  
    pub four_long_x1_a: u8,
    pub four_long_y0_a: u8,
    pub four_long_y1_a: u8,

    pub four_long_x0_b: u8,
    pub four_long_x1_b: u8,
    pub four_long_y0_b: u8,
    pub four_long_y1_b: u8,


    pub three_one: u8,
    pub three_one_hidden: u8, // how many of the 3x1 loot are hidden
    pub three_long_x0_a: u8, 
    pub three_long_x1_a: u8,
    pub three_long_y0_a: u8,
    pub three_long_y1_a: u8,

    pub three_long_x0_b: u8,
    pub three_long_x1_b: u8,
    pub three_long_y0_b: u8,
    pub three_long_y1_b: u8, 


    pub one_one: u8,
    pub one_one_hidden: u8, // how many of the 1x1 loot are hidden

    pub shovels: u8,
    pub traps: u8,
}
