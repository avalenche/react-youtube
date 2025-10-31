import ReactPlayer from "react-player"
import { useIsSmallScreen } from "../../../hooks/useSmallScreen"
import styles from "./Video.module.scss"
const messagesButton = [
  {
    id: 1,
    title: "123k",
    href: "/icons/like-icon.svg",
  },
  {
    id: 2,
    title: "435k",
    href: "/icons/dislike-icon.svg",
  },
  {
    id: 3,
    title: "Share",
    href: "/icons/share-icon.svg",
  },
  {
    id: 4,
    title: null,
    href: "/icons/more-icon.svg",
  },
]


export const Video = () => {
  const isSmall = useIsSmallScreen()
  const smallSize = {
    width: "100%",
    height: "auto",
    aspectRatio: 16 / 9,
    borderRadius: 0,
    overflow: "hidden"
  }
  const largeSize = {
    width: "100%",
    height: "auto",
    aspectRatio: 1363 / 700,
    borderRadius: "14px",
    overflow: "hidden"
  }
  const stylePlayer = isSmall ? smallSize : largeSize
  return (
    <section className={styles.videoSection}>
      <ReactPlayer src='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls style={stylePlayer} />
      <div className={styles.videoSectionInfo}>
        <div className={styles.videoSectionInfoContainer}>
          <h1 className={styles.title}>Dude You Re Getting <span>A Telescope</span></h1>

          <button class={styles.buttonShowMore}>
            <img src="/icons/down-arrow.svg" alt="Icon down" />
          </button>
        </div>
        <p className={styles.videoSectionInfoViews}>123k views</p>

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

    </section >
  )
}