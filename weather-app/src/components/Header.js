import React, { useContext } from 'react'
import moment from 'moment'
import { WeatherContext } from '../App'
import LinearWithValueLabel from './LinearWithValueLabel'

function Header() {
  const { today } = useContext(WeatherContext)
  const date = new Date()
  return (
    <div>
      {today !== undefined && (
        <div className="header-with-bar">
          <div className="header">
            <h3>{today.name}</h3>
            <div className="real-time">{moment(date).format('h:mm')} GMT </div>
            <h3>{Math.floor(today.temp) + '°'}</h3>
            <div>
              <LinearWithValueLabel />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
