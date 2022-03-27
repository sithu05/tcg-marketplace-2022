import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from '../theme';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { CartWrapper } from '../context/cart';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<CartWrapper>
					<Header/>
					<Component {...pageProps} />
					<Footer />
				</CartWrapper>
			</ChakraProvider>
		</QueryClientProvider>
	);
}

export default MyApp
