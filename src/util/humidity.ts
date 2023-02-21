export const Humidity = (humidity: number) => {
  if (humidity > 70) {
    return "습해요";
  } else if (humidity > 35) {
    return "보통이에요";
  }
  return "건조해요";
};
