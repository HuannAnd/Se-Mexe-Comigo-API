import styles from "./Input.module.css"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({className, ...props}: Props){
  return (
    <input type="text" className={`${styles.base} ${className}`} {...props}/>
  )
}