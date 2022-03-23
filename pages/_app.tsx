import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'

import theme from '../theme';

import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Header/>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp
