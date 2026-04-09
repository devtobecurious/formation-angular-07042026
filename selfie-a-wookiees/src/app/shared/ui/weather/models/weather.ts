export type WeatherValue = -100 | -1 | 0 | 1;

/**
 * Represents the weather conditions on a planet. The `value` property indicates the severity of the weather, where:
 * - `-100`: Extreme weather conditions (e.g., storms, hurricanes).
 * - `-1`: Poor weather conditions (e.g., rain, snow).
 * - `0`: Neutral weather conditions (e.g., cloudy, mild).
 * - `1`: Good weather conditions (e.g., sunny, clear skies).
 */
export interface Weather {
  value: WeatherValue;
  temperature: number;
  planet: string;
}


