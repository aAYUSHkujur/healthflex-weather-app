const API_KEY = "6AeJM6Co7HM6jJ4RTRwWS6fp8w737jF7";
const BASE_URL = "https://api.tomorrow.io/v4/weather"
  //"https://api.tomorrow.io/v4/weather/forecast?location=ranchi&apikey="
  //ranchi&apikey=6AeJM6Co7HM6jJ4RTRwWS6fp8w737jF7";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, apikey: API_KEY });

  return fetch(url)
    .then((res) => res.json())
};

const getFormattedWeatherData = () => {
    const formattedCurrentWeather = await getFormattedWeatherData('realtime')
}
