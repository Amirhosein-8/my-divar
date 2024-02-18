import { api } from '../configs/Api';

const GetAlloData = () => api.get('');
const getItemCategory = (id) => api.get();

export { GetAlloData, getItemCategory };
