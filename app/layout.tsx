import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
	title: 'Polished Lounge',
	description:
		'Immerse yourself in an atmosphere where every detail is thoughtfully considered, inviting you to relax, indulge, and elevate your experience',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
