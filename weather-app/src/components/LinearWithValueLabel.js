import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { fetchData, fetchToday } from '../api'
import { WeatherContext } from '../App'

function LinearProgressWithLabel(props) {
  const timeLeft = 60 - props.value
  return (
    <Box display="flex" alignItems="center" flexDirection="column" width="50%">
      <Box minWidth={35} color="#999a9c">
        <Typography variant="body2" color={useStyles.colorPrimary}>
          {' '}
          Reloading in {`${Math.round(timeLeft)}`}s
        </Typography>
      </Box>
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
}

const useStyles = makeStyles({
  root: {
    '& .MuiLinearProgress-colorPrimary': {
      backgroundColor: '#32353c',
    },
    '& .MuiLinearProgress-barColorPrimary': {
      backgroundColor: '#f49c07',
    },
    width: '95%',
    height: 10,
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 20,
  },
})

export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(0)
  const { setList, setToday } = useContext(WeatherContext)

  const classes = useStyles()

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 60 ? 0 : prevProgress + 1))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // useEffect(() => {
  //   if (progress === 60) {
  //     fetchData()
  //       .then((res) => res)
  //       .then((data) => setList(data))

  //     fetchToday()
  //       .then((res) => res)
  //       .then((data) => setToday(data))
  //   }
  // }, [progress === 60])

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  )
}
