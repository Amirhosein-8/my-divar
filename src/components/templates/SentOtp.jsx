import toast from 'react-hot-toast';

import { SndOtpHandlar } from '../../services/Auth';
import { useState } from 'react';
import Loading from './Loading';

function SentOtp({ setStep, Mobile, setMobile }) {
	const [Load, setLoad] = useState(false);

	const submithandlaer = async (event) => {
		setLoad(true);
		event.preventDefault();
		if (Mobile.length !== 11) {
			console.log(toast.error('شماره مبایل معتر نیست'));
			setLoad(false);
			return;
		}
		const { res, error } = await SndOtpHandlar(Mobile);
		if (res) {
			console.log(toast.success('کد با موفقیت ارسال شد'));
			setStep(2);
			setLoad(false);
		}
	};

	return (
		<>
			{Load ? (
				<Loading />
			) : (
				<form
					onSubmit={submithandlaer}
					className=" flex flex-col items-center gap-5 border-2
            border-black/50 p-5 rounded-2xl "
				>
					<label>شماره مبایل خود را وارد نمایید</label>
					<input
						onChange={(event) => setMobile(event.target.value)}
						className="border-2 border-black/50 rounded-md p-1 text-center placeholder:text-center"
						maxLength={11}
						type="text"
						placeholder="شماره مبایل "
					/>
					<button type="submit" className="bg-rose-600 p-1.5 rounded-md">
						ارسال
					</button>
				</form>
			)}
		</>
	);
}

export default SentOtp;
