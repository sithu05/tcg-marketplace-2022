import { useQuery } from 'react-query'
import { Card } from '../types/Card';

export const useCards = () => {
    return useQuery('cards',
        () => {
            return fetch("https://api.pokemontcg.io/v2/cards?pageSize=12")
                .then(response => response.json())
                .then<Card[]>(response => response.data)
        },
        {
            initialData: []
        }
    );
}