import { useInfiniteQuery } from 'react-query'
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
    type?: string;
    rarity?: string;
    set?: string;
}

export const useCards = ({ name, type, rarity, set }: Props) => {
    let url = 'https://api.pokemontcg.io/v2/cards?pageSize=5';

    let query = '';

    if (name) {
        query += `name:${name}*`;
    }

    if (type) {
        query += ` types:${type}`;
    }

    if (rarity) {
        query += ` rarity:${rarity}`;
    }

    if (set) {
        query += ` set.id:${set}`;
    }

    if (query) {
        url += `&q=${query}`;
    }

    return useInfiniteQuery(['cards', `${name}-${type}-${rarity}-${set}`],
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