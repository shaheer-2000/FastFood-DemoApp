import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from '../context/AppContext';
import { AuthProvider } from '../context/AuthContext';

import "@fontsource/raleway";
import { MenuProvider } from '../context/MenuContext';

const theme = extendTheme({
	fonts: {
		heading: `'Raleway', sans-serif`,
		body: `'Raleway', sans-serif`
	}
});

function MyApp({ Component, pageProps }) {
	return (
    	<ChakraProvider theme={theme}>
			<AppProvider>
				<AuthProvider>
					<MenuProvider>
						<Component {...pageProps} />
					</MenuProvider>
				</AuthProvider>
			</AppProvider>
		</ChakraProvider>
	);
}

export default MyApp
