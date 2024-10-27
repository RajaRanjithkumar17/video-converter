import React from 'react'
import logo from '../../assets/images/logo_flat_110_borderless.png'
import './header.css'
import { useNavigate } from 'react-router-dom'

const Navigator = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  return (
    <div className="header">
      <div className="header_container">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
          <ul className="pl-4">
            <li onClick={() => handleNavigate()}>Video Converter</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigator
