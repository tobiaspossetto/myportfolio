import { Box, Button, Center, Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
// direction={{base:"column", sm: "row", md: "row", lg: "row"}}
const Home = ():JSX.Element => {
    return (
        <Flex id='home'  pt='80px' direction={{base:"column", sm: "column", md: "column", lg: "row"}} align="center"  justify="space-around" pr='10px' pl='10px'>
            <Stack mt='35px' spacing={0}>
                <Text mb='0px' fontWeight='bold'  color='blue3' fontSize={{base: "16px", sm:'18px', md:'20px', lg:'24px'}}>WEB DEVELOPER</Text>
                <Text fontWeight='600' color='white' fontSize={{ base: "28px", sm: "35px", md: "65px", lg: "65px" }}>Tobías Possetto</Text>
                <Box  display='flex' alignItems='center' justifyContent='center' width='100%'>
                         <Button as='a' href='../../cv.pdf' download='CV-tobiasPossetto' fontSize={{base: "16px", sm:'22px', md:'24px', lg:'24px'}}  padding={{base: "8px", sm:'8px', md:'20px', lg:'20px'}} width={{ base: "60%", sm: "65%", md: "40%", lg: "40%" }} variant='cta'>Download CV</Button>
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
