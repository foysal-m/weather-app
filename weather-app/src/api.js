export const fetchData = async () => {
  // Fetch data for 5 day forecast
  // Get data for date, temperature, weather description
  try {
    const list = await fetch(
      'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=cba15a8c1f20d4f5f36d23adf48571ba',
    )
      .then((res) => res.json())
      .then((data) => data.list)

    let days = []
    console.log(list)
    for (let i = 0; i < list.length; i += 8) {
      let temp = []
      temp.push(new Date(list[i + 5].dt_txt))
      temp.push(list[i].main.temp)
      temp.push(list[i + 3].weather[0].description)
      temp.push(list[i].weather[0].icon)
      days.push(temp)
    }

    return days
  } catch (error) {
    console.log(error)
  }
}
