use traits::{Into, TryInto};
use starknet::{ContractAddress};

#[derive(Drop, Serde, starknet::Event)]
struct FoundPartOfLootEvent {
    game_id: u128,
    player_id: ContractAddress,
    x: u8,
    y: u8,
}

#[derive(Drop, Serde, starknet::Event)]
struct FoundEntireLootEvent {
    game_id: u128,
    player_id: ContractAddress,
    loot_length:u8,
    loot_id:u8,
    x: u8,
    y: u8,
}