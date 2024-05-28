import { Space_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Mushrooms.module.scss'

const spaceMono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
})

export default function MushroomsSection() {
	return (
		<section className={styles.mushrooms}>
			<div className={styles.container}>
				<div className={styles.mushrooms__inner}>
					<Link className={styles.mushrooms__author} href="/">
						<Image
							className={styles.mushrooms__img}
							src="/icons/usersIcon/shroomieIcon.svg"
							width={24}
							height={24}
							alt="avatar"
						/>
						<div className={styles.mushrooms__name}>Shroomie</div>
					</Link>
					<div className={styles.mushrooms__info}>
						<div className={styles.mushrooms__col}>
							<h3 className={styles.mushrooms__title}>Magic Mushrooms</h3>
							<Link className={styles.mushrooms__btn} href="/">
								<Image
									className={styles.mushrooms__btnIcon}
									src="/icons/eyePurpleIcon.svg"
									width={24}
									height={24}
									alt="avatar"
								/>
								<div>See NFT</div>
							</Link>
						</div>
						<div
							className={`${spaceMono.className} ${styles.mushrooms__timer}`}
						>
							<div className={styles.mushrooms__timerTitle}>
								Auction ends in:
							</div>
							<div className={styles.mushrooms__timerTime}>
								<div className={styles.mushrooms__timerCol}>
									<div className={styles.mushrooms__timerNum}>59</div>
									<div className={styles.mushrooms__timerSubTitle}>Hours</div>
								</div>
								<div className={styles.mushrooms__timerSeparator}>:</div>
								<div className={styles.mushrooms__timerCol}>
									<div className={styles.mushrooms__timerNum}>59</div>
									<div className={styles.mushrooms__timerSubTitle}>Minutes</div>
								</div>
								<div className={styles.mushrooms__timerSeparator}>:</div>
								<div className={styles.mushrooms__timerCol}>
									<div className={styles.mushrooms__timerNum}>59</div>
									<div className={styles.mushrooms__timerSubTitle}>Seconds</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
