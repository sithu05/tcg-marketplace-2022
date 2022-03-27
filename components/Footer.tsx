import { Box, Center } from "@chakra-ui/react"
import { ViewCart } from "./ViewCart"

export const Footer = () => {
    return (
        <Box
            position="fixed"
            bottom="0"
            height="120px"
            width="full"
            bgGradient="linear-gradient(180deg, rgba(248, 248, 248, 0) 0%, #F8F8F8 100%)"
            zIndex="1"
        >
            <Center
                height="full"
            >
                <ViewCart />
            </Center>
        </Box>
    )
}