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
            scrollBehavior:"smooth",
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
        contact:{
            fontSize:'25px',
            padding: '25px',
            fontWeight:'500',
            backgroundColor: '#2A3442',
            color: "white",
            boxShadow: '-3px -4px 12px 1px rgba(0, 0, 0, 0.3)',
            minWidth: '230px',
            _hover:{
                backgroundColor:'#212A36',
                boxShadow: 'inset -3px -3px 4px 4px rgba(0, 0, 0, 0.25)'

            }
        }
        ,
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