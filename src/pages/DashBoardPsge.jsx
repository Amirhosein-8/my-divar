import React from 'react';
import FormDashBoard from '../components/templates/FormDashBoard';
import ListDashboard from '../components/templates/ListDashboard';

function DashBoardPsge() {
	return (
		<div className='flex flex-col items-center'>
			<FormDashBoard />
			<ListDashboard />
		</div>
	);
}

export default DashBoardPsge;
