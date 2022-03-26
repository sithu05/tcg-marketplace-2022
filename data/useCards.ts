import { useInfiniteQuery, useQuery } from 'react-query'
import { Card } from '../types/Card';

type Response = {
    data: Card[];
    page: number;
    pageSize: number;
    count: 12;
    totalCount: number;
}

type Props = {
    name?: string;
}

export const useCards = ({ name }: Props) => {
    let url = 'https://api.pokemontcg.io/v2/cards?pageSize=5';

    let query = '';

    if (name) {
        query += `name:"${name}"`;
    }

    if (query) {
        url += `&q=${query}`;
    }

    return useInfiniteQuery(['cards', `${name}`],
        ({ pageParam = 1 }) => {
            return fetch(`${url}&page=${pageParam}`)
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