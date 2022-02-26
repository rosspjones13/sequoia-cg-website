import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import TitleBar from '../TitleBar/TitleBar'
import SiteMap from '../SiteMap/SiteMap'

const Layout = () => {

  return (
    <Fragment>
      <TitleBar active="home"/>
        <Outlet />
      <SiteMap />
    </Fragment>
  )
}

export default Layout;