'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export function BackButton() {
	const router = useRouter();
	return (
		<button
			className="text-xs lg:text-lg font-medium text-[#0B82FC]"
			onClick={router.back}
		>
			Назад
		</button>
	);
}
