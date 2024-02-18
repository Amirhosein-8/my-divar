import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { GetAllCategory, SendFormData } from '../../services/DashBoard';
import toast from 'react-hot-toast';

function FormDashBoard() {
	const queryClient = useQueryClient();

	const [Form, setForm] = useState({
		category: null,
		title: '',
		description: '',
		amount: null,
		city: '',
		images: null,
	});

	const { data, error } = useQuery({
		queryKey: ['Category-Data'],
		queryFn: GetAllCategory,
	});

	const changehandlar = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		if (name !== 'images') {
			setForm({ ...Form, [name]: value });
		} else {
			setForm({ ...Form, [name]: event.target.files[0] });
		}
	};

	const {
		isPending,
		data: dataForm,
		mutate,
		isSuccess,
		isError,
		error: errorForm,
	} = useMutation({
		mutationFn: SendFormData,
		onSuccess: () => queryClient.invalidateQueries('posts-user'),
	});

	const submithandlar = (event) => {
		event.preventDefault();
		if (
			(!Form.city,
			!Form.description,
			!Form.images,
			!Form.category,
			!Form.amount,
			!Form.title)
		) {
			console.log(toast.error('فرم را کامل پر کنید '));
			return;
		}
		const Formdata = new FormData();
		for (let i in Form) {
			Formdata.append(i, Form[i]);
		}
		mutate(Formdata);
	};

	useEffect(() => {
		isSuccess && console.log(toast.success('اگهی با موفقیت ایجاد شد'));
		isError && console.log(toast.success('ایجاد اگهی با خطا مواجه شد'));
	}, [dataForm]);

	return (
		<form
			onSubmit={submithandlar}
			onChange={changehandlar}
			className="flex flex-col items-center my-10 space-y-5 border-2 border-black/50 rounded-md p-3"
		>
			<div className=" flex items-center justify-between gap-x-3">
				<div className="flex flex-col gap-y-2">
					<label htmlFor="">عنوان اگهی</label>
					<input
						className="border-2 border-black/50 rounded-md text-center
                     placeholder:text-center p-2"
						type="text"
						placeholder="عنوان"
						name="title"
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="">توضیحات اگهی</label>
					<input
						className="border-2 border-black/50 rounded-md text-center
                     placeholder:text-center p-2"
						type="text"
						placeholder="توضیحات"
						name="description"
					/>
				</div>
			</div>
			<div className="flex items-center justify-between gap-x-3">
				<div className="flex flex-col gap-y-2">
					<label htmlFor="">رنج قیمتی اگهی</label>
					<input
						className="border-2 border-black/50 rounded-md text-center
                     	placeholder:text-center p-2"
						type="number"
						placeholder="قیمت"
						name="amount"
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="">شهر اگهی شونده</label>
					<input
						className="border-2 border-black/50 rounded-md text-center
                     placeholder:text-center p-2"
						type="text"
						placeholder="شهر"
						name="city"
					/>
				</div>
			</div>
			<div className="space-y-5">
				<div className="flex flex-col gap-y-2">
					<label htmlFor="">دسته بندی اگهی</label>
					<select
						className="border-2 border-black/50 rounded-md text-center
                     placeholder:text-center p-2"
						name="category"
					>
						{data?.data.map((item) => (
							<option key={item._id} value={item._id}>
								{item.name}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="">عکس اگهی</label>
					<input
						className="border-2 border-black/50 rounded-md text-center
                        placeholder:text-center p-2  "
						type="file"
						name="images"
						id=""
						placeholder="عکس"
					/>
				</div>
			</div>
			<button
				disabled={isPending}
				type="submit"
				className="bg-rose-600 rounded-md p-2 disabled:opacity-50"
			>
				ایجاد
			</button>
		</form>
	);
}

export default FormDashBoard;
