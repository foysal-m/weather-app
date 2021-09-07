import React, { useState, useEffect } from 'react'

import WeatherCard from './components/WeatherCard'
import { fetchData } from './api'
import { fetchToday } from './api'

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
