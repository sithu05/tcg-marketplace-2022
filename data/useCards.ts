import { useInfiniteQuery, useQuery } from 'react-query'
import { Card } from '../types/Card';

type Response = {
    data: Card[];
    page: number;
    pageSize: number;
    count: 12;
    totalCount: number;
}

export const useCards = () => {
    return useInfiniteQuery('cards',
        ({ pageParam = 1 }) => {
            return fetch(`https://api.pokemontcg.io/v2/cards?pageSize=5&page=${pageParam}`)
                .then(response => response.json())
                .then<Response>(response => response)
        },
        {
            getNextPageParam: (lastPage) => {
                if (lastPage.data.length > 0) {
                    return lastPage.page + 1;
                }

                return undefined;
            }
        }
    );
}