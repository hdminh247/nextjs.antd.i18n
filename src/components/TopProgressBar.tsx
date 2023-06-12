import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import { http } from '../utils/http';

export default function TopProgressBar() {
	const Router = useRouter();

	function load() {
		NProgress.start();
	}

	function stop() {
		NProgress.done();
	}

	const setupStartProgress = () => {
		http.interceptors.request.use((config) => {
			load();
			return config;
		});
	};

	const setupStopProgress = () => {
		const responseFunc = (response: any) => {
			stop();
			return response;
		};

		const errorFunc = (error: any) => {
			stop();
			return Promise.reject(error);
		};

		http.interceptors.response.use(responseFunc, errorFunc);
	};

	setupStartProgress();
	setupStopProgress();

	useEffect(() => {
		Router.events.on('routeChangeStart', load);
		Router.events.on('routeChangeComplete', stop);
		Router.events.on('routeChangeError', stop);

		return () => {
			Router.events.off('routeChangeStart', load);
			Router.events.off('routeChangeComplete', stop);
			Router.events.off('routeChangeError', stop);
		};
	}, []);

	return null;
}
