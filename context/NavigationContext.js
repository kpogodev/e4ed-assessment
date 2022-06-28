import { createContext, useState } from 'react'

const NavigationContext = createContext()

export const NavigationProvider = ({ children, navlist }) => {
  const [navigation] = useState(navlist)
  return <NavigationContext.Provider value={navigation}>{children}</NavigationContext.Provider>
}

export default NavigationContext
