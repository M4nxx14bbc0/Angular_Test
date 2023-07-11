export interface WeatherAPI {
  request: RequestWeather;
  location: LocationWeather;
  current: CurrentWeather;
}

export interface RequestWeather {
  type: "City" | "LatLon" | "IP" | "Zipcode",
  query: string,
  language: string;
  unit: 'm' | 's' | 'f';
}

export interface LocationWeather {
  name: string
  country: string
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: string;
  localtime_epoch: number;
  utc_offset: string;
}

export interface CurrentWeather {
  observation_time: string;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_description: string;
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
  is_day: string;
}
