import { WeatherWeekData } from "@/pages/weather_page";
import { FC } from "react";
import WeatherIcon from "../Icon/weather_icon";

export type CardProps = {
  card: WeatherWeekData;
};

const DailyWeatherCard: FC<CardProps> = ({ card, ...props }) => {
  const { day, tempMin, tempMax, cloudAm, cloudPm } = card;
  return (
    <div className="flex items-center justify-around px-4 text-xl">
      <div className="text-center basis-1/6">{day}</div>
      <div className="flex justify-center gap-4 basis-3/6 ">
        <WeatherIcon weather={cloudAm} scale={1} /> / <WeatherIcon weather={cloudPm} scale={1} />
      </div>
      <div className="flex justify-center gap-4 basis-2/6">
        <div className="w-4">{tempMin}</div>/<div className="w-4">{tempMax}</div>
      </div>
    </div>
  );
};

export default DailyWeatherCard;
