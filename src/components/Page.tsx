import React from 'react';
import Head from 'next/head';

import PageLoader from './PageLoader';

function Page({
	loading = false,
	children = "",
	className = "",
	title = "",
	noindex = false,
}: Props) {
	if (loading) return <PageLoader />;
	else {

		return (
			<div className={`page-root ${className}`}>
				<Head>
					<title>{title}</title>
					<meta property="og:title" content={title} />
					<meta name="twitter:title" content={title} />
					<meta name="description" content={title} />
					<meta property="og:description" content={title} />
					<meta name="twitter:description" content={title} />
					{/*<meta property="og:image" content={metaImage} />*/}
					{/*<meta name="twitter:image" content={metaImage} />*/}
					{/*<meta property="og:url" content={metaSite} />*/}
					{/*<meta name="twitter:url" content={metaSite} />*/}
					{noindex ? (
						<meta name="robots" content="noindex" />
					) : (
						<meta
							name="robots"
							content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
						/>
					)}
				</Head>
				{children}
			</div>
		);
	}
}

interface Props{
	loading?: boolean,
	children: any,
	className: string,
	title?: string,
	noindex?: boolean
}

export default Page;
