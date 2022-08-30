import React from 'react'
import { NavLink } from 'react-router-dom'
import MyNav from './style'

const Navigation = () => {
  return (
    <MyNav>
      <NavLink end to='/'>
        <div className='underline'>Home</div>
      </NavLink>
      <NavLink to='/test'>Test</NavLink>
    </MyNav>
  )
}

export default Navigation
