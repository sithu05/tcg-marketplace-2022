import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from '../theme';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<Header/>
				<Component {...pageProps} />
				<Footer />
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp
