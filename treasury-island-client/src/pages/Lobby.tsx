import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
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
import { useState } from "react";

interface Room {
  id: string;
  host: string;
  players: number;
}

export default function Component() {
  const [rooms, setRooms] = useState<Room[]>([
    { id: "1", host: "Captain Blackbeard", players: 1 },
    { id: "2", host: "Anne Bonny", players: 0 },
    { id: "3", host: "Bartholomew Roberts", players: 1 },
  ]);
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);

  const createRoom = () => {
    if (username.trim() === "") {
      setError("A captain must have a name.");
      return;
    }
    if (
      rooms.some((room) => room.host.toLowerCase() === username.toLowerCase())
    ) {
      setError("That name is already taken by another captain.");
      return;
    }
    const newRoom: Room = {
      id: (rooms.length + 1).toString(),
      host: username,
      players: 1,
    };
    setRooms([...rooms, newRoom]);
    setUsername("");
    setError(null);
  };

  const joinRoom = (roomId: string) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId ? { ...room, players: room.players + 1 } : room
      )
    );
  };

  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg} minH="100vh" py={10}>
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
                <Input
                  placeholder="Enter your captain name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button colorScheme="orange" onClick={createRoom} width="full">
                  Set Sail
                </Button>
                {error && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle mr={2}>Error!</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
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
                {rooms.map((room) => (
                  <Box
                    key={room.id}
                    p={3}
                    borderWidth={1}
                    borderRadius="md"
                    borderColor="orange.200"
                  >
                    <Flex justify="space-between" align="center">
                      <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" color="orange.400">
                          {room.host}'s Crew
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                          {room.players} sailor{room.players !== 1 ? "s" : ""}
                        </Text>
                      </VStack>
                      <Button
                        colorScheme="orange"
                        size="sm"
                        onClick={() => joinRoom(room.id)}
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
