import Image from 'next/image'
import Link from 'next/link'
import styles from './Crategories.module.scss'

export default function CategoriesSection() {
	return (
		<section className={styles.categories}>
			<div className={styles.container}>
				<div className={styles.categories__inner}>
					<h2 className={styles.categories__title}>Browse Categories</h2>
					<div className={styles.categories__grid}>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/artBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/artIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Art</h5>
						</Link>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/collectiblesBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/collectiblesIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Collectibles</h5>
						</Link>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/musicBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/musicIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Music</h5>
						</Link>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/photographyBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/photographyIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Photography</h5>
						</Link>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/videoBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/videoIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Video</h5>
						</Link>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/utilityBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/utilityIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Utility</h5>
						</Link>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/sportBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/sportIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Sport</h5>
						</Link>
						<Link className={styles.categories__card} href="/">
							<Image
								src="/img/categories/bg/virtualWorldsBg.svg"
								width={240}
								height={240}
								alt="art"
							/>
							<div className={styles.categories__cardWrap}>
								<Image
									className={styles.categories__cardImg}
									src="/img/categories/icons/virtualWorldsIcon.svg"
									width={100}
									height={100}
									alt="art"
								/>
							</div>
							<h5 className={styles.categories__cardTitle}>Virtual Worlds</h5>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
