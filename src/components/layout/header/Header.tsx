import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.scss'

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.header__inner}>
				<Link href="/">
					<Image src="/img/logo.svg" width={244} height={32} alt="logo" />
				</Link>
				<nav>
					<ul className={styles.header__menu}>
						<li className={styles.header__menuItem}>
							<Link href="/">Marketplace</Link>
						</li>
						<li className={styles.header__menuItem}>
							<Link href="/">Rankings</Link>
						</li>
						<li className={styles.header__menuItem}>
							<Link href="/">Connect a wallet</Link>
						</li>
						<li className={styles.header__menuItem}>
							<Link href="/">
								<Image
									src="/icons/userIcon.svg"
									width={20}
									height={20}
									alt="user icon"
								/>
								<div className={styles.header__button}>Sign Up</div>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
