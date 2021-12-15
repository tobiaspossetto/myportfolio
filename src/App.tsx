import Navbar from './components/Navbar'
import {Box,Container,Text} from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react'
import {myNewTheme} from "./styles/theme"
import Me from './components/Me'
import Home from './components/Home'
function App(): JSX.Element {


  return (
    <ChakraProvider theme={myNewTheme} resetCSS={true}>
      <Box height='auto' bg='radial-gradient(51.75% 51.75% at 51.77% 38.08%, #2D4668 0%, #232C39 100%)' className="App">
        <Navbar />
        <Container   maxW='container.xl'>
        
          <Home/>
          <Me/>
        </Container>
        
      </Box>
    </ChakraProvider>

  );
}

export default App;



