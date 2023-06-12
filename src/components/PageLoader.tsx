import React from 'react';
import Page from './Page';
import Loader from './Loader';

export default function PageLoader() {
	return (
		<Page className="page-loader">
			<Loader />
		</Page>
	);
}
