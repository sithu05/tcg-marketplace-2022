import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { PokemonCard } from '../components/PokemonCard'
import { SearchForm, SearchFormValues } from '../components/SearchForm'
import { ShowMore } from '../components/ShowMore'
import { useCards } from '../data/useCards'

import { Card } from '../types/Card'

type Cart = {
	card: Card,
	qty: number
};

const Home: NextPage = () => {
	const [searchParams, setSearchParams] = useState<SearchFormValues>();
	const [cart, setCart] = useState<Cart[]>([]);

	const { data, fetchNextPage, isLoading } = useCards(searchParams || {});
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

	function handleOnSelect(card: Card) {
		const existed = cart.find((item) => item.card.id === card.id);

		if (!existed) {
			setCart([ ...cart, { card, qty: 1 }]);
		}
	}

  	return (
		<main>
			<SearchForm onSubmit={setSearchParams} />

			<Box mt="40px">
				<Grid templateColumns="repeat(1, 1fr)" gap="103px">
					{data && data.pages.map((page, index) => (
						<Fragment key={index}>
							{page.data.map(item => (
								<GridItem key={item.id}>
									<Center>
										<PokemonCard
											card={item}
											selected={cart.findIndex(_cart => _cart.card.id === item.id) > -1}
											onSelect={handleOnSelect}
										/>
									</Center>
								</GridItem>
							))}
						</Fragment>
					))}
				</Grid>

				{!isLoading && (
					<Center ref={ref}>
						<ShowMore />
					</Center>
				)}
			</Box>

		</main>
  	)
}

export default Home
