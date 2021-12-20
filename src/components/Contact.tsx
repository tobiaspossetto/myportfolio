import React from 'react'
import * as aiIcons from 'react-icons/ai'
import * as ioIcons from 'react-icons/io'

import * as mdIcons from 'react-icons/md'
import { Box, Button, SimpleGrid, Text, Wrap, WrapItem } from '@chakra-ui/react'
const Contact = ():JSX.Element => {
    return (
        <>
              <Box id='contact'  paddingTop='100px' display="flex" justifyContent="center" alignItems="center" width="100%">
                            <ioIcons.IoMdCube size={30} color='#5ABFB5' />
                            <Text ml='5px' fontSize={{ base: "30px", sm: '40px', md: "45px", lg: "45px" }}textAlign="center" color="white">Contact Me</Text>
                        </Box>

                        <Wrap  mt='50px' spacing='30px' justify='center'>

                            <WrapItem >
                                    <Button as='a' target='_blank' href='https://www.linkedin.com/in/tob%C3%ADas-possetto-161270186/' leftIcon={<aiIcons.AiFillLinkedin size='30' color='white'/> } variant='contact' >Linkedin</Button>
                            </WrapItem>

                            <WrapItem >
                                    <Button as='a' target='_blank' href='https://github.com/tobiaspossetto/' leftIcon={<aiIcons.AiFillGithub size='30' color='white'/> } variant='contact' >GitHub</Button>
                            </WrapItem>

                            <WrapItem >
                                    <Button as='a' target='_blank' href="mailto:tobigpossetto@gmail.com" leftIcon={<mdIcons.MdEmail size='30' color='white'/> } variant='contact' >Gmail</Button>
                            </WrapItem>

                            <WrapItem >
                                    <Button as='a' target='_blank' href='https://api.whatsapp.com/send?phone=549356452-8523'  leftIcon={<ioIcons.IoLogoWhatsapp size='30' color='white'/> } variant='contact' >WhatsApp</Button>
                            </WrapItem>

                        </Wrap>

                  
              
       
        </>
       
    )
}

export default Contact
