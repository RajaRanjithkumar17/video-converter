import React from 'react'
import './footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  const termsNavigate = () => {
    navigate('/terms')
  }
  return (
    <footer class="footer" role="contentinfo" itemscope itemtype="http://schema.org/WPFooter">
      <div class="footer-container">
        <div
          class="footer-col"
          role="navigation"
          aria-labelledby="quick-nav-heading"
          itemscope
          itemtype="http://schema.org/SiteNavigationElement"
        >
          <ul>
            <li onClick={() => handleNavigate()}>Home</li>
            <li onClick={() => termsNavigate()}>Terms</li>
          </ul>
        </div>

        <div class="clearfix"></div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
