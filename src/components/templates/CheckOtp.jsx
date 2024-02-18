import { useState } from 'react';
import toast from 'react-hot-toast';

import { CheckOtpHandlar } from '../../services/Auth';
import { SetCookie } from '../../utils/Cookie';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function CheckOtp({ Mobile, setStep }) {
	const [Code, setCode] = useState('');
	const navigate = useNavigate();
	const [Load, setLoad] = useState(false);

	const submithandlar = async (event) => {
		event.preventDefault();
		setLoad(true);
		if (Code.length !== 5) {
			setLoad(false);
			console.log(toast.error('مقدار کد وارد شده نامعتر هست '));
			return;
		}
		const { res, error } = await CheckOtpHandlar(Mobile, Code);
		if (error && error?.response?.status == 401) {
			setLoad(false);
			console.log(toast.error('کد نامعتر هست'));
		}
		if (res) {
			setLoad(false);
			SetCookie(res.data);
			console.log(toast.success('ثبت نام با موفقیت انجام شد'));
			navigate('/');
		} else {
			setLoad(false);
		}
	};

	return (
		<>
			{Load ? (
				<Loading />
			) : (
				<form
					onSubmit={submithandlar}
					className="  flex flex-col items-center gap-5 border-2
		          border-black/50 p-5 rounded-2xl"
				>
					<div>
						<label htmlFor="">
							کد ارسال شده به این شماره «{Mobile}»را وارد نمایید{' '}
						</label>
						<button
							onClick={() => setStep(1)}
							className="bg-green-500 p-1 rounded-md"
						>
							تغیر شماره
						</button>
					</div>
					<input
						onChange={(event) => setCode(event.target.value)}
						className="border-2 border-black/50 rounded-md p-1 text-center placeholder:text-center"
						type="text"
						placeholder="کد ارسال شده "
					/>
					<button type="submit" className="bg-rose-600 p-1.5 rounded-md">
						ارسال
					</button>
				</form>
			)}
		</>
	);
}

export default CheckOtp;
