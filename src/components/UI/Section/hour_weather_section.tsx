import { FC, useMemo } from "react";
import HourWeatherCard from "../Card/hour_weather_card";

export type HourWeather = {
  cloudState: string;
  day: string;
  humidity: number;
  precipitationForm: string;
  rainPrecipitation: string;
  rainProbability: number;
  snowAmount: string;
  temperature: number;
  time: string;
};

export type HourWeatherProps = {
  weatherData: HourWeather[];
};

const HourWeatherSection: FC<HourWeatherProps> = ({ weatherData }) => {
  const slicedWeatherData = useMemo(() => {
    return [...weatherData].slice(0, 20);
  }, [weatherData]);

  return (
    <div className="flex gap-4 px-8 overflow-scroll scrollbar-hide ">
      {slicedWeatherData.map((data) => {
        return <HourWeatherCard data={data} key={data.time} />;
      })}
    </div>
  );
};

export default HourWeatherSection;
