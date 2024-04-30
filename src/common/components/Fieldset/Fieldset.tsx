import styles from "./Fieldset.module.css"

interface Props extends React.HTMLAttributes<HTMLFieldSetElement> {
  type: "input" | "checkbox",
}

export default function Fieldset({
  children,
  className,
  type,
  ...props
}:  Props) {
  return (
    <fieldset data-fielset-type={type} className={`${styles.base} ${className}`} {...props}>
      {children}
    </fieldset>
  )
}