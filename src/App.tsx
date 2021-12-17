import Navbar from './components/Navbar'
import {Box,Container,Text} from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'
import {myNewTheme} from "./styles/theme"
import Me from './components/Me'
import Home from './components/Home'
import Skills from './components/Skills'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
function App(): JSX.Element {


  return (
    <ChakraProvider theme={myNewTheme} resetCSS={true}>
      <Box height='auto' bg='radial-gradient(51.75% 51.75% at 51.77% 38.08%, #2D4668 0%, #232C39 100%)' className="App">
        <Navbar />
        <Container   maxW='container.xl'>
        
          <Home/>
          <Me/>
          <Skills/>

          <Proyects/>
          <Contact/>
        </Container>
        <Box d='flex' alignItems='center' justifyContent='center' w='100%' mt='100px' h='100px' bg='blue4'>
                <Text fontSize='25px' color='white'> 2021 - Tobías Possetto</Text>
        </Box>  
        <Box w='100%'  h='5px' bg='blue3'>
                
                </Box> 
      </Box>


    </ChakraProvider>

  );
}

export default App;



