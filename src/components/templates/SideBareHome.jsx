import { useQuery } from '@tanstack/react-query';
import { GetCategory } from '../../services/Admin';
import { GetAlloData } from '../../services/home';

function SideBareHome() {
	const { data, isLoading } = useQuery({
		queryKey: ['Get-Category-Admin'],
		queryFn: GetCategory,
	});
	const { data: dataPost, isLoading: loading_posts } = useQuery({
		queryKey: ['post-list'],
		queryFn: GetAlloData,
	});

	return (
		<div className="space-y-5">
			<h2 className="text-xl font-semibold">دسته بندی ها </h2>
			<ul className="space-y-3 border-2 border-black/50 rounded-md p-4">
				{data?.data?.map((category) => (
					<li className="hover:text-rose-600" key={category._id}>
						{category.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default SideBareHome;
