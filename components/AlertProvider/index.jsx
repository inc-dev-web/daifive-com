'use client';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
	timeout: 5000,
	position: positions.TOP_RIGHT,
};

const AlertProvider = ({ children }) => {
	return (
		<Provider
			template={AlertTemplate}
			{...options}
		>
			{children}
		</Provider>
	);
};

export default AlertProvider;
