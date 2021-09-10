import React, { useContext } from 'react'
import { WeatherContext } from '../App/App'

import getIcon from '../../services/icon'
import './DayWeather.css'

function DayWeather({ days }) {
  const { animateTemp } = useContext(WeatherContext)

  return (
    <div className="card">
      <div className="day-celcius">
        <h3 className="day">{days.day ? days.day.slice(0, 3) : ''}</h3>
        <h3 className={animateTemp() || 'basic'}>
          {Math.floor(days.tem) + '°'}
        </h3>
      </div>
      <div className="img-card">
        <img src={getIcon(days)} alt="" className="w-icon" />
        <h3 className="icon-desc">{days.desc}</h3>
      </div>
    </div>
  )
}

export default DayWeather
