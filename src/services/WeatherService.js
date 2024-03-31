import { DateTime } from "luxon";

const BASE_URL = "https://api.tomorrow.io/v4/weather";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    apikey: process.env.REACT_APP_API_KEY,
  });

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

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "realtime",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

const formatToLocalTime = (
  time,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromISO(time).toFormat(format);

export default getFormattedWeatherData;

export { formatToLocalTime };
