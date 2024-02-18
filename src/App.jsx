import { Toaster } from 'react-hot-toast';
import Router from './Router/Router';
import { defaultOptions } from './configs/QueryClient';
import Layout from './layouts/Layout';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { stor } from './app/Stor';

export default function App() {
	const Queryclient = new QueryClient({ defaultOptions });

	return (
		<Provider store={stor}>
			<QueryClientProvider client={Queryclient}>
				<BrowserRouter>
					<Layout>
						<Router />
						<Toaster />
					</Layout>
				</BrowserRouter>
			</QueryClientProvider>
		</Provider>
	);
}
