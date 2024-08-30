
// Generated by dojo-bindgen on Fri, 30 Aug 2024 15:57:21 +0000. Do not modify this file manually.
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
        
// Type definition for `tisland::models::index::Gold` struct
export interface Gold {
    game_id: BigInt;
    player_id: BigInt;
    balance: Number;
    
}
export const GoldDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    balance: RecsType.Number,
    
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

// Type definition for `dojo::model::layout::FieldLayout` struct
export interface FieldLayout {
    selector: BigInt;
    layout: Layout;
    
}
export const FieldLayoutDefinition = {
    selector: RecsType.BigInt,
    layout: LayoutDefinition,
    
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


// Type definition for `tisland::models::index::LootObject` struct
export interface LootObject {
    game_id: BigInt;
    player_id: BigInt;
    loot_id: Number;
    loot_length: Number;
    hidden_indices: Number[];
    revealed_indices: Number[];
    hidden: Boolean;
    active: Boolean;
    
}
export const LootObjectDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    loot_id: RecsType.Number,
    loot_length: RecsType.Number,
    hidden_indices: RecsType.NumberArray,
    revealed_indices: RecsType.NumberArray,
    hidden: RecsType.Boolean,
    active: RecsType.Boolean,
    
};


// Type definition for `tisland::models::index::LOcounter` struct
export interface LOcounter {
    five: Number;
    four: Number;
    three: Number;
    two: Number;
    one: Number;
    
}
export const LOcounterDefinition = {
    five: RecsType.Number,
    four: RecsType.Number,
    three: RecsType.Number,
    two: RecsType.Number,
    one: RecsType.Number,
    
};

// Type definition for `tisland::models::index::LootTracker` struct
export interface LootTracker {
    game_id: BigInt;
    player_id: BigInt;
    loot_ids: Number[];
    loot_count: LOcounter;
    loot_hidden_count: LOcounter;
    shovels: Number;
    traps: Number;
    
}
export const LootTrackerDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    loot_ids: RecsType.NumberArray,
    loot_count: LOcounterDefinition,
    loot_hidden_count: LOcounterDefinition,
    shovels: RecsType.Number,
    traps: RecsType.Number,
    
};


// Type definition for `tisland::models::index::Loot` struct
export interface Loot {
    game_id: BigInt;
    player_id: BigInt;
    four_one: Number;
    four_one_hidden: Number;
    four_one_indices: Number[];
    three_one: Number;
    three_one_hidden: Number;
    three_one_indices: Number[];
    two_one: Number;
    two_one_hidden: Number;
    two_one_indices: Number[];
    one_one: Number;
    one_one_hidden: Number;
    one_one_indices: Number[];
    shovels: Number;
    traps: Number;
    
}
export const LootDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    four_one: RecsType.Number,
    four_one_hidden: RecsType.Number,
    four_one_indices: RecsType.NumberArray,
    three_one: RecsType.Number,
    three_one_hidden: RecsType.Number,
    three_one_indices: RecsType.NumberArray,
    two_one: RecsType.Number,
    two_one_hidden: RecsType.Number,
    two_one_indices: RecsType.NumberArray,
    one_one: RecsType.Number,
    one_one_hidden: RecsType.Number,
    one_one_indices: RecsType.NumberArray,
    shovels: RecsType.Number,
    traps: RecsType.Number,
    
};


// Type definition for `tisland::models::index::IslandCoords` struct
export interface IslandCoords {
    game_id: BigInt;
    player_id: BigInt;
    x: Number;
    y: Number;
    index: Number;
    terrain: Number;
    loot_id: Number;
    
}
export const IslandCoordsDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    x: RecsType.Number,
    y: RecsType.Number,
    index: RecsType.Number,
    terrain: RecsType.Number,
    loot_id: RecsType.Number,
    
};


// Type definition for `tisland::models::index::ArrayTester` struct
export interface ArrayTester {
    game_id: BigInt;
    mapunits: Number[];
    
}
export const ArrayTesterDefinition = {
    game_id: RecsType.BigInt,
    mapunits: RecsType.NumberArray,
    
};


// Type definition for `tisland::models::index::Guesses` struct
export interface Guesses {
    game_id: BigInt;
    player_id: BigInt;
    x: Number;
    y: Number;
    index: Number;
    round_number: Number;
    correct: Boolean;
    
}
export const GuessesDefinition = {
    game_id: RecsType.BigInt,
    player_id: RecsType.BigInt,
    x: RecsType.Number,
    y: RecsType.Number,
    index: RecsType.Number,
    round_number: RecsType.Number,
    correct: RecsType.Boolean,
    
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

        // Model definition for `tisland::models::index::Gold` model
        Gold: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player_id: RecsType.BigInt,
                    balance: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "Gold",
                        types: ["u128", "ContractAddress", "u32"],
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

        // Model definition for `tisland::models::index::LootObject` model
        LootObject: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player_id: RecsType.BigInt,
                    loot_id: RecsType.Number,
                    loot_length: RecsType.Number,
                    hidden_indices: RecsType.NumberArray,
                    revealed_indices: RecsType.NumberArray,
                    hidden: RecsType.Boolean,
                    active: RecsType.Boolean,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "LootObject",
                        types: ["u128", "ContractAddress", "u8", "u8", "array", "array", "bool", "bool"],
                        customTypes: [],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::LootTracker` model
        LootTracker: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player_id: RecsType.BigInt,
                    loot_ids: RecsType.NumberArray,
                    loot_count: LOcounterDefinition,
                    loot_hidden_count: LOcounterDefinition,
                    shovels: RecsType.Number,
                    traps: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "LootTracker",
                        types: ["u128", "ContractAddress", "array", "u8", "u8"],
                        customTypes: ["LOcounter", "LOcounter"],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::Loot` model
        Loot: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player_id: RecsType.BigInt,
                    four_one: RecsType.Number,
                    four_one_hidden: RecsType.Number,
                    four_one_indices: RecsType.NumberArray,
                    three_one: RecsType.Number,
                    three_one_hidden: RecsType.Number,
                    three_one_indices: RecsType.NumberArray,
                    two_one: RecsType.Number,
                    two_one_hidden: RecsType.Number,
                    two_one_indices: RecsType.NumberArray,
                    one_one: RecsType.Number,
                    one_one_hidden: RecsType.Number,
                    one_one_indices: RecsType.NumberArray,
                    shovels: RecsType.Number,
                    traps: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "Loot",
                        types: ["u128", "ContractAddress", "u8", "u8", "array", "u8", "u8", "array", "u8", "u8", "array", "u8", "u8", "array", "u8", "u8"],
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
                    index: RecsType.Number,
                    terrain: RecsType.Number,
                    loot_id: RecsType.Number,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "IslandCoords",
                        types: ["u128", "ContractAddress", "u8", "u8", "u8", "u8", "u8"],
                        customTypes: [],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::ArrayTester` model
        ArrayTester: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    mapunits: RecsType.NumberArray,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "ArrayTester",
                        types: ["u128", "array"],
                        customTypes: [],
                    },
                }
            );
        })(),

        // Model definition for `tisland::models::index::Guesses` model
        Guesses: (() => {
            return defineComponent(
                world,
                {
                    game_id: RecsType.BigInt,
                    player_id: RecsType.BigInt,
                    x: RecsType.Number,
                    y: RecsType.Number,
                    index: RecsType.Number,
                    round_number: RecsType.Number,
                    correct: RecsType.Boolean,
                },
                {
                    metadata: {
                        namespace: "tisland",
                        name: "Guesses",
                        types: ["u128", "ContractAddress", "u8", "u8", "u8", "u8", "bool"],
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
