interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}

import styles from "./Label.module.css"
export default function Label({children, className, ...props}: Props) {
  return (
    <label className={`${styles.base} ${className}`} {...props}>{children}</label>
  )
}