'use client'
import { createContext, useContext } from 'react'
import RootStore from '@/Stores/RootStore'

export const RootStoreContext = createContext({} as RootStore)

interface RootProviderProps {
  children: React.ReactNode
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={ new RootStore }>
      { children }
    </RootStoreContext.Provider>
  )
}

export default RootProvider

export const useRootStore = (): RootStore => {
  const rootStore = useContext(RootStoreContext)
  if (!rootStore) {
    throw new Error('');
  }
  return rootStore
}

/* 'use client'
import { createContext } from 'react'
import RootStore from '@/Stores/RootStore'

export const RootStoreContext = createContext({} as RootStore)

interface RootProviderProps {
  children: React.ReactNode
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <RootStoreContext.Provider value={ new RootStore }>
      { children }
    </RootStoreContext.Provider>
  )
}

export default RootProvider */