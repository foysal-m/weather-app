import React, { useState, useEffect } from 'react'

import WeatherCard from '../WeatherCard/WeatherCard'
import { fetchData } from '../../services/api'
import { fetchToday } from '../../services/api'

import '../../index.css'

export const WeatherContext = React.createContext(null)

function App() {
  const [list, setList] = useState([])
  const [today, setToday] = useState({})
  const [timer, setTimer] = useState(0)
  const [error, setError] = useState('')
  const [style, setStyle] = useState('')

  useEffect(() => {
    fetchData()
      .then((res) => {
        return res
      })
      .then((data) => setList(data))
      .catch((err) => {
        setError(err.message)
      })
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
  if (!error) {
    return (
      <div className="App">
        <WeatherContext.Provider
          value={{
            list,
            today,
            setList,
            setToday,
            setStyle,
            animateTemp,
            timer,
            setTimer,
          }}
        >
          <WeatherCard />
        </WeatherContext.Provider>
      </div>
    )
  } else {
    return <h1>{error}</h1>
  }
}

export default App
