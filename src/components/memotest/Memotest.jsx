/* eslint-disable no-restricted-globals */
import { useState, useEffect } from 'react';
import {
    Box,
    Button,
    Center,
    Text,
    useMediaQuery,
    SimpleGrid,
    ChakraProvider,
    extendTheme,
} from '@chakra-ui/react';
import JSConfetti from 'js-confetti';
import Swal from 'sweetalert2';
import './Memotest.css';

const IMAGES = [
    'https://icongr.am/devicon/android-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/chrome-original-wordmark.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/docker-original-wordmark.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/google-original-wordmark.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
    'https://icongr.am/devicon/react-original.svg?size=128&color=currentColor',
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5);

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontSynthesis: 'none',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                WebkitTextSizeAdjust: '100%',
            },
        },
    },
});

export default function Memotest() {
    const [guessed, setGuessed] = useState([]);
    const [selected, setSelected] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const jsConfetti = new JSConfetti();

    useEffect(() => {
        if (selected.length === 2) {
            if (selected[0].split('|')[1] === selected[1].split('|')[1]) {
                setGuessed((guessed) => guessed.concat(selected));
            }
            setTimeout(() => setSelected([]), 1000);
        }
    }, [selected]);

    useEffect(() => {
        if (guessed.length === IMAGES.length) {
            jsConfetti.addConfetti();
            Swal.fire({
                title: '¡Has Ganado!!!',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp',
                },
            });

            setTimeout(() => location.reload(), 1500);
        }
    }, [guessed]);

    const [isDesktop] = useMediaQuery('(min-width: 480px)');

    return (
        <ChakraProvider theme={theme}>
            <Box textAlign="center"
                minHeight="104vh"
                minWidth="100vw"
                className={'container'}
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
              -webkit-text-size-adjust: 100%;">
                <Button
                    className="back-button"
                    colorScheme="blue"
                    position="absolute"
                    border="solid 1px #d3e8f7"
                    top={isDesktop ? '20px' : '2.5rem'}
                    left={isDesktop ? '1rem' : '0.5rem'}
                    onClick={() => (location.href = 'http://localhost:3000/')}
                // https://gabriel073.github.io/multiProjects
                >
                    Atrás
                </Button>
                <Box className={'container-gral'}  >
                    <Center>
                        <Text
                            fontSize={isDesktop ? '3.5rem' : '2.2rem'}
                            mt={isDesktop ? '1px' : '80px'}
                            mb={isDesktop ? '1px' : '100px'}
                            fontWeight="bold"
                            className="title-memo"
                        >
                            Memo Test <br /> Developero
                        </Text>
                    </Center>
                    <Center mt={2}>
                        <SimpleGrid columns={isDesktop ? 5 : 4} spacing={4} width={isDesktop ? "40%" : "75%"}>
                            {IMAGES.map((image) => {
                                const [, url] = image.split('|');

                                return (
                                    <Box
                                        key={image}
                                        className={`image-item ${selected.includes(image) || guessed.includes(image) ? 'flipped' : ''
                                            }`}
                                        p={4}
                                        cursor="pointer"
                                        borderRadius="md"
                                        boxShadow="md"
                                        onClick={() => selected.length < 2 && setSelected((selected) => selected.concat(image))}
                                    >
                                        {selected.includes(image) || guessed.includes(image) ? (
                                            <img alt="icon" src={url} className="flipped-icon" />
                                        ) : (
                                            <img
                                                alt="icon"
                                                src="https://icongr.am/entypo/help.svg?size=128&color=currentColor"
                                            />
                                        )}
                                    </Box>
                                );
                            })}
                        </SimpleGrid>
                    </Center>
                </Box>
            </Box>
        </ChakraProvider>
    );
}