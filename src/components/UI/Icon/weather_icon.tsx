import { FC } from "react";
import weatherImage from "../../../../assets/img/weather48.png";
export type IconProps = {
  weather: string;
  scale: number;
};

const filterWeatherIcon = (weather: string) => {
  if (weather.includes("구름많음") || weather.includes("흐림")) {
    return cloudIcon;
  } else if (weather.includes("비")) {
    return rainIcon;
  } else if (weather.includes("맑음")) {
    return sunIcon;
  }
};

const WeatherIcon: FC<IconProps> = ({ weather, scale }) => {
  const translateAmount = scale <= 1 ? 0 : scale * 3;
  return (
    <div
      style={{
        transform: `scale(${scale}) translate(-${translateAmount}px,  ${translateAmount}px)`,
      }}
    >
      {filterWeatherIcon(weather)}
    </div>
  );
};
export default WeatherIcon;

const cloudIcon = (
  <svg
    className="w-6 h-6 text-slate-900"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const sunIcon = (
  <svg
    className="w-6 h-6 text-slate-900"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <circle cx="12" cy="12" r="5" /> <line x1="12" y1="1" x2="12" y2="3" />{" "}
    <line x1="12" y1="21" x2="12" y2="23" /> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /> <line x1="1" y1="12" x2="3" y2="12" />{" "}
    <line x1="21" y1="12" x2="23" y2="12" /> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const rainIcon = (
  <svg
    className="w-6 h-6 text-slate-900"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />{" "}
    <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />{" "}
    <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
  </svg>
);
