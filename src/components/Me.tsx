import { Box, Flex, Image, Text } from '@chakra-ui/react'

import * as ioIcons from 'react-icons/io'
const Me = (): JSX.Element => {
    return (
        <Box id='me'  padding={{ base: "0px", sm: '0px', md: "20px", lg: "30px" }}>
            <Box paddingTop='100px' display="flex" justifyContent="center" alignItems="center" width="100%">
                <ioIcons.IoMdCube size={30} color='#5ABFB5' />
                <Text ml='5px' fontSize={{ base: "30px", sm: '40px', md: "45px", lg: "45px" }}textAlign="center" color="white">About Me</Text>
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
                <Text  fontSize={{ base: "16px", sm: '16px', md: "18px", lg: "22px" }}  textAlign={{ base: "center", sm: 'center', md: "center", lg: "start" }} fontWeight='400' color='white' w={{ base: "100%", sm: '100%', md: "100%", lg: "60%" }}>I am a full-stack web developer. I started programming when I was 15 years old, little by little I got into the world of web development studying and applying what I learned in online courses. I did my high school studies in a programming oriented school and graduated as <strong style={{color:"#5ABFB5"}}>Technician degree in Computer Programming</strong>. I also finished the frontend development course at Coderhouse and I am currently taking the backend development course at the same academy.
Currently I have solid knowledge in <strong style={{color:"#5ABFB5"}}>React</strong> and <strong style={{color:"#5ABFB5"}}>Nodejs</strong>. I also manage databases like <strong style={{color:"#5ABFB5"}}>MySql</strong> and <strong style={{color:"#5ABFB5"}}>MongoDB</strong>.
My favorite hobbies are video games, TV series, food, coffee and traveling.

</Text>


            </Flex>
        </Box>




    )
}

export default Me
