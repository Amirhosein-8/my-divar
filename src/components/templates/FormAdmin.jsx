import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { CreatCategory } from '../../services/Admin';
import toast from 'react-hot-toast';

function FormAdmin() {
	const [Form, setForm] = useState({ name: '', icon: '', slug: '' });
	const QueyClient = useQueryClient();

	const changehandlaer = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setForm({ ...Form, [name]: value });
	};

	const { mutate, data, isPending, isSuccess } = useMutation({
		mutationFn: CreatCategory,
		onSuccess: () => QueyClient.invalidateQueries('Get-Category-Admin'),
	});

	const submithandlar = (event) => {
		event.preventDefault();
		if (!Form.icon || !Form.name) {
			console.log(toast.error('فرم را کامل پر کنید '));
			return;
		}
		mutate(Form);
		setForm({ name: '', icon: '', slug: '' });
	};

	useEffect(() => {
		isSuccess && console.log(toast.success('کتگوری مورد نظر با موفقیت ایجاد شد'));
	}, [data]);
	return (
		<form
			onChange={changehandlaer}
			onSubmit={submithandlar}
			className="flex flex-col items-center border-2 border-black/50 p-6 rounded-md space-y-5"
		>
			<div className="flex flex-col items-center gap-y-3">
				<label htmlFor="name">کتگوری خود راوارد نمایید</label>
				<input
					placeholder="کتگوری"
					className="border-2 border-black/50 rounded-md text-center placeholder:text-center p-1"
					type="text"
					id="name"
					name="name"
					value={Form.name}
				/>
			</div>
			<div className="flex flex-col items-center gap-y-3">
				<label htmlFor="icon">نام ایکون خود را وارد نمایید </label>
				<input
					className="border-2 border-black/50 rounded-md text-center placeholder:text-center p-1"
					type="icon"
					placeholder="ایکون"
					name="icon"
					value={Form.icon}
				/>
			</div>
			<button
				disabled={isPending}
				type="submit"
				className="bg-rose-700 p-2 rounded-md disabled:opacity-50"
			>
				ایجاد
			</button>
		</form>
	);
}

export default FormAdmin;
