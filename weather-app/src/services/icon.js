const iconUrl = 'http://openweathermap.org/img/wn/'

const getIcon = (days) => {
  if (days.desc === 'clear sky') return `${iconUrl}01d.png`
  else if (days.desc === 'few clouds') return `${iconUrl}02d.png`
  else if (days.desc === 'scattered clouds') return `${iconUrl}03d.png`
  else if (days.desc === 'broken clouds') return `${iconUrl}04d.png`
  else if (days.desc === 'shower rain') return `${iconUrl}09d.png`
  else if (days.desc === 'rain') return `${iconUrl}10d.png`
  else if (days.desc === 'thunderstorm') return `${iconUrl}11d.png`
  else if (days.desc === 'mist') return `${iconUrl}50d.png`
  else if (days.desc === 'overcast clouds') return `${iconUrl}04d.png`
  else if (days.desc === 'overcast clouds') return `${iconUrl}04d.png`
  else if (days.main === 'thunderstorm') return `${iconUrl}11d.png`
  else if (days.main === 'drizzle') return `${iconUrl}09d.png`
  else if (days.main === 'snow') return `${iconUrl}13d.png`
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
    return `${iconUrl}50d.png`
  else if (
    days.desc === 'light rain' ||
    'moderate rain' ||
    'heavy intensity rain' ||
    'very heavy rain' ||
    'extreme rain'
  )
    return `${iconUrl}10d.png`
  else if (
    days.desc === 'freezing rain' ||
    'light intensity shower rain' ||
    'shower rain' ||
    'heavy intensity shower rain' ||
    'ragged shower rain'
  )
    return `${iconUrl}9d.png`
  else if (days.desc === 'few clouds') return `${iconUrl}02d.png`
  else if (days.desc === 'overcast clouds') return `${iconUrl}4d.png`
}

export default getIcon
