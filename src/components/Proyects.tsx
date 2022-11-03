import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    Image,
    SimpleGrid,
    Stack,
    Text,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import React from "react";
import * as ioIcons from "react-icons/io";
const Proyects = (): JSX.Element => {
    return (
        <>
            <Box
                id="proyects"
                paddingTop="100px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
            >
                <ioIcons.IoMdCube size={30} color="#5ABFB5" />
                <Text
                    ml="5px"
                    fontSize={{
                        base: "30px",
                        sm: "40px",
                        md: "45px",
                        lg: "45px",
                    }}
                    textAlign="center"
                    color="white"
                >
                    My Proyects
                </Text>
            </Box>

            <Wrap mt="50px" spacing="30px" justify="center">
                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                w="100%"
                                h="200px"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://i.imgur.com/ikOZKvM.jpg"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    REACT
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    CSS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Netflix UI clone
                            </Box>

                            <Box>
                                Clone of Netflix with React and TMDB. (Only
                                mobile)
                            </Box>
                            <Stack align="center" w="100%" justify="center">
                                <Box
                                    w="100%"
                                    display="flex"
                                    justify="center"
                                    mt="2"
                                    alignItems="center"
                                >
                                    <Button
                                        as="a"
                                        target="_blank"
                                        href="https://github.com/tobiaspossetto/netflix-ui-clone"
                                        fontSize={{
                                            base: "16px",
                                            sm: "22px",
                                            md: "24px",
                                            lg: "24px",
                                        }}
                                        padding={{
                                            base: "8px",
                                            sm: "8px",
                                            md: "20px",
                                            lg: "20px",
                                        }}
                                        width={{
                                            base: "35%",
                                            sm: "30%",
                                            md: "40%",
                                            lg: "40%",
                                        }}
                                        variant="cta"
                                    >
                                        Repo
                                    </Button>
                                </Box>

                                <Box
                                    w="100%"
                                    display="flex"
                                    mt="2"
                                    alignItems="center"
                                >
                                    <Button
                                        as="a"
                                        target="_blank"
                                        href="https://tobiaspossetto.github.io/netflix-ui-clone/"
                                        fontSize={{
                                            base: "16px",
                                            sm: "22px",
                                            md: "24px",
                                            lg: "24px",
                                        }}
                                        padding={{
                                            base: "8px",
                                            sm: "8px",
                                            md: "20px",
                                            lg: "20px",
                                        }}
                                        width={{
                                            base: "35%",
                                            sm: "30%",
                                            md: "40%",
                                            lg: "40%",
                                        }}
                                        variant="cta"
                                    >
                                        See
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://i.imgur.com/bwtT9PT.png"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    HTML
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    CSS
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    JS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Pizza Club
                            </Box>

                            <Box>
                                Website with pure html and css for a restaurant.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/tobiaspossetto/PizzaClub-CoderHouse"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>
                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://tobiaspossetto.github.io/PizzaClub-CoderHouse//"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    See
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://i.imgur.com/D9zEo41.png"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    REACT
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    MUI
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    FIREBASE
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Agape App
                            </Box>

                            <Box>
                                E-Commerce created with React and Firebase.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/tobiaspossetto/coder-react-agape/tree/develop"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://tobiaspossetto.github.io/coder-react-agape/#/"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    See
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://i.imgur.com/thcUyTa.jpg"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    REACT
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    CHAKRA-UI
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Carta Simple
                            </Box>

                            <Box>
                                I worked on the frontend development of a
                                website that allows restaurants to manage their
                                menus, orders and deliveries.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    href="#skills"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Private
                                </Button>
                            </Box>

                            <Box
                                display="flex"
                                mt="2"
                                alignItems="center"
                            ></Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://i.imgur.com/NpgsDMB.png"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    HTML
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    CSS
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    JS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Coffee
                            </Box>

                            <Box>My first website designed for a bar.</Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/tobiaspossetto/confiteria"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://tobiaspossetto.github.io/confiteria/"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    See
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="../../shao.jpg"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    HTML
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    CSS
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    JS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Shaolguin Packaging
                            </Box>

                            <Box>
                                Landing page created for a packaging store. I
                                was chosen to work on this project together with
                                a UI designer and a web developer because I was
                                one of the students of the React course at
                                Coderhouse who scored the best in their final
                                project.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/SerePrec/proyecto-shaolguin"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>
                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://shaolguin.netlify.app/"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    See
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://i0.wp.com/blog.nubity.com/wp-content/uploads/sites/4/2015/06/vps.png?ssl=1"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    EXPRESS
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    MYSQL
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    JS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Kiosco ProA
                            </Box>

                            <Box>
                                My first visit to backend development. I
                                developed an API and database for clients to be
                                able to pay from their phone. I learned how to
                                implement administrator and user roles.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/tobiaspossetto/kiosco_backend"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    EXPRESS
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    MYSQL
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    TS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                E-ccomerce App
                            </Box>

                            <Box>
                                In this API REST, my second Backend proyect, I
                                developed the server of an E-commerce using
                                Express and MongoDB. I implemented a role and
                                authentication system with JWT and included NPM
                                module libraries to encrypt passwords and
                                validate the fields coming from the frontend.
                                The app allows its owner to create and manage
                                products and also offers the possibility to
                                manage customer orders.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/tobiaspossetto/FinalBackendCoder"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://http2.mlstatic.com/storage/developers-site-cms-admin/CDV_MP/280231858061-210518-mla-mlu-mco-mlc-mco-transforma-tu-sitio-web-con-el-checkout-de-mercado-pago-header.jpg"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    EXPRESS
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    MERCADO PAGO
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    TS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Mercado Pago integration
                            </Box>

                            <Box>
                                I created a simple server that receives from the
                                customer a shopping cart to pay and generates a
                                payment order with the Mercado Pago API to
                                return to the customer the link to make the
                                payment.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/tobiaspossetto/MERCADO-PAGO-API"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>

                <WrapItem>
                    <Box
                        maxWidth="330px"
                        bg="white"
                        borderRadius="lg"
                        overflow="hidden"
                    >
                        <Center>
                            <Box
                                h="200px"
                                w="100%"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                backgroundRepeat="no-repeat"
                                backgroundImage="https://i.imgur.com/pge4eLb.jpg"
                            ></Box>
                        </Center>

                        <Box p="6">
                            <Box display="flex" alignItems="baseline">
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    REACT
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    REDUX
                                </Badge>
                                <Badge
                                    borderRadius="full"
                                    px="2"
                                    m="3px"
                                    colorScheme="teal"
                                >
                                    TS
                                </Badge>
                            </Box>

                            <Box
                                mt="1"
                                fontWeight="semibold"
                                as="h3"
                                lineHeight="tight"
                                isTruncated
                            >
                                Tecnoteca San Francisco
                            </Box>

                            <Box>
                            Website to organize the Municipal Technoteca developed during my internship in the municipality of San Francisco, Córdoba. It allows to manage computer and room reservations. It was my first project applying TypeScript, Redux and a bit of what I learned about "Clean Architecture" in a React project.
                            </Box>

                            <Box display="flex" mt="2" alignItems="center">
                                <Button
                                    as="a"
                                    target="_blank"
                                    href="https://github.com/tobiaspossetto/tecnoteca-front"
                                    fontSize={{
                                        base: "16px",
                                        sm: "22px",
                                        md: "24px",
                                        lg: "24px",
                                    }}
                                    padding={{
                                        base: "8px",
                                        sm: "8px",
                                        md: "20px",
                                        lg: "20px",
                                    }}
                                    width={{
                                        base: "35%",
                                        sm: "30%",
                                        md: "40%",
                                        lg: "40%",
                                    }}
                                    variant="cta"
                                >
                                    Repo
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </WrapItem>
            </Wrap>
        </>
    );
};

export default Proyects;
