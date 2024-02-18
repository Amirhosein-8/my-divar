import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
	return (
		<div className="px-4  h-screen ">
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
