import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import styles from './Trend.module.scss'

const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['700'],
	display: 'swap',
})

export default function TrendSection() {
	return (
		<section className={styles.trend}>
			<div className={styles.container}>
				<div className={styles.trend__inner}>
					<h2 className={styles.trend__title}>Trending Collection</h2>
					<h6 className={styles.trend__text}>
						Checkout our weekly updated trending collection.
					</h6>
					<div className={styles.trend__collections}>
						<div className={styles.trend__collectionsCol}>
							<Image
								className={styles.trend__collectionsMainImg}
								src="/img/trendingCollection/dsgnAnimals/primaryDog.svg"
								width={330}
								height={330}
								alt="nft picture"
							/>
							<div className={styles.trend__collectionsImages}>
								<Image
									className={styles.trend__collectionsImg}
									src="/img/trendingCollection/dsgnAnimals/secondaryCat.svg"
									width={100}
									height={100}
									alt="nft picture"
								/>
								<Image
									className={styles.trend__collectionsImg}
									src="/img/trendingCollection/dsgnAnimals/secondaryBear.svg"
									width={100}
									height={100}
									alt="nft picture"
								/>
								<div
									className={`${styles.trend__collectionsNumber} ${spaceMono.className}`}
								>
									1025+
								</div>
							</div>
							<h5 className={styles.trend__collectionsTitle}>DSGN Animals</h5>
							<div className={styles.trend__collectionsAuthor}>
								<Image
									className={styles.trend__collectionsIcon}
									src="/icons/usersIcon/mrFoxIcon.svg"
									width={24}
									height={24}
									alt="avatar"
								/>
								<div className={styles.trend__collectionsName}>MrFox</div>
							</div>
						</div>
						<div className={styles.trend__collectionsCol}>
							<Image
								className={styles.trend__collectionsMainImg}
								src="/img/trendingCollection/magicMushrooms/primaryMashroom.svg"
								width={330}
								height={330}
								alt="nft"
							/>
							<div className={styles.trend__collectionsImages}>
								<Image
									className={styles.trend__collectionsImg}
									src="/img/trendingCollection/magicMushrooms/secondaryMashroom1.svg"
									width={100}
									height={100}
									alt="nft"
								/>
								<Image
									className={styles.trend__collectionsImg}
									src="/img/trendingCollection/magicMushrooms/secondaryMashroom2.svg"
									width={100}
									height={100}
									alt="nft"
								/>
								<div
									className={`${styles.trend__collectionsNumber} ${spaceMono.className}`}
								>
									1025+
								</div>
							</div>
							<h5 className={styles.trend__collectionsTitle}>
								Magic Mushrooms
							</h5>
							<div className={styles.trend__collectionsAuthor}>
								<Image
									className={styles.trend__collectionsIcon}
									src="/icons/usersIcon/shroomieIcon.svg"
									width={24}
									height={24}
									alt="avatar"
								/>
								<div className={styles.trend__collectionsName}>Shroomie</div>
							</div>
						</div>
						<div className={styles.trend__collectionsCol}>
							<Image
								className={styles.trend__collectionsMainImg}
								src="/img/trendingCollection/discoMachines/primaryRobot.svg"
								width={330}
								height={330}
								alt="nft"
							/>
							<div className={styles.trend__collectionsImages}>
								<Image
									className={styles.trend__collectionsImg}
									src="/img/trendingCollection/discoMachines/secondaryRobot1.svg"
									width={100}
									height={100}
									alt="nft"
								/>
								<Image
									className={styles.trend__collectionsImg}
									src="/img/trendingCollection/discoMachines/secondaryRobot2.svg"
									width={100}
									height={100}
									alt="nft"
								/>
								<div
									className={`${styles.trend__collectionsNumber} ${spaceMono.className}`}
								>
									1025+
								</div>
							</div>
							<h5 className={styles.trend__collectionsTitle}>Disco Machines</h5>
							<div className={styles.trend__collectionsAuthor}>
								<Image
									className={styles.trend__collectionsIcon}
									src="/icons/usersIcon/beKind2RobotsIcon.svg"
									width={24}
									height={24}
									alt="avatar"
								/>
								<div className={styles.trend__collectionsName}>
									BeKind2Robots
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
