import { atom } from "recoil";

export const currentLocationLatitude = atom<number>({
  key: "currentLocationLatitudeState",
  default: 0,
});

export const currentLocationLongitude = atom<number>({
  key: "currentLocationLongitudeState",
  default: 0,
});

export const currentLocationCity = atom<string>({
  key: "currentLocationCity",
  default: "",
});
export const currentLocationState = atom<string>({
  key: "currentLocationState",
  default: "",
});
