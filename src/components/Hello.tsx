import React from 'react'
import {Stack,Box,Text, StackDivider, Button, RadioGroup, Radio, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, Drawer, useDisclosure, DrawerCloseButton,useMediaQuery } from "@chakra-ui/react"
interface Props  {
    name: string
}


const Hello = (): JSX.Element => {

    const { isOpen, onOpen, onClose } = useDisclosure()
 
    return (
        <Box  height='auto' width='100%'>
              

      
      <Button display={{base:"block", md:"none", sm:"none", lg:"none"}} variant='primary' onClick={onOpen}>
        Open
      </Button>

      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae eius beatae non harum, pariatur earum dicta sit facere aperiam ducimus assumenda facilis impedit vel illum, quam voluptates! Atque illum alias autem obcaecati ducimus, culpa inventore deserunt neque, totam adipisci magni cupiditate accusantium natus! Pariatur officiis earum quas quasi voluptatibus fugiat doloremque recusandae quae necessitatibus harum ut ipsum molestiae quia impedit, odio voluptate quidem, magnam corporis hic, fugit officia vel consectetur. Voluptates numquam nihil architecto iste neque. Repellat magnam neque ratione, necessitatibus mollitia doloremque itaque dolorum, aliquam ducimus, amet vero qui explicabo cum perspiciatis incidunt sit autem quo. Labore suscipit corporis dolorem. Dignissimos, iste, cupiditate ipsum et iure quidem maiores reprehenderit aspernatur aliquam ut magni eum at eligendi magnam quis non, amet alias cum recusandae! Esse nostrum odit sint repellendus quod, reiciendis magni explicabo repudiandae ut consectetur. Perspiciatis placeat id quae error aut cum vitae optio molestias ut quisquam iusto, atque incidunt adipisci quam ullam! Exercitationem voluptas neque id culpa dicta expedita, nam assumenda? Facilis aliquam molestias cupiditate veritatis nihil, earum consequatur recusandae dignissimos fuga numquam quos eius quas aliquid quo, doloribus accusamus fugiat! Itaque nostrum sint velit vitae iste porro ut accusamus fugiat error. Obcaecati magnam nihil minima enim! Quam, eveniet ratione tenetur dicta maiores blanditiis quae quisquam unde tempora assumenda minus aliquid nemo? Dolorum veritatis quam omnis, ad accusamus, porro corporis aspernatur hic blanditiis quod exercitationem est maiores earum deserunt ab a quibusdam numquam natus magnam optio nobis architecto quas quasi sunt. Unde eligendi voluptas officiis ab consectetur. Maxime at doloremque deserunt ducimus eos reprehenderit sint saepe voluptatum voluptatibus esse incidunt temporibus possimus ipsa, quas, error vitae est soluta molestias sapiente ratione nesciunt minima sequi officia. Ratione labore cupiditate unde enim eligendi ipsum voluptatum velit? Dolor excepturi facilis autem mollitia praesentium iure quaerat obcaecati, quis earum, omnis nobis?</Text>
       <div id="div"></div>
       <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur recusandae eius beatae non harum, pariatur earum dicta sit facere aperiam ducimus assumenda facilis impedit vel illum, quam voluptates! Atque illum alias autem obcaecati ducimus, culpa inventore deserunt neque, totam adipisci magni cupiditate accusantium natus! Pariatur officiis earum quas quasi voluptatibus fugiat doloremque recusandae quae necessitatibus harum ut ipsum molestiae quia impedit, odio voluptate quidem, magnam corporis hic, fugit officia vel consectetur. Voluptates numquam nihil architecto iste neque. Repellat magnam neque ratione, necessitatibus mollitia doloremque itaque dolorum, aliquam ducimus, amet vero qui explicabo cum perspiciatis incidunt sit autem quo. Labore suscipit corporis dolorem. Dignissimos, iste, cupiditate ipsum et iure quidem maiores reprehenderit aspernatur aliquam ut magni eum at eligendi magnam quis non, amet alias cum recusandae! Esse nostrum odit sint repellendus quod, reiciendis magni explicabo repudiandae ut consectetur. Perspiciatis placeat id quae error aut cum vitae optio molestias ut quisquam iusto, atque incidunt adipisci quam ullam! Exercitationem voluptas neque id culpa dicta expedita, nam assumenda? Facilis aliquam molestias cupiditate veritatis nihil, earum consequatur recusandae dignissimos fuga numquam quos eius quas aliquid quo, doloribus accusamus fugiat! Itaque nostrum sint velit vitae iste porro ut accusamus fugiat error. Obcaecati magnam nihil minima enim! Quam, eveniet ratione tenetur dicta maiores blanditiis quae quisquam unde tempora assumenda minus aliquid nemo? Dolorum veritatis quam omnis, ad accusamus, porro corporis aspernatur hic blanditiis quod exercitationem est maiores earum deserunt ab a quibusdam numquam natus magnam optio nobis architecto quas quasi sunt. Unde eligendi voluptas officiis ab consectetur. Maxime at doloremque deserunt ducimus eos reprehenderit sint saepe voluptatum voluptatibus esse incidunt temporibus possimus ipsa, quas, error vitae est soluta molestias sapiente ratione nesciunt minima sequi officia. Ratione labore cupiditate unde enim eligendi ipsum voluptatum velit? Dolor excepturi facilis autem mollitia praesentium iure quaerat obcaecati, quis earum, omnis nobis?</Text>
      <Drawer returnFocusOnClose={false}  placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
       
        <DrawerContent>
        <DrawerCloseButton/>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Box as='a' href='#div' >Some contents...</Box>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </Box>
      
    )
}

export default Hello
