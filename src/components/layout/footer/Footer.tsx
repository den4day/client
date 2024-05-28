import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'

const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['700'],
	display: 'swap',
})

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footer__inner}>
					<div className={styles.footer__info}>
						<div
							className={`${styles.footer__column} ${styles.footer__column1}`}
						>
							<h5
								className={`${styles.footer__title} ${styles.footer__titleLogo}`}
							>
								<Link href="/">
									<Image
										src="/img/logo.svg"
										width={244}
										height={32}
										alt="logo"
									/>
								</Link>
							</h5>
							<div className={styles.footer__text}>
								NFT marketplace UI created with Anima for Figma.
							</div>
							<div className={styles.footer__socials}>
								<div className={styles.footer__socialsText}>
									Join our community
								</div>
								<ul className={styles.footer__socialsIcons}>
									<li className={styles.footer__socialsLink}>
										<Link href="/">
											<Image
												src="/icons/socialsIcon/discordIcon.svg"
												width={32}
												height={32}
												alt="discord icon"
											/>
										</Link>
									</li>
									<li className={styles.footer__socialsLink}>
										<Link href="/">
											<Image
												src="/icons/socialsIcon/youtubeIcon.svg"
												width={32}
												height={32}
												alt="youtube icon"
											/>
										</Link>
									</li>
									<li className={styles.footer__socialsLink}>
										<Link href="/">
											<Image
												src="/icons/socialsIcon/twitterIcon.svg"
												width={32}
												height={32}
												alt="twitter icon"
											/>
										</Link>
									</li>
									<li className={styles.footer__socialsLink}>
										<Link href="/">
											<Image
												src="/icons/socialsIcon/instagramIcon.svg"
												width={32}
												height={32}
												alt="instagram icon"
											/>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div
							className={`${styles.footer__column} ${styles.footer__column2}`}
						>
							<h5 className={`${styles.footer__title} ${spaceMono.className}`}>
								Explore
							</h5>
							<nav>
								<ul className={styles.footer__menu}>
									<li className={styles.footer__menuLink}>
										<Link href="/">Marketplace</Link>
									</li>
									<li className={styles.footer__menuLink}>
										<Link href="/">Rankings</Link>
									</li>
									<li className={styles.footer__menuLink}>
										<Link href="/">Connect a wallet</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className={styles.footer__column}>
							<h5 className={`${styles.footer__title} ${spaceMono.className}`}>
								Join our weekly digest
							</h5>
							<div
								className={`${styles.footer__text} ${styles.footer__textWidth}`}
							>
								Get exclusive promotions & updates straight to your inbox.
							</div>
							<form className={styles.footer__form} action="">
								<input
									className={styles.footer__input}
									type="text"
									placeholder="Enter your email here"
								/>
								<input
									className={styles.footer__button}
									type="submit"
									value="Subscribe"
								/>
							</form>
						</div>
					</div>
				</div>
				<div className={styles.footer__author}>
					Ⓒ NFT Market. Use this template freely.
				</div>
			</div>
		</footer>
	)
}
