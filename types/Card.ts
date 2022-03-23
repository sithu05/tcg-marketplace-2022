export interface Card {
    id: string;
    name: string;
    rarity: string;
    images: {
        small: string;
        large: string;
    },
    set: {
        total: number
    };
    cardmarket: {
        prices: {
            averageSellPrice: number
        }
    };
}