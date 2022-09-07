import { Outlet } from 'react-router-dom'

import { NavBar } from '../../components/NavBar'

import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <NavBar />
      <Outlet />
    </LayoutContainer>
  )
}
