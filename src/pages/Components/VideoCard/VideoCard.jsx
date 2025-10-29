import styles from "./VideoCard.module.scss"
export const VideoCard = () => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoThumbnailContainer}>
        <img
          className={styles.videoThumbnail}
          src="images/food-drink.png"
          alt="Video Thumbnail"
        />
        <div className={styles.videoDuration}>8:00</div>
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.videoTitle}> Baby Monitor Technology</h3>
        <div className={styles.channelInfo}>
          <p className={styles.videoStats}>
            123k views
          </p>
          <p className={styles.author}>Dollie Blair</p>
        </div>
      </div>
    </div >
  )
}