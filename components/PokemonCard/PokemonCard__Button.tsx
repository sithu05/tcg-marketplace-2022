import { Button } from "@chakra-ui/react"

type Props = {
    selected?: boolean;
    onClick: () => void;
};

const PokemonCard__Button = ({
    selected = false,
    onClick
}: Props) => {
    return (
        <Button
            onClick={onClick}
            width="217px"
            height="47px"
            bgColor={selected ? 'brand.primary' : '#FDCE29'}
            borderRadius="25px"
            color={selected ? "white" : "brand.primary"}
            fontSize="20px"
            fontWeight="medium"
            boxShadow="0px 3px 5px rgba(0, 0, 0, 0.07)"
        >
            {selected ? 'Selected' : 'Select Card'}
        </Button>
    )
}

export default PokemonCard__Button;