import styles from "./Button.module.scss"
export const Button = ({ children, style }) => {
  // const elem = style;
  return (
    <button className={styles[style]}>{children}</button>
  )
}