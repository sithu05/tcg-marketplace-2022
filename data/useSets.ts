import { useQuery } from "react-query"
import { Set } from "../types/Set";

export const useSets = () => {
    return useQuery('sets', () => {
        return fetch('https://api.pokemontcg.io/v2/sets?pageSize=10')
                .then(response => response.json())
                .then<Set[]>(response => response.data);
    }, {
        placeholderData: []
    });
}