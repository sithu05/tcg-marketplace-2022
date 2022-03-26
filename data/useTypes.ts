import { useQuery } from "react-query"

export const useTypes = () => {
    return useQuery('types', () => {
        return fetch('https://api.pokemontcg.io/v2/types')
                .then(response => response.json())
                .then<string[]>(response => response.data);
    }, {
        placeholderData: []
    });
}