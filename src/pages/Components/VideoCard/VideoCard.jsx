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
        <div className={styles.videoDuration}>4:15</div>
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.videoTitle}>A Brief History Of Creation</h3>
        <div className={styles.channelInfo}>
          <p className={styles.videoStats}>
            80k views <span>&#8226;</span> 3 days ago
          </p>
          <p className={styles.author}>Dollie Blair</p>
        </div>
      </div>
    </div>
  )
}