import React, { useContext } from 'react'
import moment from 'moment'
import { WeatherContext } from '../App/App'
import LinearWithValueLabel from '../ProgressBar/LinearWithValueLabel'

function Header() {
  const { today } = useContext(WeatherContext)
  const date = new Date()
  return (
    <div>
      {today !== undefined && (
        <div className="header-with-bar">
          <div className="header">
            <div className="name-date">
              <h3 className="location">{today.name}</h3>
              <div className="real-time">
                <span className="dot dot--basic"></span>
                <span className="dot dot--delayed"></span>
                <span className="dot dot--once"></span>
                {moment(date).format('h:mm')} GMT
                <span className="dot dot--choppy"></span>
                <span className="dot dot--pulse"></span>
                <span className="dot dot-basic"></span>
              </div>
            </div>
            <h3>{Math.floor(today.temp) + '°'}</h3>
          </div>
          <div className="bar">
            <LinearWithValueLabel />
          </div>
        </div>
      )}
    </div>
  )
}

export default Header