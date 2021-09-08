require('dotenv').config()

const API_KEY = process.env.REACT_APP_API_KEY

export const fetchData = async () => {
  // Fetch data for 5 day forecast
  // Get data for date, temperature, weather description

  try {
    const list = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => data.list)

    let days = []

    for (let i = 0; i < list.length; i += 8) {
      let temp = { day: '', tem: 0, desc: '', icon: '', main: '' }
      temp.day = new Date(list[i + 5].dt * 1000).toLocaleString('gb', {
        weekday: 'long',
      })
      temp.tem = list[i].main.temp
      temp.desc = list[i + 3].weather[0].description
      temp.icon = list[i].weather[0].icon
      temp.main = list[i + 3].weather[0].main
      days.push(temp)
    }

    return days
  } catch (error) {
    console.log(error)
  }
}

export const fetchToday = async () => {
  // Fetch weather data for today
  // Get date, description
  try {
    const { dt, main, weather, name } = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => data)

    let newObj = { day: '', temp: 0, desc: '', icon: '', name: '', main: '' }
    newObj.day = new Date(dt * 1000).toLocaleString('gb', {
      weekday: 'long',
    })
    newObj.temp = main.temp ? parseInt(main.temp) : 0
    newObj.main = weather[0].main
    newObj.desc = weather[0].description
    newObj.icon = weather[0].icon
    newObj.name = name

    return newObj
  } catch (error) {
    console.log(error)
  }
}
