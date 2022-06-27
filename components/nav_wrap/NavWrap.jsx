import React from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import NavDesktop from '../nav_desktop/NavDesktop'
import NavMobile from '../nav_mobile/NavMobile'

const NavWrap = () => {
  const { matches } = useMediaQuery('(max-width: 1024px)')
  return <div>{matches ? <NavMobile /> : <NavDesktop />}</div>
}

export default NavWrap
