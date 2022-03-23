import { Box, Center, Grid, GridItem } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PokemonCard } from '../components/PokemonCard'
import { useCards } from '../data/useCards'


const Home: NextPage = () => {
	const { data } = useCards();

  	return (
		<Box mt="30">
			<Grid templateColumns="repeat(1, 1fr)" gap="103px">
				{data && data.map(item => (
					<GridItem key={item.id}>
						<Center>
							<PokemonCard card={item} />
						</Center>
					</GridItem>
				))}
			</Grid>
		</Box>
  	)
}

export default Home
