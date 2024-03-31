import { DateTime } from "luxon";

const API_KEY = "6AeJM6Co7HM6jJ4RTRwWS6fp8w737jF7";
const BASE_URL = "https://api.tomorrow.io/v4/weather";
//"https://api.tomorrow.io/v4/weather/forecast?location=ranchi&apikey="
//ranchi&apikey=6AeJM6Co7HM6jJ4RTRwWS6fp8w737jF7";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, apikey: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (datas) => {
  const {
    location: { lat, lon, name },
    data: {
      time,
      values: { humidity, temperature, temperatureApparent, windSpeed },
    },
  } = datas;

  return {
    lat,
    lon,
    name,
    humidity,
    temperature,
    temperatureApparent,
    windSpeed,
    time,
  };
};

// const formatForecastWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "realtime",
    searchParams
  ).then(formatCurrentWeather);

  // const { lat, lon } = formatCurrentWeather;

  // const formattedForecastWeather = await getWeatherData("weather", {
  //   lat,
  //   lon,
  //   exclude: "current,minutely,alerts",
  //   units: searchParams.units,
  // }).then(formatForecastWeather);

  return formattedCurrentWeather;
};

const formatToLocalTime = (
  time,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromISO(time).toFormat(format);

export default getFormattedWeatherData;

export { formatToLocalTime };
