import { configureStore } from '@reduxjs/toolkit';
import SliceItemc from './features/ShowItems';

const stor = configureStore({
	reducer: {
		showitems: SliceItemc,
	},
});

export { stor };
