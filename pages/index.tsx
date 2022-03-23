import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Fragment, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { PokemonCard } from '../components/PokemonCard'
import { ShowMore } from '../components/ShowMore'
import { useCards } from '../data/useCards'


const Home: NextPage = () => {
	const { data, fetchNextPage, isLoading } = useCards();
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);


  	return (
		<Box mt="30">
			<Grid templateColumns="repeat(1, 1fr)" gap="103px">
				{data && data.pages.map((page, index) => (
					<Fragment key={index}>
						{page.data.map(item => (
							<GridItem key={item.id}>
								<Center>
									<PokemonCard card={item} />
								</Center>
							</GridItem>
						))}
					</Fragment>
				))}
			</Grid>

			{!isLoading && (
				<Center ref={ref} textAlign="center">
					<ShowMore />
				</Center>
			)}
		</Box>
  	)
}

export default Home
