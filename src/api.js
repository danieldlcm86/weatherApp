import axios from 'axios';

export async function fetchWeather(city, setError) {
    console.log(process.env.REACT_APP_API_KEY);
    const url = `https://api.openweathermap.org/data/3.0/q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
    //https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    //https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}
    try {
        const response = await axios.get(url);
        setError("");
        return response.data;
    } catch (error) {
        setError("Ciudad no Encontrada!");
        return error;
    }
}