import { VideoCard } from '../../Components/VideoCard'
import styles from "./VideoCardSection.module.scss"
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr)
export const VideoCardSection = () => {
  return (
    <section className={styles.videoCardSection}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Next</h2>
        <div className={styles.autoplayControl}>
          <span className={styles.autoplayLabel}>AUTOPLAY</span>
          <label className={styles.switch}>
            <input type="checkbox" defaultChecked />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
      <div className={styles.videoCardContainer}>
        {arr.map((el) => {
          console.log("map", el.length)
          return (
            <VideoCard />
          )
        })}
      </div>

    </section>
  )
}