
// Generated by dojo-bindgen on Wed, 28 Aug 2024 15:42:08 +0000. Do not modify this file manually.
// Import the necessary types from the recs SDK
// generate again with `sozo build --typescript` 
import { Account, byteArray } from "starknet";
import { DojoProvider } from "@dojoengine/core";
import * as models from "./models.gen";

export type IWorld = Awaited<ReturnType<typeof setupWorld>>;

export async function setupWorld(provider: DojoProvider) {
    // System definitions for `tisland-gameroom` contract
    function gameroom() {
        const contract_name = "gameroom";

        
        // Call the `world` system with the specified Account and calldata
        const world = async (props: { account: Account }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "world",
                        calldata: [],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `start_game` system with the specified Account and calldata
        const start_game = async (props: { account: Account, game_id: bigint }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "start_game",
                        calldata: [props.game_id],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `hide_loot` system with the specified Account and calldata
        const hide_loot = async (props: { account: Account, game_id: bigint, loot_id: number, x0: number, y0: number, x1: number, y1: number }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "hide_loot",
                        calldata: [props.game_id,
                props.loot_id,
                props.x0,
                props.y0,
                props.x1,
                props.y1],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `set_trap` system with the specified Account and calldata
        const set_trap = async (props: { account: Account, game_id: bigint, x: number, y: number }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "set_trap",
                        calldata: [props.game_id,
                props.x,
                props.y],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `dig_for_loot` system with the specified Account and calldata
        const dig_for_loot = async (props: { account: Account, game_id: bigint, x: number, y: number }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "dig_for_loot",
                        calldata: [props.game_id,
                props.x,
                props.y],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `end_round` system with the specified Account and calldata
        const end_round = async (props: { account: Account, game_id: bigint }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "end_round",
                        calldata: [props.game_id],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

        return {
            world, start_game, hide_loot, set_trap, dig_for_loot, end_round
        };
    }

    // System definitions for `tisland-lobby` contract
    function lobby() {
        const contract_name = "lobby";

        
        // Call the `world` system with the specified Account and calldata
        const world = async (props: { account: Account }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "world",
                        calldata: [],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `register_player` system with the specified Account and calldata
        const register_player = async (props: { account: Account, name: bigint, pfp_num: number }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "register_player",
                        calldata: [props.name,
                props.pfp_num],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `update_pfp` system with the specified Account and calldata
        const update_pfp = async (props: { account: Account, pfp_num: number }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "update_pfp",
                        calldata: [props.pfp_num],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `create_room` system with the specified Account and calldata
        const create_room = async (props: { account: Account }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "create_room",
                        calldata: [],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `invite_player` system with the specified Account and calldata
        const invite_player = async (props: { account: Account, player_id: bigint, game_id: bigint }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "invite_player",
                        calldata: [props.player_id,
                props.game_id],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `refuse_invite` system with the specified Account and calldata
        const refuse_invite = async (props: { account: Account, game_id: bigint }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "refuse_invite",
                        calldata: [props.game_id],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `join_room` system with the specified Account and calldata
        const join_room = async (props: { account: Account, game_id: bigint }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "join_room",
                        calldata: [props.game_id],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

    
        // Call the `close_room` system with the specified Account and calldata
        const close_room = async (props: { account: Account, game_id: bigint }) => {
            try {
                return await provider.execute(
                    props.account,
                    {
                        contractName: contract_name,
                        entrypoint: "close_room",
                        calldata: [props.game_id],
                    },
                    "tisland"
                );
            } catch (error) {
                console.error("Error executing spawn:", error);
                throw error;
            }
        };
            

        return {
            world, register_player, update_pfp, create_room, invite_player, refuse_invite, join_room, close_room
        };
    }

    return {
        gameroom: gameroom(),
        lobby: lobby()
    };
}
