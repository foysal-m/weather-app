import React, { useState, useEffect } from 'react'

import WeatherCard from './components/WeatherCard'
import { fetchData } from './api'
import { fetchToday } from './api'
import LinearWithValueLabel from './components/LinearWithValueLabel'
import ProgressBar from './components/ProgressBar'

export const WeatherContext = React.createContext(null)

function App() {
  const [list, setList] = useState([])
  const [today, setToday] = useState({})

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

  // const [timer, setTimer] = useState(0)
  // const tick = () => {
  //   if (timer < 60) setTimer((pre) => pre + 1)
  //   else if (timer === 60) setTimer(0)
  // }

  // useEffect(() => {
  //   const time = setInterval(tick, 1000)
  //   return () => {
  //     clearInterval(time)
  //   }
  // }, [])

  return (
    <div className="App">
      <WeatherContext.Provider
        value={{
          list,
          today,
        }}
      >
        <WeatherCard />
      </WeatherContext.Provider>
    </div>
  )
}

export default App
