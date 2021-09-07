import React, { useContext } from 'react'
import { WeatherContext } from '../App'

function Header() {
  const { today } = useContext(WeatherContext)
  return (
    <div>
      {today !== undefined && (
        <div>
          <h3>{today.name}</h3>
          <h3>{Math.floor(today.temp) + '°'}</h3>
        </div>
      )}
    </div>
  )
}

export default Header
