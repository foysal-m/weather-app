import React from 'react'
import moment from 'moment'
import getIcon from '../icon'

function DayWeather({ days }) {
  return (
    <div className="card">
      <h3>{moment(days.day).format('ddd')}</h3>
      <h3>{Math.floor(days.tem) + '°'}</h3>
      <div className="img-card">
        <img src={getIcon(days)} alt="" className="w-icon" />
        <h3>{days.desc}</h3>
      </div>
    </div>
  )
}

export default DayWeather
