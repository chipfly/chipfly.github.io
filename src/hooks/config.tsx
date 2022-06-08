import { createContext, useContext } from 'react'

export const GlobalConfigContext = createContext(null)

// user hook
export const useGlobalConfig = () => {
  const globalConfig = useContext(GlobalConfigContext)
  return { globalConfig }
}
