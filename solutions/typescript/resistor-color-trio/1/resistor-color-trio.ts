const COLORS = [
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

const PREFIXES = [
  'kilo',
  'mega',
  'giga'
]

const colorCode = (color: string) => {
  return COLORS.indexOf(color);
}

function decodedValue(colors: string[]) {
  const tensDigit: number = colorCode(colors[0]);
  const onesDigit: number = colorCode(colors[1]);
  return (10 * tensDigit) + onesDigit;
}

export function decodedResistorValue(colors: string[]) {
  let mainValue: number = decodedValue(colors);
  if (mainValue == 0) {
    return '0 ohms';
  }
  
  const thirdBandValue: number = colorCode(colors[2]);

  let numOhms: number = mainValue * (10**thirdBandValue);
  let prefix: string = '';

  if (numOhms % 1000000000 == 0) {
    prefix = 'giga';
    numOhms = numOhms / 1000000000;
  } else if (numOhms % 1000000 == 0) {
    prefix = 'mega';
    numOhms = numOhms / 1000000;
  } else if (numOhms % 1000 == 0) {
    prefix = 'kilo';
    numOhms = numOhms / 1000;
  }

  return `${numOhms} ${prefix}ohms`;
}
