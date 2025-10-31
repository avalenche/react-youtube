import { VideoCard } from '../../Components/VideoCard'
import styles from "./VideoCardSection.module.scss"

const messages = [{
  src: "images/baby-monitor.png",
  duration: "7:36",
  title: "Baby Monitor Technology",
  view: "123k views",
  author: "Dollie Blair"
},
{
  src: "images/good-autoresponder.png",
  duration: "2:19",
  title: "A Good Autoresponder",
  view: "123k views",
  author: "Dollie Blair"
},
{
  src: "images/right-hotel.png",
  duration: "8:00",
  title: "Selecting The Right Hotel",
  view: "123k views",
  author: "Dollie Blair"
},
{
  src: "images/select-right.png",
  duration: "8:00",
  title: "Select right",
  view: "123k views",
  author: "Dollie Blair"
}]
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
        {messages.map((el) => {
          return (
            <VideoCard messages={el} key={el.title} />
          )
        })}
      </div>

    </section>
  )
}