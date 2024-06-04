'use client';
import { SnackbarProvider } from 'notistack';

const AlertProvider = ({ children }) => {
	return (
		<SnackbarProvider
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			autoHideDuration={3000}
			maxSnack={10}
		>
			{children}
		</SnackbarProvider>
	);
};

export default AlertProvider;
