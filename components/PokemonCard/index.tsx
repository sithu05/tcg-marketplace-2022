import { Box } from "@chakra-ui/react"

import { Card } from "../../types/Card"
import PokemonCard__Image from "./PokemonCard__Image";
import PokemonCard__Info from "./PokemonCard__Info";


type Props = {
    card: Card;
    selected: boolean;
    onSelect: (card: Card) => void;
}

export const PokemonCard = ({ card, selected, onSelect }: Props) => {
    return (
        <Box
            width="294px"
        >
            <PokemonCard__Image image={card.images.small} name={card.name} />
            <PokemonCard__Info
                name={card.name}
                rarity={card.rarity}
                price={card.cardmarket.prices.averageSellPrice}
                stocks={card.set.total}
                selected={selected}
                handleOnSelect={() => onSelect(card)}
            />
        </Box>
    )
}