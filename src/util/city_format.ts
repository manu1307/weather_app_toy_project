export type CityData = {
  cityName: string;
  formattedCityName: string;
};

export const CityFormat = (city: string) => {
  const CityList: CityData[] = [
    { cityName: "서울특별시", formattedCityName: "서울특별시" },
    { cityName: "울산광역시", formattedCityName: "울산" },
  ];
  return CityList.find((cityData) => {
    cityData.cityName === city;
  })?.formattedCityName;
};
