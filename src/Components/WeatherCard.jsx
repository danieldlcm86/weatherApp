import React from "react";

const WeatherCard = ({ weather }) => {
    return (
        <div className="weather-card">
            <div className="card-header">
                <div>
                    <p className="weather-city">
                        {weather ? weather.name + " " + weather.sys.country : "-"}</p>
                    <p className="weather-description">
                        {weather ? weather.weather[0].description : "-"}</p>
                </div>
                <img alt={'weather'} className={"weather-icon"}
                    src={`icons/${weather ? weather.weather[0].icon : "unknown"}.png`} />
            </div>
            <div className="card-body">
                <h2 className="weather-temp">
                    {weather ? Math.round(weather.main?.temp - 273.15) : ""}°C</h2>
                <div className="weather-details">
                    <div className="parameters">
                        <span className="param-label">Detalles</span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Sensación:</span>
                        <span className="param-val">
                            {weather ? (weather.main?.feels_like - 273.15).toFixed(2) : "-"} °C
                        </span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Humedad: </span>
                        <span className="param-val">
                            {weather ? weather.main?.humidity : "-"} %</span>
                    </div>
                    <div className="parameters">
                        <span className="param-label">Presión: </span>
                        <span className="param-val">
                            {weather ? weather.main?.pressure : "-"} hPs</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;