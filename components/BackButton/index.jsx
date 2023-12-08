'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export function BackButton({ prop }) {
	const router = useRouter();

	const handleClick = () => {
		router.push(prop);
	};

	return (
		<button
			className="text-xs lg:text-lg font-medium text-[#0B82FC]"
			onClick={handleClick}
		>
			Назад
		</button>
	);
}

