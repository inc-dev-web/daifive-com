import React from 'react';

const PhoneNumberInput = ({ setPhoneNumber, phoneNumber, field }) => {
	const formatPhoneNumber = (inputValue) => {
		const cleanedInput = inputValue.replace(/\D/g, '');

		if (cleanedInput.length < 3) {
			return `+380${cleanedInput}`;
		} else {
			return `+380 ${cleanedInput.slice(3, 5)} ${cleanedInput.slice(5, 8)} ${cleanedInput.slice(8, 12)}`;
		}
	};

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		const formattedPhoneNumber = formatPhoneNumber(inputValue);
		setPhoneNumber(formattedPhoneNumber);
		field.onChange(formattedPhoneNumber); // Update react-hook-form value
	};

	const handleKeyDown = (e) => {
		if (e.key === 'Backspace' || e.key === 'Delete') {
			e.preventDefault();
			if (phoneNumber.length > 4) {
				const newValue = phoneNumber.slice(0, -1);
				setPhoneNumber(newValue);
				field.onChange(newValue);
			}
		}
	};

	const handleInputFocus = () => {
		if (!phoneNumber) {
			setPhoneNumber('+380');
			field.onChange('+380');
		}
	};

	return (
		<>
			<input
				placeholder={'+38 0__ ___ __ __'}
				type="text"
				value={phoneNumber}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				onFocus={handleInputFocus}
				className="placeholder-[#FFFFFF80] outline-none text-white w-full h-[46px] lg:h-[56px] flex rounded-[72px] bg-[#FFFFFF66] pl-[28px]"
			/>
		</>
	);
};

export default PhoneNumberInput;
