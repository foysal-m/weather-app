import React, { useContext } from 'react'
import { WeatherContext } from '../App/App'

import DayWeather from '../DayWeather/DayWeather'
import Header from '../Header/Header'
import Today from '../Today/Today'

function WeatherCard() {
  const { list } = useContext(WeatherContext)

  return (
    <React.Fragment>
      <Header />
      <Today />
      <React.Fragment>
        {list.length &&
          list.map((days, index) => <DayWeather days={days} key={index} />)}
      </React.Fragment>
    </React.Fragment>
  )
}

export default WeatherCard
