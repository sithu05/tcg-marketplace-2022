import { Box } from "@chakra-ui/react"
import Image from "next/image"

import logoPic from '../public/images/logo.png'

export const LogoBox = () => {
    return (
        <Box
            width="68px"
            height="42px"
            position="relative">
            <Box
                bg="white"
                width="52px"
                height="50px"
                borderRadius="full"
                position="absolute"
                top="0"
                left="50%"
                transform="translateX(-50%)"
            />

            <Image src={logoPic} alt="TCG Marketplace" placeholder="blur" />
        </Box>
    )
}