import { Box, Center, Container, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { PokemonCard } from '../components/PokemonCard'
import { SearchForm, SearchFormValues } from '../components/SearchForm'
import { ShowMore } from '../components/ShowMore'
import { useCards } from '../data/useCards'

const Home: NextPage = () => {
	const [searchParams, setSearchParams] = useState<SearchFormValues>();

	const columns = useBreakpointValue({
		base: 'repeat(1, 1fr)',
		lg: 'repeat(3, 1fr)'
	});

	const { data, fetchNextPage, isLoading } = useCards(searchParams || {});
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage]);

  	return (
		<main>
			<Container
				maxW="container.lg"
			>
				<SearchForm onSubmit={setSearchParams} />

				<Box mt="40px">
					<Grid templateColumns={columns} rowGap="103px" columnGap="73px">
						{data && data.pages.map((page, index) => (
							<Fragment key={index}>
								{page.data.map(item => (
									<GridItem key={item.id}>
										<Center>
											<PokemonCard
												card={item}
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
			</Container>
		</main>
  	)
}

export default Home
