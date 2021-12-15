import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react"
import * as goIcons from "react-icons/go"
import * as hiIcons from "react-icons/hi"
const Navbar = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex padding='20px' >
            <Box><Button rightIcon={<goIcons.GoVerified color='#5ABFB5' />} variant='brand' bg='none' fontWeight='regular' fontSize={{ base: "25px", sm: "30px", md: "30px", lg: "30px" }} color='white'>Tobías Possetto</Button></Box>
            <Spacer />
            <Stack display={{ base: "none", sm: "none", md: "block", lg: "block" }} margin='0' direction='row' spacing={{ md: '15px', lg: "40px" }}>
                <Button margin='0' href='#div' as='a' variant='primary'>Home</Button>
                <Button margin='0' href='#div' as='a' variant='primary'>Skills</Button>
                <Button margin='0' href='#div' as='a' variant='primary'>Contact Me</Button>
            </Stack>
            <Button rightIcon={<hiIcons.HiMenuAlt3 size={40} />} display={{ base: "block", sm: "block", md: "none", lg: "none" }} variant='primary' onClick={onOpen}>

            </Button>

            <Drawer autoFocus={false} returnFocusOnClose={false} placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />

                <DrawerContent bg='blue1'>

                    <DrawerHeader borderBottomWidth='1px'><Button variant='brand' rightIcon={<goIcons.GoVerified color='#5ABFB5' />} bg='none' padding='0' fontWeight='regular' fontSize={{ base: "24px", sm: "30px", md: "30px", lg: "30px" }} >Tobías Possetto</Button> </DrawerHeader>

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
        </Flex>

    )
}

export default Navbar
