import { api } from '../configs/Api';

const SndOtpHandlar = async (mobile) => {
	try {
		const res = await api.post('auth/send-otp', { mobile });
		return { res };
	} catch (error) {
		return { error };
	}
};

const CheckOtpHandlar = async (mobile, code) => {
	try {
		const res = await api.post('auth/check-otp', { mobile, code });
		return { res };
	} catch (error) {
		return { error };
	}
};
export { SndOtpHandlar, CheckOtpHandlar };
