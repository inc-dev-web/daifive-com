const fetchStrapiApiEndpoint = async (url) => {
	const response = await fetch(`${process.env.API_URL}/${url}`, {
		next: {
			revalidate: 10,
		},
	});
	return (await response.json()).data;
};

export const fetchAllServices = async () => {
	return await fetchStrapiApiEndpoint(`services?populate=*`);
};

export const fetchDocument = async () => {
	return await fetchStrapiApiEndpoint(`help-center-document?populate=*`);
};

export const fetchAllServicesPaginated = async (page, pageSize) => {
	return await fetchStrapiApiEndpoint(`services?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`);
};

export const fetchServiceById = async (id) => {
	return await fetchStrapiApiEndpoint(`services/${id}?populate=*`);
};

export const fetchSpecialistById = async (id) => {
	return await fetchStrapiApiEndpoint(`specialists/${id}?populate=*`);
};

export const fetchAllSpecialists = async () => {
	return await fetchStrapiApiEndpoint(`specialists?populate=*`);
};

export const fetchLastSpecialists = async (count) => {
	return await fetchStrapiApiEndpoint(`specialists?populate=*&pagination[page]=1&pagination[pageSize]=${count}&sort=publishedAt:desc`);
};

export const fetchLastArticles = async (count) => {
	return await fetchStrapiApiEndpoint(`articles?populate=*&pagination[page]=1&pagination[pageSize]=${count}&sort=createdAt:desc`);
};

export const fetchArticleById = async (id) => {
	return await fetchStrapiApiEndpoint(`articles/${id}?populate=*`);
};

export const fetchAllArticle = async () => {
	return await fetchStrapiApiEndpoint(`articles?populate=*`);
};
