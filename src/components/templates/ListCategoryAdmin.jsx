import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { DeleteCategory, GetCategory } from '../../services/Admin';
import Loading from './Loading';
import toast from 'react-hot-toast';

function ListCategoryAdmin() {
	const Queryclient = useQueryClient();

	const { data, isLoading } = useQuery({
		queryKey: ['Get-Category-Admin'],
		queryFn: GetCategory,
	});

	const { mutate, isPending, isSuccess, error, isError } = useMutation({
		mutationFn: DeleteCategory,
		onSuccess: () => Queryclient.invalidateQueries('Get-Category-Admin'),
	});

	useEffect(() => {
		isSuccess && console.log(toast.success('کتگوری مورد نظر با موفقیت حذف شد'));
		isError && console.log(toast.success(error));
	}, [isSuccess]);

	return (
		<div className="w-full space-y-4">
			{isLoading ? (
				<Loading />
			) : (
				data?.data.map((item) => (
					<li
						key={item._id}
						className="list-none border-2 border-black/50 w-full rounded-md p-2
             			flex items-center justify-between"
					>
						<p>{item.name}</p>
						<button
							disabled={isPending}
							onClick={() => mutate(item._id)}
							className="bg-rose-600 p-2 rounded-md disabled:opacity-50 "
						>
							Delete
						</button>
					</li>
				))
			)}
		</div>
	);
}

export default ListCategoryAdmin;
