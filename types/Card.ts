export interface Card {
    id: string;
    name: string;
    rarity: string;
    set: {
        total: number
    };
    cardmarket: {
        prices: {
            averageSellPrice: number
        }
    };
}