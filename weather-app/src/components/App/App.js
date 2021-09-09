import React, { useState, useEffect } from 'react'

import WeatherCard from '../WeatherCard/WeatherCard'
import { fetchData } from '../../services/api'
import { fetchToday } from '../../services/api'

export const WeatherContext = React.createContext(null)

function App() {
  const [list, setList] = useState([])
  const [today, setToday] = useState({})
  const [error, setError] = useState(null)
  const [style, setStyle] = useState('')
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    fetchData()
      .then((res) => res)
      .then((data) => setList(data))
  }, [])

  useEffect(() => {
    fetchToday()
      .then((res) => res)
      .then((data) => setToday(data))
  }, [])

  function animateTemp() {
    if (style === 'animate-temp' && timer === 60) {
      return 'animate-temp'
    } else if (timer >= 5) {
      return ''
    }
  }

  return (
    <div className="App">
      <WeatherContext.Provider
        value={{
          list,
          today,
          setList,
          setToday,
          setStyle,
          style,
          timer,
          setTimer,
          animateTemp,
        }}
      >
        <WeatherCard />
      </WeatherContext.Provider>
    </div>
  )
}

export default App
