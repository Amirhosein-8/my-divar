import axios from 'axios';
import { GetCookie, SetCookie } from '../utils/Cookie';
import { newaccessToken } from '../services/User';

const api = axios.create({
	baseURL: 'http://localhost:3400/',
	headers: {
		'Content-Type': 'application/json',
	},
});

api.interceptors.request.use(
	(req) => {
		const getCookie = GetCookie('accessToken');
		if (getCookie) {
			req.headers['Authorization'] = `Berear ${getCookie}`;
		}

		return req;
	},
	(error) => Promise.reject(error),
);

api.interceptors.response.use(
	(res) => res,
	async (error) => {
		const OriginalRequest = error.config;
		if (error.response.status == 401 && !OriginalRequest._retry) {
			OriginalRequest._retry = true;
			const { res, erroe } = await newaccessToken();
			if (res.data) {
				SetCookie(res.data);
				return api(OriginalRequest);
			}
		}
	},
);

export { api };
