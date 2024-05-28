import Image from 'next/image'
import styles from './Faq.module.scss'

export default function FaqSection() {
	return (
		<section className={styles.faq}>
			<div className={styles.container}>
				<h2 className={styles.faq__title}>How it works</h2>
				<h6 className={styles.faq__text}>Find out how to get started</h6>
				<ul className={styles.faq__cards}>
					<li className={styles.faq__card}>
						<Image
							className={styles.faq__cardImg}
							src="/img/faq/wallet.svg"
							width={250}
							height={250}
							alt="wallet"
						/>
						<h5 className={styles.faq__cardTitle}>Setup Your wallet</h5>
						<div className={styles.faq__cardText}>
							Set up your wallet of choice. Connect it to the Animarket by
							clicking the wallet icon in the top right corner.
						</div>
					</li>
					<li className={styles.faq__card}>
						<Image
							className={styles.faq__cardImg}
							src="/img/faq/collection.svg"
							width={250}
							height={250}
							alt="wallet"
						/>
						<h5 className={styles.faq__cardTitle}>Create Collection</h5>
						<div className={styles.faq__cardText}>
							Upload your work and setup your collection. Add a description,
							social links and floor price.
						</div>
					</li>
					<li className={styles.faq__card}>
						<Image
							className={styles.faq__cardImg}
							src="/img/faq/earn.svg"
							width={250}
							height={250}
							alt="wallet"
						/>
						<h5 className={styles.faq__cardTitle}>Start Earning</h5>
						<div className={styles.faq__cardText}>
							Choose between auctions and fixed-price listings. Start earning by
							selling your NFTs or trading others.
						</div>
					</li>
				</ul>
			</div>
		</section>
	)
}
