import styles from "./Checkbox.module.css"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox({className, ...props}: Props){
  return (
    <input type="radio" className={`${styles.base} ${className}`} {...props} />
  )
}