import {extendTheme} from '@chakra-ui/react'
import { ButtonStyles as Button } from '../UIcomponents/buttonStyles'
import { TextStyles as Text } from '../UIcomponents/textStyle'
import { BoxStyles as Box } from '../UIcomponents/BoxStyle'
export const myNewTheme = extendTheme({
    colors:{
        blue1: '#232C39',
        blue2: '#2D4668',
        blue3: '#5ABFB5',
        blue4: '#0e141d',

    },
   
    fonts: {
        body: "Poppins, sans-serif",
        heading: "Poppins, serif",
        mono: "Poppins, monospace",
      },
    components: {
        Button,
        Text,
        Box
    }

})