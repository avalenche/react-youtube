import styles from "./Button.module.scss"
export const Button = ({ children, style }) => {
  return (
    <button className={styles[style]}>{children}</button>
  )
}