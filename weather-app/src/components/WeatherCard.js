import React, { useContext } from 'react'
import { WeatherContext } from '../App'

import DayWeather from './DayWeather'
import Header from './Header'

function WeatherCard() {
  const { list } = useContext(WeatherContext)

  return (
    <div>
      <Header />
      <div>
        {list.length &&
          list.map((days, index) => <DayWeather days={days} key={index} />)}
      </div>
    </div>
  )
}

export default WeatherCard
