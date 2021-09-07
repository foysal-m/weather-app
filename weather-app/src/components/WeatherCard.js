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
      {list.length &&
        list.map((day, index) => <DayWeather day={day} key={index} />)}
    </div>
  )
}

export default WeatherCard
