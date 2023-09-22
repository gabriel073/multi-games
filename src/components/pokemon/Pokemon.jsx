/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import JSConfetti from 'js-confetti';
import Swal from 'sweetalert2';
import { Input, Stack, ChakraProvider, extendTheme, Button } from '@chakra-ui/react';
import './pokemon.css';

const POKEMONS = [
    "bulbasaur",
    // "ivysaur",
    // "venusaur",
    // "charmander",
    // "charmeleon",
    // "charizard",
    // "squirtle",
    // "wartortle",
    // "blastoise",
    // "caterpie",
    // "metapod",
    // "butterfree",
    // "weedle",
    // "kakuna",
    // "beedrill",
    // "pidgey",
    // "pidgeotto",
    // "pidgeot",
    // "rattata",
    // "raticate",
    // "spearow",
    // "fearow",
    // "ekans",
    // "arbok",
    // "pikachu",
    // "raichu",
    // "sandshrew",
    // "sandslash",
    // "nidoran♀",
    // "nidorina",
    // "nidoqueen",
    // "nidoran♂",
    // "nidorino",
    // "nidoking",
    // "clefairy",
    // "clefable",
    // "vulpix",
    // "ninetales",
    // "jigglypuff",
    // "wigglytuff",
    // "zubat",
    // "golbat",
    // "oddish",
    // "gloom",
    // "vileplume",
    // "paras",
    // "parasect",
    // "venonat",
    // "venomoth",
    // "diglett",
    // "dugtrio",
    // "meowth",
    // "persian",
    // "psyduck",
    // "golduck",
    // "mankey",
    // "primeape",
    // "growlithe",
    // "arcanine",
    // "poliwag",
    // "poliwhirl",
    // "poliwrath",
    // "abra",
    // "kadabra",
    // "alakazam",
    // "machop",
    // "machoke",
    // "machamp",
    // "bellsprout",
    // "weepinbell",
    // "victreebel",
    // "tentacool",
    // "tentacruel",
    // "geodude",
    // "graveler",
    // "golem",
    // "ponyta",
    // "rapidash",
    // "slowpoke",
    // "slowbro"
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'linear-gradient(180deg,rgba(2, 0, 36, 1) 0%,rgba(9, 9, 121, 0.8715861344537815) 35%,rgba(0, 212, 255, 1) 100%)',
                zIndex: 5
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                _hover: {
                    backgroundColor: 'black.500',
                    color: 'white',
                },
            },
        },
    },
});

export default function Pokemon() {
    const [hasWon, toggleWon] = useState(false);
    const jsConfetti = new JSConfetti();

    function handleSubmit(event) {
        event.preventDefault();

        const { pokemon } = event.currentTarget;

        if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
            toggleWon(true);
            Swal.fire({
                title: '¡Has Ganado!',
                customClass: 'swal-wide',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp',
                },
            });
            jsConfetti.addConfetti();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Te Equivocaste de Pokemon',
                showConfirmButton: false,
                timer: 1500,
            });
            pokemon.value = '';
        }
    }

    return (
        <ChakraProvider theme={theme}>
            <body>
                <div className="container-principal" >
                    <Button
                        className='button-atras'
                        size="md"
                        colorScheme="blue"
                        borderRadius="xl"
                        position="absolute"
                        top="1rem"
                        left="1rem"
                        onClick={() => (location.href = 'http://localhost:3000/')}
                    >
                        {/* https://gabriel073.github.io/multiProjects */}
                        Atras
                    </Button>
                    <div className="pokemon-container">
                        <div className="title-container">
                            <h2 className="title-poke">¿Adivina Quién se esconde <br /> Detrás?</h2>
                        </div>
                        <div className="image-container">
                            <img className="image-yuyo" src="images/yuyos.png" alt="yuyos" />
                        </div>
                        <div className={`pokemon-image ${hasWon ? '' : 'invert'}`}>
                            <img
                                src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${MATCH + 1
                                    }.png?raw=true`}
                                alt="pokemon"
                            />
                        </div>
                        {hasWon ? (
                            <Button
                                className='play-again-button' background='#1B4DF5'>
                                <a id="pokemon" href="http://localhost:5173/multiProjects/" >Vuelve al Menu</a>
                            </Button>
                            // https://gabriel073.github.io/multiProjects/pokemon/
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <Stack direction="row" className="pokemon-form">
                                    <Input
                                        color="black"
                                        background="#1B4DF5"
                                        placeholder="Ingresa Pokemon"
                                        width="50%"
                                        borderRadius="10px"
                                        padding="5px"
                                        name="pokemon"
                                        border="solid 1px #d3e8f7"
                                    />
                                    <Button
                                        className={'confirm-button'}
                                        background='#1B4DF5'
                                        color='#D3E8F7'
                                        padding='6px'
                                        fontSize='15px'
                                        size='lg'
                                        height='40px'
                                        border='solid 1px #d3e8f7'
                                        borderRadius='10px'
                                        type='submit'

                                    >
                                        Confirmar
                                    </Button>
                                </Stack>
                            </form>
                        )}
                    </div>
                </div>
            </body>
        </ChakraProvider >
    );
}