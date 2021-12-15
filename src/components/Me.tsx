import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import * as ioIcons from 'react-icons/io'
const Me = (): JSX.Element => {
    return (
        <Box   padding={{ base: "0px", sm: '0px', md: "20px", lg: "30px" }}>
            <Box paddingTop='70px' display="flex" justifyContent="center" alignItems="center" width="100%">
                <ioIcons.IoMdCube size={30} color='#5ABFB5' />
                <Text ml='5px' fontSize={{ base: "40px", sm: '40px', md: "60px", lg: "60px" }}textAlign="center" color="white">About Me</Text>
            </Box>

            <Flex direction={{ base: "column", sm: "column", md: "column", lg: "row" }} align="center" justify="space-around" padding='10px'>
                <Box mb='30px' color='blue3' border='3px solid' padding='5px' borderRadius='100%' mt='35px'>
                    <Image borderRadius='full'
                        boxSize={{ base: "180px", sm: '180px', md: "200px", lg: "200px" }}

                        objectFit='cover'
                        src='../../me3.jpg'
                        alt='Programmer'
                    />
                </Box>
                <Text textAlign={{ base: "center", sm: 'center', md: "center", lg: "start" }} fontWeight='400' color='white' w={{ base: "100%", sm: '100%', md: "100%", lg: "60%" }}>I am a web developer. Since I was young I learned programming in a self-taught way. I did my high school studies in a technical school oriented to programming, graduating as a programming technician. I also completed the frontend development course at Coderhouse academy. Currently I continue learning backend development (because it is my favorite area) using Node js.</Text>


            </Flex>
        </Box>




    )
}

export default Me
