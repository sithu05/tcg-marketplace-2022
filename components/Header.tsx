import { Box, Text } from "@chakra-ui/react"
import { LogoBox } from "./LogoBox"

export const Header = () => {
    return (
        <Box
            height="77px"
            bgColor="white"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.03);"
            position="relative">
            <Text
                position="absolute"
                top="18px"
                left="50%"
                transform="translateX(-50%)"
                fontWeight="bold"
                fontSize="24px">TCG Marketplace</Text>

            <Box
                position="absolute"
                top="48px"
                left="50%"
                transform="translateX(-50%)"
            >
                <LogoBox />
            </Box>
        </Box>
    )
}