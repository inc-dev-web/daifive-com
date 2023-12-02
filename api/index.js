import axios from 'axios';

export async function fetchServices() {
	try {
		const response = await axios.get(`${process.env.API_URL}/services`);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchSingleService(id) {
	try {
		const response = await axios.get(`${process.env.API_URL}/services/${id}`);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchSpecialists() {
	try {
		const response = await axios.get(`${process.env.API_URL}/articles`);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchSingleSpecialist(id) {
	try {
		const response = await axios.get(`${process.env.API_URL}/articles/${id}`);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchArticles() {
	try {
		const response = await axios.get(`${process.env.API_URL}/specialists`);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}

export async function fetchSingleArticle(id) {
	try {
		const response = await axios.get(`${process.env.API_URL}/specialists/${id}`);
		return response.data.data;
	} catch (error) {
		console.error(error);
	}
}
