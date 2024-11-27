import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'

export const MainLayout = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

