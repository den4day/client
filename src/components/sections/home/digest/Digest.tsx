import Image from 'next/image'
import Link from 'next/link'
import styles from './Digest.module.scss'

export default function DigestSection() {
	return (
		<section className={styles.digest}>
			<div className={styles.container}>
				<div className={styles.digest__inner}>
					<Image
						className={styles.digest__img}
						src="/img/digest.svg"
						width={425}
						height={310}
						alt="digest"
					/>
					<div>
						<h2 className={styles.digest__title}>Join Our Weekly Digest</h2>
						<h6 className={styles.digest__text}>
							Get Exclusive Promotions & Updates Straight To Your Inbox.
						</h6>
						<form className={styles.digest__form} action="">
							<input
								className={styles.digest__formInput}
								type="text"
								placeholder="Enter your email here"
							/>
							<Link className={styles.digest__formButton} href="/">
								<Image
									className={styles.digest__formIcon}
									src="/icons/messageIcon.svg"
									width={20}
									height={20}
									alt="message"
								/>
								<div className={styles.digest__formText}>Subscribe</div>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
