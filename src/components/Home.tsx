import { Box, Button, Center, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
// direction={{base:"column", sm: "row", md: "row", lg: "row"}}
const Home = ():JSX.Element => {
    return (
        <Flex direction={{base:"column", sm: "column", md: "column", lg: "row"}} align="center"  justify="space-around" padding='10px'>
            <Stack mt='35px' spacing={0}>
                <Text mb='0px' fontWeight='bold'  color='blue3' fontSize='16px'>WEB DEVELOPER</Text>
                <Text fontWeight='600' color='white' fontSize={{ base: "28px", sm: "35px", md: "46px", lg: "46px" }}>Tobías Possetto</Text>
                <Box  display='flex' alignItems='center' justifyContent='center' width='100%'>
                         <Button  fontSize={{base: "18px", sm:'22px', md:'24px', lg:'24px'}}  padding={{base: "10px", sm:'10px', md:'20px', lg:'20px'}} width={{ base: "80%", sm: "70%", md: "70%", lg: "70%" }} variant='cta'>Download CV</Button>
                </Box>
                     
             

                
            </Stack>

            <Box  mt='35px'>
                        <Image  
                boxSize={{base:"280px",sm:'280px', md: "350px", lg: "350px" }}
                
                objectFit='cover'
                src='../../image1.png'
                alt='Programmer'
            />
                        </Box>
        </Flex>
    )
}

export default Home