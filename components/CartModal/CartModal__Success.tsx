import { Text, VStack } from "@chakra-ui/react"
import Image from "next/image"

import successPic from '../../public/images/success.png'

export const CartModal__Success = () => {
    return (
        <VStack
            my="98px"
            spacing="25px"
        >
            <Image src={successPic} width={110} height={110} alt="Success"  />

            <Text
                fontSize="20px"
                fontWeight="medium"
                color="brand.primary"
            >
                Payment success!
            </Text>
        </VStack>
    )
}