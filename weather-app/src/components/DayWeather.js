import React from 'react'
import moment from 'moment'

function DayWeather({ days }) {
  return (
    <div className="card">
      <h3>{moment(days.day).format('ddd')}</h3>
      <h3>{Math.floor(days.tem) + '°'}</h3>
      <h3>{days.desc}</h3>
    </div>
  )
}

export default DayWeather
