const getIcon = (days) => {
  if (days.desc === 'clear sky')
    return 'http://openweathermap.org/img/wn/01d.png'
  else if (days.desc === 'few clouds')
    return 'http://openweathermap.org/img/wn/02d.png'
  else if (days.desc === 'scattered clouds')
    return 'http://openweathermap.org/img/wn/03d.png'
  else if (days.desc === 'broken clouds')
    return 'http://openweathermap.org/img/wn/04d.png'
  else if (days.desc === 'shower rain')
    return 'http://openweathermap.org/img/wn/09d.png'
  else if (days.desc === 'rain')
    return 'http://openweathermap.org/img/wn/10d.png'
  else if (days.desc === 'thunderstorm')
    return 'http://openweathermap.org/img/wn/11d.png'
  else if (days.desc.includes('snow'))
    return 'http://openweathermap.org/img/wn/13d.png'
  else if (days.desc === 'mist')
    return 'http://openweathermap.org/img/wn/50d.png'
  else if (days.desc === 'overcast clouds')
    return 'http://openweathermap.org/img/wn/04d.png'
  else if (days.desc === 'overcast clouds')
    return 'http://openweathermap.org/img/wn/04d.png'
  else if (days.main === 'thunderstorm')
    return 'http://openweathermap.org/img/wn/11d.png'
  else if (days.main === 'drizzle')
    return 'http://openweathermap.org/img/wn/09d.png'
  else if (days.main === 'snow')
    return 'http://openweathermap.org/img/wn/13d.png'
  else if (
    days.main === 'snow' ||
    'smoke' ||
    'haze' ||
    'dust' ||
    'fog' ||
    'sand' ||
    'ash' ||
    'squall' ||
    'tornado'
  )
    return 'http://openweathermap.org/img/wn/50d.png'
  else if (
    days.desc === 'light rain' ||
    'moderate rain' ||
    'heavy intensity rain' ||
    'very heavy rain' ||
    'extreme rain'
  )
    return 'http://openweathermap.org/img/wn/10d.png'
  else if (
    days.desc === 'freezing rain' ||
    'light intensity shower rain' ||
    'shower rain' ||
    'heavy intensity shower rain' ||
    'ragged shower rain'
  )
    return 'http://openweathermap.org/img/wn/9d.png'
  else if (days.desc === 'few clouds')
    return 'http://openweathermap.org/img/wn/02d.png'
  else if (days.desc === 'overcast clouds')
    return 'http://openweathermap.org/img/wn/4d.png'
}

export default getIcon
