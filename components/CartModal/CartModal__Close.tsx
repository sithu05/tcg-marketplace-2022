import { SmallCloseIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"

type Props = {
    onClose: () => void
}

export const CartModal__Close = ({ onClose }: Props) => {
    return (
        <Button
            width="35px"
            height="35px"
            p="0"
            colorScheme="red"
            borderRadius="10px"
            onClick={onClose}
            size="sm"
            bgColor="brand.alert"
            boxShadow="0px 3px 10px rgba(0, 0, 0, 0.15)"
        >
            <SmallCloseIcon />
        </Button>
    )
}