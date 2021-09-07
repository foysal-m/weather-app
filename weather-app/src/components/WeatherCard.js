import React, { useState, useEffect } from 'react'
import { fetchData } from '../api'
import DayWeather from './DayWeather'

function WeatherCard() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchData()
      .then((res) => res)
      .then((data) => setList(data))
  }, [])

  return (
    <div>
      <h3>London</h3>
      <div></div>
      <div>
        {list.length &&
          list.map((days, index) => <DayWeather days={days} key={index} />)}
      </div>
    </div>
  )
}

export default WeatherCard
