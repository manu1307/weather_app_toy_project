import { API_BASE_URL } from "@/components/constant/constant";
import DailyWeatherCard from "@/components/UI/Card/daily_weather_card";
import HourWeatherSection from "@/components/UI/Section/hour_weather_section";
import { HourWeather } from "@/components/UI/Section/hour_weather_section";
import TodayWeatherCard from "@/components/UI/Card/today_weather_card";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  currentLocationCity,
  currentLocationLatitude,
  currentLocationLongitude,
  currentLocationState,
} from "@/components/states/current_location_state";

export type WeatherWeekData = {
  orders: number;
  date: string;
  day: string;
  rainAm: number;
  rainPm: number;
  tempMin: number;
  tempMax: number;
  cloudAm: string;
  cloudPm: string;
};

const WeatherPage: FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherWeekData[]>([]);
  const [weatherTimeData, setWeatherTimeData] = useState<HourWeather[]>([]);

  const [city, setCity] = useRecoilState(currentLocationCity);
  const [state, setState] = useRecoilState(currentLocationState);
  const currentLatitude = useRecoilValue(currentLocationLatitude);
  const currentLongitude = useRecoilValue(currentLocationLongitude);

  useEffect(() => {
    const getRegion = async () => {
      try {
        const response = axios
          .get(
            `https://dapi.kakao.com//v2/local/geo/coord2regioncode.json?x=${currentLongitude}&y=${currentLatitude}`,
            {
              headers: { Authorization: `KakaoAK ${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}` },
            }
          )
          .then((res) => {
            const addressData = res.data.documents[0];
            setCity(addressData["region_1depth_name"]);
            setState(addressData["region_2depth_name"]);
            return addressData;
          })
          .then((data) => {
            // const cityEncoded = encodeURI(data["region_1depth_name"]);
            const cityEncoded = encodeURI("서울특별시");
            const seoulEncoded = encodeURI("서울");
            const stateEncoded = encodeURI(data["region_2depth_name"]);
            // console.log(data["region_2depth_name"]);
            // console.log(cityEncoded);
            axios
              .get(
                `${API_BASE_URL}/api/mid?state=${cityEncoded}&latitude=${currentLatitude}&longitude=${currentLongitude}`
              )
              .then((response) => {
                setWeatherData(response.data);
                // console.log(response.data);
              });
            axios
              .get(`${API_BASE_URL}/api/short?city=${cityEncoded}&state=${stateEncoded}`)
              .then((response) => {
                setWeatherTimeData(response.data);
              });
          });
      } catch (err) {
        console.log(err);
      }
    };
    getRegion();
  }, [currentLatitude, currentLongitude, setCity, setState, city, state]);

  return (
    <div className="text-slate-900">
      <div className="flex flex-col justify-around h-screen">
        <section className="">
          {weatherTimeData[0] && <TodayWeatherCard todayWeather={weatherTimeData[0]} />}
        </section>
        <section className="pb-5">
          <HourWeatherSection weatherData={weatherTimeData} />
        </section>
        <section className="flex flex-col justify-around h-full pb-4">
          {weatherData.map((data, index) => {
            return <DailyWeatherCard key={index} card={data} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default WeatherPage;
