import { InfoSection } from './InfoSection'
import { Video } from './Video'
import { VideoCardSection } from './VideoCardSection'
import styles from "./Main.module.scss"

export const Main = () => {
  return (
    <main className={styles.wrapperContainer}>
      <Video />
      <VideoCardSection />
      <InfoSection />
    </main>
  )
} 