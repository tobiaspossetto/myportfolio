export const TextStyles = {
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
        sideBar:{
            marginTop:'0px',
            color: 'white',
            fontSize: "22px",
            fontWeight: "regular",
            padding: "0",

            margin: "0",
            _hover:{
                textDecoration: 'underline',
                textDecorationColor: 'blue3',
            }
        },
        skills:{
                
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "white",
                    textAlign: "center"
               
        }
    },
    defaultProps:{}
}