import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.scss'

const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['700'],
	display: 'swap',
})

export default function HeroSection() {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.hero__inner}>
					<div className={styles.hero__info}>
						<h1 className={styles.hero__title}>
							Discover Digital Art & Collect NFTs
						</h1>
						<h6 className={styles.hero__description}>
							NFT marketplace UI created with Anima for Figma. Collect, buy and
							sell art from more than 20k NFT artists.
						</h6>
						<Link className={styles.hero__button} href="/">
							<Image
								src="/icons/rocketIcon.svg"
								width={20}
								height={20}
								alt="user"
							/>
							<div className={styles.hero__buttonText}>Get Started</div>
						</Link>
						<div className={styles.hero__stats}>
							<div className={styles.hero__statsCol}>
								<h4
									className={`${styles.hero__statsTitle} ${spaceMono.className}`}
								>
									240k+
								</h4>
								<div className={styles.hero__statsText}>Total Sale</div>
							</div>
							<div className={styles.hero__statsCol}>
								<h4
									className={`${styles.hero__statsTitle} ${spaceMono.className}`}
								>
									100k+
								</h4>
								<div className={styles.hero__statsText}>Auctions</div>
							</div>
							<div className={styles.hero__statsCol}>
								<h4
									className={`${styles.hero__statsTitle} ${spaceMono.className}`}
								>
									240k+
								</h4>
								<div className={styles.hero__statsText}>Artists</div>
							</div>
						</div>
					</div>
					<div className={styles.hero__nft}>
						<Image
							className={styles.hero__nftImg}
							src="/img/spaceWalking.svg"
							width={510}
							height={401}
							alt="nft picture"
						/>
						<h5 className={styles.hero__nftTitle}>Space Walking</h5>
						<div className={styles.hero__nftCreator}>
							<Image
								className={styles.hero__nftIcon}
								src="/icons/usersIcon/animakidIcon.svg"
								width={24}
								height={24}
								alt="avatar"
							/>
							<div className={styles.hero__nftName}>Animakid</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
