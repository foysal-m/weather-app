import React, { useState, useEffect } from 'react'

const ProgressBar = () => {
  const [time, setTime] = useState(0)
  const [style, setStyle] = useState({})
  const timeLeft = 60 - time

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevProgress) => (prevProgress >= 60 ? 0 : prevProgress + 1))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${time}%`,
    }

    setStyle(newStyle)
  }, 200)

  return (
    <div>
      <p>Reloading in {`${Math.round(timeLeft)}`}s</p>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </div>
  )
}

export default ProgressBar
