import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react"
import * as goIcons from "react-icons/go"
import * as hiIcons from "react-icons/hi"
const Navbar = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
          <Flex zIndex='3' bg='blue1' boxShadow='md' padding='20px' position='fixed' width='100%'  >
            <Box><Button rightIcon={<goIcons.GoVerified color='#5ABFB5' />} variant='brand' bg='none' fontWeight='regular' fontSize={{ base: "22px", sm: "25px", md: "25px", lg: "25px" }} color='white'>Tobías Possetto</Button></Box>
            <Spacer />
            <Stack display={{ base: "none", sm: "none", md: "block", lg: "block" }} margin='0' direction='row' spacing={{ md: '15px', lg: "40px" }}>
                <Text  outline='none' margin='0' href='#div' as='a' variant='primary'>Home</Text>
                <Text margin='0' href='#div' as='a' variant='primary'>Skills</Text>
                <Text margin='0' href='#div' as='a' variant='primary'>Proyects</Text>
                <Text margin='0' href='#div' as='a' variant='primary'>Contact Me</Text>
            </Stack>
            <Button rightIcon={<hiIcons.HiMenuAlt3 size={40} />} display={{ base: "block", sm: "block", md: "none", lg: "none" }} variant='primary' onClick={onOpen}>

            </Button>

           
        </Flex>

         <Drawer autoFocus={false} returnFocusOnClose={false} placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />

                <DrawerContent bg='blue1'>

                    <DrawerHeader borderBottomWidth='1px'><Button variant='brand' rightIcon={<goIcons.GoVerified color='#5ABFB5' />} bg='none' padding='0' fontWeight='regular' fontSize={{ base: "22px", sm: "25px", md: "25px", lg: "25px" }} >Tobías Possetto</Button> </DrawerHeader>

                    <DrawerBody>
                        <Stack mt='5px' direction='column' spacing={5}>
                            <Box>
                                <Text variant='sideBar' as='a' onClick={onClose} href='#div' >Home</Text>
                              
                            </Box>
                            <Box>
                                <Text variant='sideBar' as='a' onClick={onClose} href='#div' >Skills</Text>
                               
                            </Box>
                            <Box>
                                <Text variant='sideBar' as='a' onClick={onClose} href='#div' >Proyects</Text>
                              
                            </Box>
                            <Box>
                                <Text variant='sideBar' as='a' onClick={onClose} href='#div' >About Me</Text>
                               
                            </Box>



                        </Stack>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
      

    )
}

export default Navbar
