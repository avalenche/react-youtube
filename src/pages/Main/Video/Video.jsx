import ReactPlayer from "react-player"
import styles from "./Video.module.scss"
const messagesButton = [
  {
    id: 1,
    title: "123k",
    href: "/icons/like-icon.svg",
  },
  {
    id: 2,
    title: "453k",
    href: "/icons/dislike-icon.svg",
  },
  {
    id: 3,
    title: "share",
    href: "/icons/share-icon.svg",
  },
  {
    id: 4,
    title: null,
    href: "/icons/more-icon.svg",
  },
]
export const Video = () => {
  return (
    <section className={styles.videoSection}>
      <ReactPlayer src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls style={{ width: "100%", height: "auto", aspectRatio: "16/9" }} />
      <div className={styles.videoSectionInfo}>
        <div>
          <h1 className={styles.title}>Dude You Re Getting A Telescope</h1>
          <p>123k views</p>
        </div>

        <div className={styles.buttonContainer}>
          {messagesButton.map((elem) => {
            return (
              <button key={elem.id}>
                <img src={elem.href} alt='Icon' />
                <span>{elem.title}</span>
              </button>
            )
          })}
        </div>


      </div>

    </section>
  )
}