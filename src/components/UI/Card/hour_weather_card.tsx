import { FC } from "react";
import WeatherIcon from "../Icon/weather_icon";
import { HourWeather } from "../Section/hour_weather_section";

export type HourWeatherCardProps = {
  data: HourWeather;
};

const HourWeatherCard: FC<HourWeatherCardProps> = ({ data }) => {
  const { cloudState, temperature, time } = data;
  return (
    <div className="flex flex-col gap-2 px-1 py-3 text-center border-2 rounded-lg border-slate-900 h-30">
      <div className="w-20 text-sm">{time.slice(0, 2)}시</div>
      <div className="flex justify-center">
        <WeatherIcon weather={cloudState} scale={1} />
      </div>
      <div className="text-xl font-light">{temperature}°C</div>
    </div>
  );
};
export default HourWeatherCard;
