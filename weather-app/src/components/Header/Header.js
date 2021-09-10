import React, { useContext } from 'react'
import moment from 'moment'

import { WeatherContext } from '../App/App'
import LinearWithValueLabel from '../ProgressBar/LinearWithValueLabel'

import '../../index.css'

function Header() {
  const { today } = useContext(WeatherContext)
  const date = new Date()
  return (
    <React.Fragment>
      {today !== undefined && (
        <div className="header-with-bar">
          <div className="header">
            <div className="name-date">
              <h3 className="location">{today.name}</h3>
              <div className="real-time">
                <React.Fragment>
                  <span className="dot dot--basic"></span>
                  <span className="dot dot--delayed"></span>
                  <span className="dot dot--once"></span>
                </React.Fragment>
                <div className="date">{moment(date).format('h:mm')} GMT</div>
                <React.Fragment>
                  <span className="dot dot--choppy"></span>
                  <span className="dot dot--pulse"></span>
                  <span className="dot dot--basic"></span>
                </React.Fragment>
              </div>
            </div>
            <h3>{Math.floor(today.temp) + '°'}</h3>
          </div>
          <div className="bar">
            <LinearWithValueLabel />
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Header
