import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CardUI } from '../components/CardUI'
import { useCards } from '../data/useCards'


const Home: NextPage = () => {
	const { data } = useCards();

  	return (
		<Box mt="30">
			{data && data.map(item => <CardUI key={item.id} card={item} />)}
		</Box>
  	)
}

export default Home
