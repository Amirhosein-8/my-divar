import CheckOtp from '../components/templates/CheckOtp';
import SentOtp from '../components/templates/SentOtp';

import { useState } from 'react';

function AuthPage() {
	const [Step, setStep] = useState(1);
	const [Mobile, setMobile] = useState('');

	return (
		<div className="h-full w-auto flex flex-col justify-center items-center">
			{Step === 1 ? (
				<SentOtp setStep={setStep} Mobile={Mobile} setMobile={setMobile} />
			) : (
				<CheckOtp Mobile={Mobile} setStep={setStep} />
			)}
		</div>
	);
}

export default AuthPage;
