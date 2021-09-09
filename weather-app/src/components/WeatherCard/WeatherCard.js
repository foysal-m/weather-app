import React, { useContext } from 'react'
import { WeatherContext } from '../App/App'

import DayWeather from '../DayWeather/DayWeather'
import Header from '../Header/Header'
import Today from '../Today/Today'

function WeatherCard() {
  const { list } = useContext(WeatherContext)

  return (
    <div>
      <Header />
      <Today />
      <div>
        {list.length &&
          list.map((days, index) => <DayWeather days={days} key={index} />)}
      </div>
    </div>
  )
}

export default WeatherCard
