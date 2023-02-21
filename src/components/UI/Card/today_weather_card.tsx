import {
  currentLocationCity,
  currentLocationLatitude,
  currentLocationLongitude,
  currentLocationState,
} from "@/components/states/current_location_state";
import { Humidity } from "@/util";
import axios from "axios";
import { DateTime } from "luxon";
import { FC, useEffect } from "react";
import { useRecoilValue } from "recoil";
import WeatherIcon from "../Icon/weather_icon";
import { HourWeather } from "../Section/hour_weather_section";

export type TodayWeatherProps = {
  todayWeather: HourWeather;
};

const TodayWeatherCard: FC<TodayWeatherProps> = ({ todayWeather }) => {
  const { cloudState, rainProbability, temperature, humidity, rainPrecipitation } = todayWeather;

  const currentCity = useRecoilValue(currentLocationCity);
  const currentState = useRecoilValue(currentLocationState);

  const now = DateTime.now();

  useEffect(() => {}, []);
  return (
    <div className="h-full p-5 ">
      <div className="flex flex-col items-center">
        <div>{`${currentCity} ${currentState}`}</div>
        <div className="my-2 text-center text-yellow-200 border-2 rounded-full bg-slate-900 w-36 border-slate-900">{`${now.year}년 ${now.monthLong} ${now.day}일`}</div>
        <div className="text-xl">{cloudState}</div>
        <div>
          <span className="mr-1 font-bold text-8xl">{temperature}°</span>
        </div>
        <div className="flex flex-col w-full gap-1 p-3">
          <div>오늘은 비올 확률이 {rainProbability}%에요</div>
          {rainProbability > 40 && <div>{rainPrecipitation}</div>}
          <div>
            습도는 {humidity}%로 {Humidity(humidity)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeatherCard;
