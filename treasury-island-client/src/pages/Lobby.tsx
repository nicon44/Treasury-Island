import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Entity, getComponentValueStrict, Has } from "@dojoengine/recs";
import * as torii from "@dojoengine/torii-client";
import { getEntityIdFromKeys } from "@dojoengine/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDojo } from "../dojo/useDojo";
import { bigintToHex, feltToString } from "../utils";

export default function Component() {
  const {
    setup: {
      clientComponents: { Player, GameRoom, Round, IslandCoords, Loot },
      client,
    },
    account: { account },
  } = useDojo();

  console.log("account: ", account);
  const navigate = useNavigate();

  // entity id we are syncing
  const entityId = getEntityIdFromKeys([BigInt(account.address)]) as Entity;

  const [playerRegistered, setPlayerRegistered] = useState(false);

  // === PLAYER DETAILS ===
  const player = useComponentValue(Player, entityId);
  console.log("player: ", player);
  const hasPlayers = useEntityQuery([Has(Player)]);
  console.log(hasPlayers);
  const playersDetails = hasPlayers.map((entity) => {
    const player = getComponentValueStrict(Player, entity);
    return player;
  });
  console.log("playersDetails: ", playersDetails);

  const hasRooms = useEntityQuery([Has(GameRoom)]);
  console.log(hasRooms);
  const roomsDetails = hasRooms.map((entity) => {
    const room = getComponentValueStrict(GameRoom, entity);
    return room;
  });
  console.log("roomsDetails: ", roomsDetails);

  const [nameValue, setNameValue] = useState("");
  const handleNameTypingInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNameValue(String(event.target.value));
  };

  const handleRegister = async () => {
    const response = await client.lobby.register_player({
      account,
      name: BigInt(torii.cairoShortStringToFelt(nameValue)),
      pfp_num: 1,
    });
    if (response) {
      setPlayerRegistered(true);
    }
  };

  const handleCreateRoom = async () => {
    await client.lobby.create_room({
      account,
    });
  };

  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  const getOwnerName = (owner: bigint): string => {
    const ownerPlayer = playersDetails.find(
      (player) => player.player_id === owner
    );
    return ownerPlayer?.name ? feltToString(ownerPlayer.name) : "";
  };

  return (
    <Box bg={bg} minH="100vh" py={10}>
      <Box m={2} position="absolute" bottom={0} right={0}>
        <Text>Wallet Address: {account.address}</Text>
      </Box>
      <Container maxW="container.xl">
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb={10}
          color="orange.400"
        >
          Treasure Island Lobby
        </Heading>

        <Flex direction={{ base: "column", md: "row" }} gap={6}>
          <Card bg={cardBg} flex={1}>
            <CardHeader>
              <Heading size="lg" color="orange.500">
                Create Your Room
              </Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4}>
                {!playerRegistered ? (
                  <>
                    <Input
                      placeholder="Enter your captain name"
                      value={nameValue}
                      onChange={handleNameTypingInput}
                    />
                    <Button
                      colorScheme="orange"
                      onClick={handleRegister}
                      width="full"
                    >
                      Register player
                    </Button>
                  </>
                ) : (
                  <Button
                    colorScheme="orange"
                    onClick={handleCreateRoom}
                    width="full"
                  >
                    Create Room
                  </Button>
                )}
                {/* {error && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Error!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )*/}
              </VStack>
            </CardBody>
          </Card>

          <Card bg={cardBg} flex={1}>
            <CardHeader>
              <Heading size="lg" color="orange.500">
                Active Rooms
              </Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={4} align="stretch" maxH="300px" overflowY="auto">
                {roomsDetails.map((room, index) => (
                  <Box
                    key={"room-" + index}
                    p={3}
                    borderWidth={1}
                    borderRadius="md"
                    borderColor="orange.200"
                  >
                    <Flex justify="space-between" align="center">
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" color="orange.400">
                          Room: {bigintToHex(room?.game_id)}
                        </Text>

                        <Text fontSize="sm" color="gray.500">
                          Owner: {getOwnerName(room?.player1 || BigInt(0))}
                        </Text>
                      </VStack>
                      <Button
                        colorScheme="orange"
                        size="sm"
                        isDisabled={room?.player2 !== BigInt(0) || !playerRegistered}
                        onClick={() =>
                          navigate(`/room/${bigintToHex(room?.game_id)}`)
                        }
                      >
                        Join Crew
                      </Button>
                    </Flex>
                  </Box>
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Flex>
      </Container>
    </Box>
  );
}
