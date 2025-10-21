import cn from 'classnames'
import styles from "./Header.module.scss"
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeftSection}>
        <button className={styles.headerBurgerMenuButton}>
          <img src="/icons/burger-menu-icon.svg" alt="Menu Icon" />
        </button>
        <a className={styles.headerLeftSectionLogo} href="./index.html">
          <img src="/icons/youtube-logo-black-icon.svg" alt="YouTube Logo" />
        </a>
      </div>
      <div className={styles.headerCenterSection}>
        <input
          id="search-bar"
          name="search-bar"
          className={styles.searchBar}
          type="text"
          placeholder="Search"
        />
        <button className={styles.searchButton}>
          <img src="/icons/search-icon.svg" alt="Search Icon" />
        </button>
      </div>
      <div className={styles.headerRightSection}>
        <button className={styles.headerRightSectionButton}>
          <img src="/icons/upload-icon.svg" alt="Upload Icon" />
        </button>
        <button className={styles.headerRightSectionButton}>
          <img src="/icons/youtube-apps-icon.svg" alt="Apps Icon" />
        </button>
        <button
          className={cn(styles.headerRightSectionButton, styles.notificationsIconContainer)}
        >
          <img src="/icons/notifications-icon.svg" alt="Notifications Icon" />
          <div className={styles.notificationsCounter}>3</div>
        </button>
        <button className={cn(styles.headerRightSectionButton, styles.profileButton)}>
          <img
            className={styles.userProfile}
            src="/images/current-user-picture.png"
            alt="Profile Icon"
          />
        </button>
      </div >
    </header >
  )
}