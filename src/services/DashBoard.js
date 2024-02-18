import axios from 'axios';
import { api } from '../configs/Api';
import { GetCookie } from '../utils/Cookie';

const GetAllCategory = () => api.get('/category');
const SendFormData = (FormData) => {
	const AcceessToken = GetCookie('accessToken');
	return axios.post('http://localhost:3400/post/create', FormData, {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization: `Bearer ${AcceessToken}`,
		},
	});
};

const GetPostUser = () => api.get('post/my');
const DeletePostUser = (id) => api.delete(`post/delete/${id}`);

export { GetAllCategory, SendFormData, GetPostUser, DeletePostUser };
