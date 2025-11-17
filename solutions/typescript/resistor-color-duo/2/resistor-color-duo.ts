export const colorCode = (color: string) => {
  return COLORS.indexOf(color);
}

export const COLORS = [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ];

export function decodedValue(colors: string[]) {
  const tensDigit: number = colorCode(colors[0]);
  const onesDigit: number = colorCode(colors[1]);
  return (10 * tensDigit) + onesDigit;
}

