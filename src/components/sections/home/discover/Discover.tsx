import { Space_Mono, Work_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Discover.module.scss'

const workSans = Work_Sans({
	subsets: ['latin'],
	weight: ['400', '600'],
	display: 'swap',
})

const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['400'],
	display: 'swap',
})

export default function DiscoverSection() {
	return (
		<section className={`${spaceMono.className} ${styles.discover}`}>
			<div className={styles.container}>
				<div className={styles.discover__inner}>
					<div className={`${styles.discover__info} ${workSans.className}`}>
						<div className={styles.discover__header}>
							<h2 className={styles.discover__title}>Discover More NFTs</h2>
							<h6 className={styles.discover__text}>
								Explore new trending NFTs
							</h6>
						</div>
						<Link className={styles.discover__button} href="/">
							<Image
								src="/icons/eyePurpleIcon.svg"
								width={20}
								height={20}
								alt="eye"
							/>
							<div className={styles.discover__buttonText}>See All</div>
						</Link>
					</div>
					<div className={styles.discover__cards}>
						<div className={styles.discover__card}>
							<Image
								className={styles.discover__cardNftImg}
								src="/img/discover/distantGalaxy.svg"
								width={330}
								height={296}
								alt="eye"
							/>
							<div className={styles.discover__cardInfo}>
								<h5
									className={`${workSans.className} ${styles.discover__cardTitle}`}
								>
									Distant Galaxy
								</h5>
								<div className={styles.discover__cardAuthor}>
									<Image
										className={styles.discover__cardImg}
										src="/icons/usersIcon/moonDancerIcon.svg"
										width={24}
										height={24}
										alt="author"
									/>
									<div className={styles.discover__cardName}>MoonDancer</div>
								</div>
								<div className={styles.discover__cardText}>
									<div>Price</div>
									<div>Highest Bid</div>
								</div>
								<div className={styles.discover__cardNum}>
									<div>1.63 ETH</div>
									<div>0.33 wETH</div>
								</div>
							</div>
						</div>
						<div className={styles.discover__card}>
							<Image
								className={styles.discover__cardNftImg}
								src="/img/discover/lifeOnEdena.svg"
								width={330}
								height={296}
								alt="eye"
							/>
							<div className={styles.discover__cardInfo}>
								<h5
									className={`${workSans.className} ${styles.discover__cardTitle}`}
								>
									Life On Edena
								</h5>
								<div className={styles.discover__cardAuthor}>
									<Image
										className={styles.discover__cardImg}
										src="/icons/usersIcon/nebulaKidIcon.svg"
										width={24}
										height={24}
										alt="author"
									/>
									<div className={styles.discover__cardName}>NebulaKid</div>
								</div>
								<div className={styles.discover__cardText}>
									<div>Price</div>
									<div>Highest Bid</div>
								</div>
								<div className={styles.discover__cardNum}>
									<div>1.63 ETH</div>
									<div>0.33 wETH</div>
								</div>
							</div>
						</div>
						<div className={styles.discover__card}>
							<Image
								className={styles.discover__cardNftImg}
								src="/img/discover/astroFiction.svg"
								width={330}
								height={296}
								alt="eye"
							/>
							<div className={styles.discover__cardInfo}>
								<h5
									className={`${workSans.className} ${styles.discover__cardTitle}`}
								>
									Astro Fiction
								</h5>
								<div className={styles.discover__cardAuthor}>
									<Image
										className={styles.discover__cardImg}
										src="/icons/usersIcon/spaceoneIcon.svg"
										width={24}
										height={24}
										alt="author"
									/>
									<div className={styles.discover__cardName}>Spaceone</div>
								</div>
								<div className={styles.discover__cardText}>
									<div>Price</div>
									<div>Highest Bid</div>
								</div>
								<div className={styles.discover__cardNum}>
									<div>1.63 ETH</div>
									<div>0.33 wETH</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
