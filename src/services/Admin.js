import { api } from '../configs/Api';

const CreatCategory = (Form) => api.post('/category', Form);
const GetCategory = () => api.get('/category');
const DeleteCategory = (id) => api.delete(`/category/${id}`);

export { CreatCategory, GetCategory, DeleteCategory };
