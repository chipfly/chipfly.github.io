import { createContext, useContext } from 'react'

export const UserContext = createContext(null)

// user hook
export const useUser = () => {
  const user = useContext(UserContext)
  return { user }
}
