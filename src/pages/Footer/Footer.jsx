import styles from "./Footer.module.scss"
export const Footer = () => {
  return (
    <footer className={styles.sidebar}>
      <nav className={styles.mainNavigation}>
        <ul className={styles.mainNavigationListPrimary}>
          <li>
            <a className={styles.mainNavigationHome} href="#"
            ><img
                className={styles.iconNavigation}
                src="icons/home-icon.svg"
                alt="Home Icon"
              /><span>Home</span>
            </a>
          </li>
          <li>
            <a href="#"
            ><img
                className={styles.iconNavigation}
                src="icons/trending-icon.svg"
                alt="Trending Icon"
              /><span>Trending</span></a
            >
          </li>
          <li>
            <a href="#"
            ><img
                className={styles.iconNavigation}
                src="icons/subscriptions-icon.svg"
                alt="Subscriptions Icon"
              /><span>Subscriptions</span></a
            >
          </li>
          <li>
            <a href="#"
            ><img
                className={styles.iconNavigation}
                src="icons/library-icon.svg"
                alt="Library Icon"
              /><span>Library</span></a
            >
          </li>
        </ul>
      </nav>
    </footer>
  )
}