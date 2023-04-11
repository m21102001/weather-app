const API_KEY = 'd94bcd435b62a031771c35633f9f310a'
// const API_KEY = '3225c117494d1fcc28d9e4369317da99'
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily"

// export const coordinates = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`

export const weatherForecast = (loc) => `${URL}?q=${loc}&units=metric&cnt=7&appid=${API_KEY}`