import { Flex, Text, Stack, ChakraProvider, Box, Link } from "@chakra-ui/react";

import './App.css';


function App() {
  return (
    <ChakraProvider>
      <Flex
        // 
        overflowY={{ base: "scroll", md: "scroll" }}
        h="100%"
        scrollBehavior="smooth"
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
        <Stack spacing={6} mt={{ base: 250, md: 0 }} alignItems="center"  >
          <Text fontWeight="bold" fontSize={{ base: "2rem", md: "5rem" }} className="title-app">
            Multi-Games
          </Text>

          <Flex

            className="container"
            direction={{ base: "column ", md: "row" }}
            // h="auto"
            spacing={12}
            gap={14}
            justifyContent={{ base: "center", md: "center" }}
            align={{ base: "center", md: "center" }}
            p={12}
            borderRadius="xl"
            boxShadow="xl"
            maxW="1200px"
            w="100%"
          >

            <Link href="/memotest" fontSize="xl" className="game-link" mb={{ base: 6, md: 6 }} align="center" color={"whiteAlpha.500"} w={"10rem"}>
              Memorizando

              <Box
                align="center"
                mt={{ base: 0, md: 4 }}
                w={150}
                h={150}
                borderRadius="xl"
                boxShadow="xl"
                backgroundImage="url(https://www.plusesmas.com/pictures/articulos/24000/w740/24727.jpg)"
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Link>

            <Link href="/wpm" fontSize="xl" className="game-link" mb={{ base: 6, md: 6 }} color={"whiteAlpha.500"}  >

              Palabras por minuto

              <Box
                m="auto"
                mt={{ base: 0, md: 4 }}
                w={150}
                h={150}
                align="center"
                borderRadius="xl"
                boxShadow="xl"
                backgroundImage="url(https://traducarte.files.wordpress.com/2013/06/bart-2.jpg?w=300&h=211)"
                backgroundSize="cover"
                backgroundPosition="center"
              />
            </Link>

            <Link href="/pokemon" fontSize="xl" mb={{ base: 6, md: 6 }} align="center" className="game-link" color="whiteAlpha.500">

              Adivina Pokemon

              <Box
                mt={{ base: 0, md: 4 }}
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
      </Flex >
    </ChakraProvider >
  );
}

export default App;
