export const ButtonStyles = {
    baseStyle:{},
    sizes:{},
    variants:{
        primary:{
            color: 'white',
            outline: 'none',
            bg: 'none',
            fontSize: "24px",
            fontWeight: "regular",
            padding: "0",
            border: "none",
           
            _hover:{
                textDecoration: 'underline',
                textDecorationColor: 'blue3',
                outline: 'none'
            },
            _focus:{
                outline: 'none',
                bg:"none",
                border: "none",
                color: "white"
            }

           
        },
        brand:{
            color: 'white',
           
            bg: 'none',
          
            fontWeight: "regular",
            padding: "0",
            border: "none",
            outline: "none",
            _hover:{
                textDecoration: 'none',
                border: "none",
                outLine: "none",
             
            }

           
        },
        cta:{
            color: 'blue3',
           
            bg: 'none',
        
            fontWeight: "regular",
            padding: "25px",
            border: "2px solid ",
            borderColor: "blue3",
            
            borderRadius: "10px",
            outline: "none",
            

           
        }
    },
    defaultProps:{}
}