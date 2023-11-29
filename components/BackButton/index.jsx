import React from 'react';
import Link from 'next/link';

export function BackButton() {
	return (
		<Link
			href="/"
			className="text-xs lg:text-lg font-medium text-[#0B82FC]"
		>
			Назад
		</Link>
	);
}
