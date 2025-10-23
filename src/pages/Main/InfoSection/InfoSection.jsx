import styles from "./InfoSection.module.scss"
export const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoSectionTextContainer}>
        <div className={styles.videoAuthorIcon}><img src="/images/food-drink.png" alt="Logo" /></div>
        <div >
          <h2 className={styles.title}>Food & Drink</h2>
          <p className={styles.publish}>Published on 14 Jun 2019</p>
          <p className={styles.subscribed}>Published on 14 Jun 2019</p>
          <p className={styles.infoText}>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
          <button className={styles.moreButton}>Show more</button>
        </div>

      </div>
      <div>
        <button className={styles.subscribeButton}>Subscribe 2.3m</button>
      </div>
    </section>
  )
}