import React from 'react'

const Maintenance = () => {
  return (
    <div style={containerStyle}>
      <svg style={svgStyle}>
        <use href='#svg-maintenance' />
      </svg>
      <p style={textStyle}>This page has not been built yet...</p>
    </div>
  )
}

const containerStyle = {
  display: 'flex',
  minHeight: '60vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  width: '100%',
  padding: '4rem 2.5vw',
}

const svgStyle = {
  width: '100%',
  height: '20vw',
}

const textStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
}

export default Maintenance
