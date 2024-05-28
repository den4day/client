import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'
import { Work_Sans } from 'next/font/google'
import './globals.scss'

const workSans = Work_Sans({
	subsets: ['latin'],
	weight: ['400', '600', '700'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<title>NFT Marketplace</title>
				<link rel="icon" href="/favicon.svg" type="favicon.svg" sizes="33x32" />
			</head>
			<body className={workSans.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
