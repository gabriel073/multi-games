import { Flex, Text, Stack, ChakraProvider, Box, Link } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <ChakraProvider>
      <Flex
        as="main"
        minHeight="100vh"
        minWidth="100vw"
        align="center"
        justify="center"
        bgGradient="linear-gradient(
          180deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(9, 9, 121, 0.8715861344537815) 35%,
          rgba(0, 212, 255, 1) 100%
        );
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;"
      >
        <Stack spacing={8} align="center">
          <Text fontWeight="bold" fontSize={{ base: "2.5rem", sm: "5rem" }} className="title-app">
            Multi-Games
          </Text>

          <Flex
            className="container"
            direction={{ base: "column", sm: "row" }}
            spacing={12}
            gap={14}
            justify="center"
            align={{ base: "center", sm: "start" }}
            p={12}
            borderRadius="xl"
            boxShadow="xl"
            maxW="1200px"
            w="100%"
          >
            <Link href="/memotest" className="section-game">
              <Text className="game-link" fontSize="xl" mb={{ base: 6, sm: 4 }} align="center" color={"whiteAlpha.500"} w={"10rem"}
              >
                Memorizando
              </Text>
              <Box
                w={150}
                h={150}
                borderRadius="xl"
                boxShadow="xl"
                backgroundImage="url(https://www.plusesmas.com/pictures/articulos/24000/w740/24727.jpg)"
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Link>

            <Link href="/wpm" className="section-game">
              <Text fontSize="xl" mb={6} align="center" color={"whiteAlpha.500"} >
                Palabras por minuto
              </Text>
              <Box
                w={150}
                h={150}
                borderRadius="xl"
                boxShadow="xl"
                backgroundImage="url(https://traducarte.files.wordpress.com/2013/06/bart-2.jpg?w=300&h=211)"
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Link>

            <Link href="/pokemon">
              <Text fontSize="xl" mb={6} align="center" color="whiteAlpha.500" >
                Adivina Pokemon
              </Text>
              <Box
                w={150}
                h={150}
                borderRadius="xl"
                boxShadow="xl"
                backgroundImage="url(https://pics.cdnvia.com/pics/juegos/420/pic1-273-adivina-el-pokemon.jpg)"
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
