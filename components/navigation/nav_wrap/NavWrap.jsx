import React from 'react'
import useMediaQuery from 'hooks/useMediaQuery'
import NavDesktop from 'components/navigation/nav_desktop/NavDesktop'
import NavMobile from 'components/navigation/nav_mobile/NavMobile'
import styles from './NavWrap.module.css'
import NavSearch from 'components/navigation/nav_search/NavSearch'

const NavWrap = () => {
  const { matches } = useMediaQuery('(max-width: 1320px)')
  return (
    <div className={styles.container}>
      {matches ? (
        <>
          <NavSearch />
          <NavMobile withHomeBtn />
        </>
      ) : (
        <>
          <NavDesktop withHomeBtn />
          <NavSearch />
        </>
      )}
    </div>
  )
}

export default NavWrap
