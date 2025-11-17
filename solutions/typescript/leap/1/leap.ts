export function isLeap(year: number) {
  // not divisible by 4
  if (year % 4 != 0) {
    return false;
  }

  // if it's divisible by 100, must also be divisble by 400
  if (year % 100 == 0 && year % 400 != 0) {
    return false;
  }

  return true;
}
