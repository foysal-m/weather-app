import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { fetchData, fetchToday } from '../../services/api'
import { WeatherContext } from '../App/App'

function LinearProgressWithLabel(props) {
  const timeLeft = 60 - props.timer
  return (
    <Box
      display="flex"
      alignItems="left"
      flexDirection="column"
      justifyContent="left"
    >
      <Box minWidth={35} color="#999a9c">
        <Typography variant="body2" color={useStyles.colorPrimary}>
          {' '}
          Reloading in {`${Math.round(timeLeft)}`}s
        </Typography>
      </Box>
      <Box width="100%" mr={1} justifyContent="left">
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
}

const useStyles = makeStyles({
  root: {
    '& .MuiLinearProgress-colorPrimary': {
      backgroundColor: 'rgba(50,50,60,255)',
      height: '20px',
      borderRadius: '10px',
      width: '920px',
    },
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: '#f49c07',
      height: '20px',
      borderRadius: '10px',
      border: 'rgba(43, 46, 53, 255)',
      width: '920px',
    },
  },
})

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(0)

  const { setList, setToday, setStyle, setTimer, timer } =
    useContext(WeatherContext)

  const classes = useStyles()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 1.7,
      )
      setTimer((prevTimer) => (prevTimer >= 60 ? 0 : prevTimer + 1))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [setTimer])

  useEffect(() => {
    if (timer === 60) {
      fetchData()
        .then((res) => res)
        .then((data) => setList(data))

      fetchToday()
        .then((res) => res)
        .then((data) => setToday(data))
      setStyle('animate-temp')
    }
  }, [timer === 60])

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} timer={timer} />
    </div>
  )
}
