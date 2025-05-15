import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

export default function 
() {
  return (
    <>
              <div className="flex flex-col gap-0">
                <Header className="px-0" />
                <Outlet/>
              </div>
    </>
  )
}
