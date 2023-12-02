import React from 'react';

export default function FormattedText({ text, style }) {
	const formatText = (paragraph) => {
		const boldStart = '<b>';
		const boldEnd = '</b>';
		const boldIndexStart = paragraph.indexOf(boldStart);
		const boldIndexEnd = paragraph.indexOf(boldEnd);

		if (boldIndexStart !== -1 && boldIndexEnd !== -1) {
			const boldText = paragraph.substring(boldIndexStart + boldStart.length, boldIndexEnd);
			return (
				<span>
					<strong>{boldText}</strong>
					{paragraph.substring(boldIndexEnd + boldEnd.length)}
					<br />
				</span>
			);
		} else {
			return (
				<span>
					{paragraph}
					<br />
				</span>
			);
		}
	};
	return (
		<p className={`${style}`}>
			{text.split('\n').map((paragraph, index) => (
				<span key={index}>{formatText(paragraph)}</span>
			))}
		</p>
	);
}
