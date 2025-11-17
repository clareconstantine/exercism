export function decodedValue(colors: string[]) {
  const colorCodes: Record<string, number> = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9
  };

  const tensColor: string = colors[0];
  const onesColor: string = colors[1];
  const tensDigit: number = colorCodes[tensColor];
  const onesDigit: number = colorCodes[onesColor];
  return (10 * tensDigit) + onesDigit;
}

