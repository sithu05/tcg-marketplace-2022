import { Box } from "@chakra-ui/react"

import { useCartContext } from "../../context/cart";

import { Card } from "../../types/Card"

import PokemonCard__Button from "./PokemonCard__Button";
import PokemonCard__Image from "./PokemonCard__Image";
import PokemonCard__Info from "./PokemonCard__Info";


type Props = {
    card: Card;
}

export const PokemonCard = ({ card }: Props) => {
    const { cart, addToCart } = useCartContext();

    const selected = cart.findIndex((item) => item.card.id === card.id) > -1;

    function handleOnClick() {
        if (selected) return;

        addToCart(card);
    }

    return (
        <Box
            width="294px"
            position="relative"
        >
            <PokemonCard__Image image={card.images.small} name={card.name} />
            <PokemonCard__Info
                name={card.name}
                rarity={card.rarity}
                price={card.cardmarket.prices.averageSellPrice}
                stocks={card.set.total}
            />

            <Box
                position="absolute"
                bottom="0"
                left="50%"
                transform="translate(-50%,50%)"
            >
                <PokemonCard__Button
                    selected={selected}
                    onClick={handleOnClick}
                />
            </Box>
        </Box>
    )
}