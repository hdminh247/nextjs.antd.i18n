import axios from 'axios';
import Util from './index';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
	xsrfCookieName: 'XSRF-TOKEN', // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
	xsrfHeaderName: 'X-XSRF-TOKEN', // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
});

if (typeof window !== 'undefined') {
	instance.interceptors.response.use((response) => response.data, Util.handleResponseError);
}

export const http = instance;

/**
 * Client Side Communication
 */
const httpClient = axios.create({
	headers: { 'Content-Type': 'application/json' },
	withCredentials: true,
});
export const http2 = httpClient;

http2.interceptors.response.use((response) => response.data);

export const clientFetcher = (url: string, method = 'GET', body: any) => {
	if (method === 'GET') return http2.get(url);
	else if (method === 'POST') return http2.post(url, body);
};

export const serverFetcher = (url: string, method = 'GET', body: any) => {
	if (method === 'GET') return http.get(url);
	else if (method === 'POST') return http.post(url, body);
};

export const publicFetcher = (url: string, method = 'GET', body: any) => {
	if (method === 'GET') return axios.get(url).then((res) => res.data);
	else if (method === 'POST') return axios.post(url, body).then((res) => res.data);
};
