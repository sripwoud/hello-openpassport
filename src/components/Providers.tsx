'use client'
import { StoreProvider } from 'easy-peasy'
import { store } from 'l/store'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
  <StoreProvider store={store}>
    {children}
  </StoreProvider>
)
