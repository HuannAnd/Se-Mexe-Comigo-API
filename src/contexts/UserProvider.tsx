import { createContext } from "react";
import IUser from "../common/interfaces/User"

const UserContext = createContext<IUser | null>({} as IUser)

interface Props extends React.PropsWithChildren {}
export default function UserProvider({children}: Props) {
  // const user: IUser;

  return (
    <UserContext.Provider value={null}>
      {children}
    </UserContext.Provider>
  )
}