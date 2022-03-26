import { useQuery } from "react-query"

export const useRarities = () => {
    return useQuery('rarities', () => {
        return fetch('https://api.pokemontcg.io/v2/rarities')
                .then(response => response.json())
                .then<string[]>(response => response.data);
    }, {
        placeholderData: []
    });
}