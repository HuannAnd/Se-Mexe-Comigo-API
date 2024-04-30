import { BrowserRouter, Route, Routes } from "react-router-dom"

import ProfilePage from "@/pages/Profile/ProfilePage"

interface Props extends React.PropsWithChildren {}
export default function PageRouterProvider({ children }: Props) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route Component={ProfilePage} path="/profile" />
        <Route Component={ProfilePage} path="/profile" />
      </Routes>
    </BrowserRouter>
  )
}
