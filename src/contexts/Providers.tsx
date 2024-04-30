import UserProvider from "./UserProvider"

interface Props extends React.PropsWithChildren {}

export default function Providers({ children }: Props) {
  return (
      <UserProvider>{children}</UserProvider>
  )
}
