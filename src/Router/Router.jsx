import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';
import AdminPage from '../pages/AdminPage';
import DashBoardPsge from '../pages/DashBoardPsge';
import NotFindPage from '../pages/NotFindPage';
import { useQuery } from '@tanstack/react-query';
import { ProfileHanlar } from '../services/User';
import Loading from '../components/templates/Loading';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function Router() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['profile'],
		queryFn: ProfileHanlar,
	});

	// useEffect(() => {
	// 	isError && console.log(toast.success('شما ثبت نام نکرده اید'));
	// }, [data]);

	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-screen">
					<Loading />
				</div>
			) : (
				<Routes>
					<Route index element={<HomePage />} />
					<Route
						path="/auth"
						element={data ? <DashBoardPsge /> : <AuthPage />}
					/>
					<Route
						path="/admin"
						element={
							data && data.data.role == 'ADMIN' ? (
								<AdminPage />
							) : (
								<>
									{console.log(toast.error('شما ادمین نیستید '))}
									<HomePage />
								</>
							)
						}
					/>
					<Route
						path="/dashboard"
						element={
							data ? (
								<DashBoardPsge />
							) : (
								<>
									{console.log(toast.error('شما ثبت نام نکرده اید'))}
									<AuthPage />
								</>
							)
						}
					/>
					<Route path="/*" element={<NotFindPage />} />
				</Routes>
			)}
		</>
	);
}

export default Router;
