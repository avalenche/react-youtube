import styles from "./Main.module.scss"
import { Video } from './Video'
export const Main = () => {
  return (
    <main className={styles.wrapperContainer}>
      <Video />
      <section className={styles.videoInfo}>
        <p>text</p>
      </section>
    </main>
  )
} 