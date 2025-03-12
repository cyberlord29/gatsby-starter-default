import React, { useState } from 'react'
import { Link } from 'gatsby'

const NavLink = ({ to, children, hasDropdown }) => (
  <Link
    to={to}
    style={{
      color: 'white',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      padding: '8px 12px',
      borderRadius: '4px',
      transition: 'background-color 0.2s ease',
    }}
    activeStyle={{
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    }}
  >
    {children}
    {hasDropdown && (
      <svg 
        width="12" 
        height="12" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        style={{ marginLeft: '4px', opacity: 0.7 }}
      >
        <path d="M7 10l5 5 5-5z"/>
      </svg>
    )}
  </Link>
)

const ModernHeader = ({ siteTitle }) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <header
      style={{
        backgroundColor: '#0A1628',
        padding: '0 5%',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1400px',
          margin: '0 auto',
          height: '80px',
        }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* <img 
            src="/logo.svg" 
            alt={siteTitle}
            style={{ height: '32px', marginRight: '12px' }}
          /> */}
          {siteTitle}
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <NavLink to="/about">About</NavLink>
            
            <div 
              onMouseEnter={() => setHoveredItem('services')}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative' }}
            >
              <NavLink to="/services" hasDropdown>Services</NavLink>
            </div>

            <div
              onMouseEnter={() => setHoveredItem('solutions')}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative' }}
            >
              <NavLink to="/solutions" hasDropdown>Solutions</NavLink>
            </div>

            <div
              onMouseEnter={() => setHoveredItem('industries')}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative' }}
            >
              <NavLink to="/industries" hasDropdown>Industries</NavLink>
            </div>

            <NavLink to="/use-cases">Use Cases</NavLink>

            <div
              onMouseEnter={() => setHoveredItem('success-stories')}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ position: 'relative' }}
            >
              <NavLink to="/success-stories" hasDropdown>Success Stories</NavLink>
            </div>

            <NavLink to="/blog">Blog</NavLink>
          </div>

          <Link
            to="/contact"
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              padding: '10px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              display: 'inline-block',
              border: '1px solid transparent',
            }}
            activeStyle={{
              backgroundColor: '#2563EB',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563EB'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3B82F6'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default ModernHeader 