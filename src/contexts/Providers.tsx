import PageRouterProvider from "./PageRouterProvider"
import UserProvider from "./UserProvider"

interface Props extends React.PropsWithChildren {}

export default function Providers({ children }: Props) {
  return (
    <PageRouterProvider>
      <UserProvider>{children}</UserProvider>
    </PageRouterProvider>
  )
}
