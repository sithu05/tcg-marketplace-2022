import { Button } from "@chakra-ui/react"

export const CartModal__Paynow = () => {
    return (
        <Button
            width={217}
            fontSize="20px"
            fontWeight="500"
            colorScheme="blue"
            borderRadius="25px"
            bgColor="brand.action"
            boxShadow="0px 3px 5px rgba(0, 0, 0, 0.07)"
        >
            Pay now
        </Button>
    )
}