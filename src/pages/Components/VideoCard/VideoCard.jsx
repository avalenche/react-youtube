import styles from "./VideoCard.module.scss"
export const VideoCard = ({ messages }) => {
  const { src, duration, title, view, author } = messages

  return (
    <div className={styles.videoCard}>
      <div className={styles.videoThumbnailContainer}>
        <img
          className={styles.videoThumbnail}
          src={src}
          alt="Video Thumbnail"
        />
        <div className={styles.videoDuration}>{duration}</div>
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.videoTitle}>{title}</h3>
        <div className={styles.channelInfo}>
          <p className={styles.videoStats}>
            {view}
          </p>
          <p className={styles.author}>{author}</p>
        </div>
      </div>
    </div >
  )
}