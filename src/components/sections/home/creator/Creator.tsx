import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Creator.module.scss'

const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
})

export default function CreatorSection() {
	return (
		<section className={styles.creator}>
			<div className={styles.container}>
				<div className={styles.creator__inner}>
					<div className={styles.creator__info}>
						<div className={styles.creator__header}>
							<h2 className={styles.creator__title}>Top creators</h2>
							<h6 className={styles.creator__text}>
								Checkout Top Rated Creators on the NFT Marketplace
							</h6>
						</div>
						<Link className={styles.creator__button} href="/">
							<Image
								src="/icons/rocketPurpleIcon.svg"
								width={20}
								height={20}
								alt="user icon"
							/>
							<div className={styles.creator__buttonText}>View Rankings</div>
						</Link>
					</div>
					<div className={styles.creator__grid}>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									1
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/keepitreal.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Keepitreal</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									2
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/digiLab.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>DigiLab</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									3
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/gravityOne.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>GravityOne</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									4
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/juanie.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Juanie</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									5
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/blueWhale.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>BlueWhale</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									6
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/mrFox.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Mr Fox</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									7
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/shroomie.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Shroomie</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									8
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/robotica.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Robotica</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									9
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/rustyRobot.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>RustyRobot</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									10
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/animakid.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Animakid</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									11
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/dotgu.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Dotgu</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
						<div className={styles.creator__card}>
							<div className={styles.creator__cardImg}>
								<div
									className={`${spaceMono.className} ${styles.creator__cardNumber}`}
								>
									12
								</div>
								<Image
									className={styles.creator__cardAvatar}
									src="/img/creators/ghiblier.svg"
									width={120}
									height={120}
									alt="avatar"
								/>
							</div>
							<h5 className={styles.creator__cardName}>Ghiblier</h5>
							<div className={styles.creator__cardText}>
								<div className={styles.creator__cardTotal}>Total Sales:</div>
								<div
									className={`${spaceMono.className} ${styles.creator__cardPrice}`}
								>
									34.53 ETH
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
