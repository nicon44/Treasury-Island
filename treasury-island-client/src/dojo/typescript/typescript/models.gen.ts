
// Generated by dojo-bindgen on Wed, 28 Aug 2024 13:59:41 +0000. Do not modify this file manually.
// Import the necessary types from the recs SDK
// generate again with `sozo build --typescript` 
import { defineComponent, Type as RecsType, World } from "@dojoengine/recs";

export type ContractComponents = Awaited<ReturnType<typeof defineContractComponents>>;



// Type definition for `dojo::model::layout::Layout` enum
export type Layout = { type: 'Fixed'; value: RecsType.NumberArray; } | { type: 'Struct'; value: RecsType.StringArray; } | { type: 'Tuple'; value: RecsType.StringArray; } | { type: 'Array'; value: RecsType.StringArray; } | { type: 'ByteArray'; } | { type: 'Enum'; value: RecsType.StringArray; };

export const LayoutDefinition = {
    type: RecsType.String,
    value: RecsType.String
};
        
// Type definition for `dojo::model::layout::FieldLayout` struct
export interface FieldLayout {
    selector: BigInt;
    layout: Layout;
    
}
export const FieldLayoutDefinition = {
    selector: RecsType.BigInt,
    layout: LayoutDefinition,
    
};

// Type definition for `core::byte_array::ByteArray` struct
export interface ByteArray {
    data: String[];
    pending_word: BigInt;
    pending_word_len: Number;
    
}
export const ByteArrayDefinition = {
    data: RecsType.StringArray,
    pending_word: RecsType.BigInt,
    pending_word_len: RecsType.Number,
    
};

// Type definition for `tisland::models::index::Loot` struct
export interface Loot {
    game_id: BigInt;
    player_id: BigInt;
    four_one: Number;
    four_one_hidden: Number;
    four_long_x0_a: Number;
    four_long_x1_a: Number;
    four_long_y0_a: Number;
    four_long_y1_a: Number;
    four_long_x0_b: Number;
    four_long_x1_b: Number;
    four_long_y0_b: Number;
    four_long_y1_b: Number;
    three_one: Number;
    three_one_hidden: Number;
    three_long_x0_a: Number;
    three_long_x1_a: Number;
    three_long_y0_a: Number;
    three_long_y1_a: Number;
    three_long_x0_b: Number;
    three_long_x1_b: Number;
    three_long_y0_b: Number;
    three_long_y1_b: Number;
    one_one: Number;
    one_one_hidden: Number;
    shovels: Number;
    traps: Number;
    
}
export const LootDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    four_one: RecsType.Number,
    four_one_hidden: RecsType.Number,
    four_long_x0_a: RecsType.Number,
    four_long_x1_a: RecsType.Number,
    four_long_y0_a: RecsType.Number,
    four_long_y1_a: RecsType.Number,
    four_long_x0_b: RecsType.Number,
    four_long_x1_b: RecsType.Number,
    four_long_y0_b: RecsType.Number,
    four_long_y1_b: RecsType.Number,
    three_one: RecsType.Number,
    three_one_hidden: RecsType.Number,
    three_long_x0_a: RecsType.Number,
    three_long_x1_a: RecsType.Number,
    three_long_y0_a: RecsType.Number,
    three_long_y1_a: RecsType.Number,
    three_long_x0_b: RecsType.Number,
    three_long_x1_b: RecsType.Number,
    three_long_y0_b: RecsType.Number,
    three_long_y1_b: RecsType.Number,
    one_one: RecsType.Number,
    one_one_hidden: RecsType.Number,
    shovels: RecsType.Number,
    traps: RecsType.Number,
    
};


// Type definition for `core::integer::u256` struct
export interface U256 {
    low: BigInt;
    high: BigInt;
    
}
export const U256Definition = {
    low: RecsType.BigInt,
    high: RecsType.BigInt,
    
};

// Type definition for `tisland::models::index::Player` struct
export interface Player {
    player_id: BigInt;
    name: BigInt;
    pfp_num: Number;
    timestamp: Number;
    score: U256;
    
}
export const PlayerDefinition = {
    player_id: RecsType.BigInt,
    name: RecsType.BigInt,
    pfp_num: RecsType.Number,
    timestamp: RecsType.Number,
    score: U256Definition,
    
};


// Type definition for `tisland::models::index::Round` struct
export interface Round {
    game_id: BigInt;
    round_number: Number;
    player1_tries: Number;
    player2_tries: Number;
    
}
export const RoundDefinition = {
    game_id: RecsType.BigInt,
    round_number: RecsType.Number,
    player1_tries: RecsType.Number,
    player2_tries: RecsType.Number,
    
};


// Type definition for `tisland::models::index::IslandCoords` struct
export interface IslandCoords {
    game_id: BigInt;
    player_id: BigInt;
    x: Number;
    y: Number;
    terrain: Number;
    loot_id: Number;
    
}
export const IslandCoordsDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    x: RecsType.Number,
    y: RecsType.Number,
    terrain: RecsType.Number,
    loot_id: RecsType.Number,
    
};


// Type definition for `tisland::models::index::GameRoom` struct
export interface GameRoom {
    game_id: BigInt;
    player1: BigInt;
    player2: BigInt;
    invited_player: BigInt;
    state: Number;
    round_num: Number;
    phase: Number;
    winner: BigInt;
    timestamp_start: Number;
    expiry_time: Number;
    timestamp_end: Number;
    
}
export const GameRoomDefinition = {
    game_id: RecsType.BigInt,
    player1: RecsType.BigInt,
    player2: RecsType.BigInt,
    invited_player: RecsType.BigInt,
    state: RecsType.Number,
    round_num: RecsType.Number,
    phase: RecsType.Number,
    winner: RecsType.BigInt,
    timestamp_start: RecsType.Number,
    expiry_time: RecsType.Number,
    timestamp_end: RecsType.Number,
    
};


export function defineContractComponents(world: World) {
    return {

        // Model definition for `tisland::models::index::Loot` model
        Loot: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player_id: RecsType.BigInt,
                    four_one: RecsType.Number,
                    four_one_hidden: RecsType.Number,
                    four_long_x0_a: RecsType.Number,
                    four_long_x1_a: RecsType.Number,
                    four_long_y0_a: RecsType.Number,
                    four_long_y1_a: RecsType.Number,
                    four_long_x0_b: RecsType.Number,
                    four_long_x1_b: RecsType.Number,
                    four_long_y0_b: RecsType.Number,
                    four_long_y1_b: RecsType.Number,
                    three_one: RecsType.Number,
                    three_one_hidden: RecsType.Number,
                    three_long_x0_a: RecsType.Number,
                    three_long_x1_a: RecsType.Number,
                    three_long_y0_a: RecsType.Number,
                    three_long_y1_a: RecsType.Number,
                    three_long_x0_b: RecsType.Number,
                    three_long_x1_b: RecsType.Number,
                    three_long_y0_b: RecsType.Number,
                    three_long_y1_b: RecsType.Number,
                    one_one: RecsType.Number,
                    one_one_hidden: RecsType.Number,
                    shovels: RecsType.Number,
                    traps: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "Loot",
                        types: ["u128", "ContractAddress", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8", "u8"],
                        customTypes: [],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::Player` model
        Player: (() => {
            return defineComponent(
                world,
                {
                    player_id: RecsType.BigInt,
                    name: RecsType.BigInt,
                    pfp_num: RecsType.Number,
                    timestamp: RecsType.Number,
                    score: U256Definition,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "Player",
                        types: ["ContractAddress", "felt252", "u8", "u64"],
                        customTypes: ["U256"],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::Round` model
        Round: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    round_number: RecsType.Number,
                    player1_tries: RecsType.Number,
                    player2_tries: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "Round",
                        types: ["u128", "u8", "u8", "u8"],
                        customTypes: [],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::IslandCoords` model
        IslandCoords: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player_id: RecsType.BigInt,
                    x: RecsType.Number,
                    y: RecsType.Number,
                    terrain: RecsType.Number,
                    loot_id: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "IslandCoords",
                        types: ["u128", "ContractAddress", "u8", "u8", "u8", "u8"],
                        customTypes: [],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::GameRoom` model
        GameRoom: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player1: RecsType.BigInt,
                    player2: RecsType.BigInt,
                    invited_player: RecsType.BigInt,
                    state: RecsType.Number,
                    round_num: RecsType.Number,
                    phase: RecsType.Number,
                    winner: RecsType.BigInt,
                    timestamp_start: RecsType.Number,
                    expiry_time: RecsType.Number,
                    timestamp_end: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "GameRoom",
                        types: ["u128", "ContractAddress", "ContractAddress", "ContractAddress", "u8", "u8", "u8", "ContractAddress", "u64", "u64", "u64"],
                        customTypes: [],
                    },
                }
            );
        })(),
    };
}
