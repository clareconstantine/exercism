export function age(planet: string, seconds: number): number {
  const secondsPerEarthYear: number = 31557600;
  const earthYears: number = seconds / secondsPerEarthYear;

  return parseFloat((earthYears / orbitalPeriods[planet]).toFixed(2));
}

const orbitalPeriods: Record<string, number> = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1.0,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus':	84.016846,
  'neptune': 164.79132
}