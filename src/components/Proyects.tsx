import { Badge, Box, Button, Center, Flex, Image, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'

const Proyects = (): JSX.Element => {


    return (
        <SimpleGrid  spacing='15px' columns={{ base: 1, sm: 1, md: 3, lg: 4 }} padding={{ base: "0px", sm: '0px', md: "20px", lg: "36px" }}>
              <Center>
              <Box   bg='white' maxW='sm' borderRadius='lg' overflow='hidden'>
                <Image  src='https://i.imgur.com/ikOZKvM.jpg' />
              
                <Box  p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            REACT
                        </Badge>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            CSS
                        </Badge>
                       

                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h3'
                        lineHeight='tight'
                        isTruncated
                    >
                        Netflix UI clone
                    </Box>

                    <Box>
                        Clone of Netflix with React and TMDB.

                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>

                        <Button fontSize={{ base: "16px", sm: '22px', md: '24px', lg: '24px' }} padding={{ base: "8px", sm: '8px', md: '20px', lg: '20px' }} width={{ base: "25%", sm: "30%", md: "40%", lg: "40%" }} variant='cta'>Repo</Button>
                    </Box>
                </Box>




            </Box>
              </Center>
          
            <Center>
            <Box  bg='white' maxW='sm' borderRadius='lg' overflow='hidden'>
                <Image src='https://i.imgur.com/bwtT9PT.png' />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            HTML
                        </Badge>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            CSS
                        </Badge>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            JS
                        </Badge>

                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h3'
                        lineHeight='tight'
                        isTruncated
                    >
                        Pizza Club
                    </Box>

                    <Box>
                        Website with pure html and css for a restaurant.

                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>

                        <Button fontSize={{ base: "16px", sm: '22px', md: '24px', lg: '24px' }} padding={{ base: "8px", sm: '8px', md: '20px', lg: '20px' }} width={{ base: "25%", sm: "30%", md: "40%", lg: "40%" }} variant='cta'>Repo</Button>
                    </Box>
                </Box>








            </Box>
            </Center>
            

            <Center>
            <Box bg='white' maxW='sm' borderRadius='lg' overflow='hidden'>
                <Image src='https://i.imgur.com/D9zEo41.png' />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            REACT
                        </Badge>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            MUI
                        </Badge>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            BOOTSTRAP
                        </Badge>

                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h3'
                        lineHeight='tight'
                        isTruncated
                    >
                        Agape App
                    </Box>

                    <Box>
                    Ecommerce created with React and Firebase.

                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>

                        <Button fontSize={{ base: "16px", sm: '22px', md: '24px', lg: '24px' }} padding={{ base: "8px", sm: '8px', md: '20px', lg: '20px' }} width={{ base: "25%", sm: "30%", md: "40%", lg: "40%" }} variant='cta'>Repo</Button>
                    </Box>
                </Box>




            </Box>

            </Center>
            

            <Center>
            <Box bg='white' maxW='sm' borderRadius='lg' overflow='hidden'>
                <Image src='https://i.imgur.com/ikOZKvM.jpg' />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            HTML
                        </Badge>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            CSS
                        </Badge>
                        <Badge borderRadius='full' px='2' m='3px' colorScheme='teal'>
                            JS
                        </Badge>

                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h3'
                        lineHeight='tight'
                        isTruncated
                    >
                        Proyecto 1
                    </Box>

                    <Box>
                        Clone of Netflix with React and TMDB.

                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>

                        <Button fontSize={{ base: "16px", sm: '22px', md: '24px', lg: '24px' }} padding={{ base: "8px", sm: '8px', md: '20px', lg: '20px' }} width={{ base: "25%", sm: "30%", md: "40%", lg: "40%" }} variant='cta'>Repo</Button>
                    </Box>
                </Box>




            </Box>

            </Center>


        </SimpleGrid >
    )
}

export default Proyects
