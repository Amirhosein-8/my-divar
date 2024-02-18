import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { DeletePostUser, GetPostUser } from '../../services/DashBoard';
import toast from 'react-hot-toast';

function ListDashboard() {
	const BaseUrl = 'http://localhost:3400/';
	const queryClient = useQueryClient();

	const { data } = useQuery({
		queryKey: ['posts-user'],
		queryFn: GetPostUser,
	});

	const {
		mutate,
		data: dataDeletePost,
		isPending,
		isSuccess,
	} = useMutation({
		mutationFn: DeletePostUser,
		onSuccess: () => queryClient.invalidateQueries('posts-user'),
	});

	useEffect(() => {
		isSuccess && console.log(toast.success('اگهی شما با موفقیت حذف شد'));
	}, [dataDeletePost]);

	return (
		<div className="space-y-5 flex  flex-col self-start w-full">
			<h1 className="text-2xl text-center font-semibold">اگهی های من :</h1>
			<ul className=" space-y-5 ">
				{data?.data.posts.map((item) => (
					<li
						className="w-full flex items-center justify-between border-2 border-black/50 p-2 rounded-md"
						key={item._id}
					>
						<div className="flex">
							<img
								className="h-20 w-20"
								src={`${BaseUrl}${item.images[0]}`}
								alt=""
							/>
						</div>
						<div className="space-y-1">
							<p>{item?.options?.title}</p>
							<p>{item?.options?.content}</p>
							<p>{item?.options?.city}</p>
						</div>

						<button
							disabled={isPending}
							onClick={() => mutate(item._id)}
							className="bg-rose-600 p-1 rounded-md disabled:opacity-50"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ListDashboard;
