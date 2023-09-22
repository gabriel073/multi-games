/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';
import JSConfetti from 'js-confetti';
import Swal from 'sweetalert2';
import { Button, Input, Stack, Center, Text, ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'sans-serif',
                backgroundColor: 'rgba(27, 77, 245, 1)',
            },
        },
    },
});

const WORDS = [
    'Radiograbador',
    'Videocasete',
    'Discoteca',
    'Tocadiscos',
    'Fotomatón',
    'Cabina',
    'Radiocasete',
    'Betamax',
    'Walkie-talkie',
    'Teléfono',
    'Atari',
    'Enciclopedia',
    'Casete',
    'Rollos',
    'Walkman',
    'Polaroid',
    'Bondi',
    'Boliche',
    'Asado',
];

export default function WordsPerMinute() {
    const [word, setWord] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);
    const [characterCount, setCharacterCount] = useState(0);
    const [buffer, setBuffer] = useState('');
    const [time, setTime] = useState(0);
    const jsConfetti = new JSConfetti();

    function handleSubmit(event) {
        event.preventDefault();

        if (buffer === word) {
            setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
            setCharacterCount((characterCount) => characterCount + word.length);
            setBuffer('');
        }
        setBuffer('');
    }

    useEffect(() => {
        if (time !== 0) {
            const timeout = setTimeout(() => setTime((time) => time - 1), 1000);

            return () => clearTimeout(timeout);
        }
    }, [time]);

    if (time === 0 && characterCount > 0) {
        Swal.fire({
            title: `Tu record es de: ${characterCount} caracteres!!`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
        });
        jsConfetti.addConfetti();
        characterCount > 0 && setCharacterCount(0);
        setBuffer('');
    }

    return (
        <ChakraProvider theme={theme}>
            <Stack>
                <Button size="sm"
                    colorScheme="blue"
                    borderRadius="xl"
                    position="absolute"
                    top="1rem"
                    left="1rem"
                    onClick={() => (location.href = 'http://localhost:3000/')}
                >Atras</Button >
                {/* https://gabriel073.github.io/multiProjects */}
            </Stack>
            <Center minHeight="100vh" py={8}>
                <Stack spacing={8} align="center">
                    <Text fontSize={{ base: '2rem', sm: '3.5rem' }} fontWeight="bold" color="white">
                        Palabras por Minuto ⏳
                    </Text>
                    {Boolean(time) && (
                        <Text fontSize={{ base: '3rem', sm: '4rem' }} color="white">
                            {word}
                        </Text>
                    )}
                    <Text color="white">Caracteres Tipeados: {characterCount}</Text>
                    <Text color="white">Tiempo Restante: {time}</Text>
                    {time !== 0 ? (
                        <form onSubmit={handleSubmit}>
                            <Stack direction="row">
                                <Input
                                    variant="filled"
                                    color="white"
                                    background="#1B4DF5"
                                    width={{ base: '60%', sm: '40%' }}
                                    borderRadius="10px"
                                    padding="5px"
                                    border="solid 1px violet"
                                    autoFocus
                                    type="text"
                                    value={buffer}
                                    onChange={(e) => setBuffer(e.target.value)}
                                />
                                <Button
                                    background="#1B4DF5"
                                    color="#D3E8F7"
                                    padding="8px"
                                    fontSize="20px"
                                    size="20px"
                                    border="solid 1px violet"
                                    borderRadius="10px"
                                    cursor="pointer"
                                    type="submit"
                                >
                                    Confirmar
                                </Button>
                            </Stack>
                        </form>
                    ) : (
                        <Button
                            width={{ base: '40%', sm: '20%' }}
                            backgroundColor="blueviolet"
                            border="solid 1px violet"
                            onClick={() => setTime(60)}
                        >
                            Jugar
                        </Button>
                    )}
                </Stack>
            </Center>
        </ChakraProvider>
    );
}
