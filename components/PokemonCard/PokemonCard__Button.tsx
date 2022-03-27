import { Button } from "@chakra-ui/react"

type Props = {
    selected?: boolean;
    handleOnClick: () => void;
};

const PokemonCard__Button = ({
    selected = false,
    handleOnClick
}: Props) => {
    return (
        <Button
            onClick={handleOnClick}
            width="217px"
            height="47px"
            bgColor={selected ? 'brand.primary' : '#FDCE29'}
            borderRadius="25px"
            color={selected ? "white" : "brand.primary"}
            fontSize="20px"
            fontWeight="medium"
            boxShadow="0px 3px 5px rgba(0, 0, 0, 0.07)"
        >Select Card</Button>
    )
}

export default PokemonCard__Button;