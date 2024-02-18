import React from 'react';
import FormAdmin from '../components/templates/FormAdmin';
import ListCategoryAdmin from '../components/templates/ListCategoryAdmin';

function AdminPage() {
	return (
		<div className="flex flex-col items-center  my-10 gap-y-20">
			<FormAdmin />
			<ListCategoryAdmin />
		</div>
	);
}

export default AdminPage;
