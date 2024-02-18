import toast from 'react-hot-toast';
import { api } from '../configs/Api';
import { GetCookie } from '../utils/Cookie';

const ProfileHanlar = () => api.get('user/whoami');

const newaccessToken = async () => {
	const refreshToken = GetCookie('refreshToken');
	if (!refreshToken) {
		console.log('رفرش توکن یافت نشد ');
		return;
	}
	try {
		const res = await api.post('auth/check-refresh-token', { refreshToken });
		return { res };
	} catch (error) {
		return { error };
	}
};
export { ProfileHanlar, newaccessToken };
