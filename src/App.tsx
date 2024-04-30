import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "@/pages/Profile/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={ProfilePage} path="/profile" />
        <Route Component={null} path="/home" />
      </Routes>
    </BrowserRouter>
  )
}
