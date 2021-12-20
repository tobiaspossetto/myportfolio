import { Box, Flex, Image, Progress, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import * as ioIcons from 'react-icons/io'
import * as faIcons from 'react-icons/fa'
import * as siIcons from 'react-icons/si'
const Skills = (): JSX.Element => {
    return (
        <>
            <Box id='skills' padding={{ base: "0px", sm: '0px', md: "20px", lg: "36px" }}>
                <Box mb='50px' paddingTop='70px' display="flex" justifyContent="center" alignItems="center" width="100%">
                    <ioIcons.IoMdCube size={30} color='#5ABFB5' />
                    <Text ml='5px' fontSize={{ base: "30px", sm: '40px', md: "45px", lg: "45px" }} textAlign="start" color="white">Skills</Text>
                </Box>

                <Stack spacing="10" width='100%' justify="space-around" align="center" direction={{base:"column", sm: "column", md: "row", lg: "row"}}>
                    <Box  minWidth="150px">
                        <Text mb='15px'  variant='skills'>React</Text>
                        <Box  w={{ base:"100%", sm:"100%", md:"100%", lg:"100%"}} h={{ base:"80px", sm:"80px", md:"100px", lg:"150px"}}>
                            <faIcons.FaReact  size='100%' color='#0BC5EA' />
                        </Box>
                        <Progress w='100%'  mt='20px' mb='35px' colorScheme='cyan' isAnimated={true} size='sm' value={45} />
                      
                    </Box>
                    <Box minWidth="150px"  mt='30px' mb='30px'>
                        <Text mb='15px' variant='skills'>NodeJs</Text>
                        <Box  w={{ base:"100%", sm:"100%", md:"100%", lg:"100%"}} h={{ base:"75px", sm:"75px", md:"100px", lg:"150px"}}><faIcons.FaNodeJs size='100%' color='#D69E2E'/></Box>
                        <Progress w='100%'   mt='20px' mb='35px'  colorScheme='yellow' isAnimated={true} size='sm' value={45} />
                    </Box>
                    <Box minWidth="150px"  mb='30px'>
                        <Text mb='15px' variant='skills'>MySQL</Text>
                        <Box w={{ base:"100%", sm:"100%", md:"100%", lg:"100%"}} h={{ base:"100px", sm:"100px", md:"100px", lg:"150px"}}><siIcons.SiMysql  size='100%' color='#DD6B20'/></Box>
                        <Progress w='100%'  mt='20px' mb='35px' isAnimated={true}  colorScheme='orange' size='sm' value={28} />
                    </Box>

                    <Box minWidth="150px" mb='30px'>
                        <Text mb='15px' variant='skills'>MongoDB</Text>
                        <Box w={{ base:"100%", sm:"100%", md:"100%", lg:"100%"}} h={{ base:"80px", sm:"80px", md:"100px", lg:"150px"}}><siIcons.SiMongodb  size='100%' color='#38A169'/></Box>
                        <Progress w='100%'  mt='20px' mb='35px' isAnimated={true}  colorScheme='green' size='sm' value={20} />
                    </Box>
                </Stack>
            </Box>
        </>

    )
}

export default Skills
