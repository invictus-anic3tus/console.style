const ansiColors = {
  background: {
    normal: '0',
    black: "40",
    red: "41",
    green: "42",
    yellow: "43",
    blue: "44",
    magenta: "45",
    purple: "45",
    cyan: "46",
    white: "47",
    gray: "100",
  },
  color: {
    normal: '0',
    black: "30",
    red: "31",
    green: "32",
    yellow: "33",
    blue: "34",
    magenta: "35",
    purple: "35",
    cyan: "36",
    white: "37",
    gray: "90",
    brightblack: '90',
    brightred: '91',
    brightgreen: '92',
    brightyellow: '93',
    brightblue: '94',
    brightmagenta: '95',
    brightcyan: '96',
    brightwhite: '97'
  },
};

var nextNoNewline = false;
var prevStyle = '';
var prevColors = '';

function returnFunc(string = 'My string', rawFontColor, rawBackgroundColor, rawStyle, newline = true, keepLastFormat = false) {

  if (string == 'console.style party!') {
    party();
    return;
  }

  let colors = '';
  let styles = processStyle(rawStyle);
  let formattedString = '';

  if (typeof rawFontColor !== 'undefined') {
    colors = processColors(rawFontColor);
  }
  if (typeof rawFontColor !== 'undefined' && typeof rawBackgroundColor !== undefined) {
    colors = processColors(rawFontColor, rawBackgroundColor);
  }

  colors = colors;

  if (typeof colors == 'undefined') {
    return;
  }

  if (keepLastFormat) {
    styles = prevStyle;
    colors = prevColors;
  }
  
  formattedString = styles + colors + string + '\x1b[0m';
  process.stdout.write('\x1b[0m');

  if (!nextNoNewline) {
    if (newline) {
      console.log(formattedString);
    }
    else {
      process.stdout.write(formattedString);
      nextNoNewline = true;
    }
  }
  else {
    process.stdout.write(formattedString);
    nextNoNewline = false;
  }

  prevStyle = styles;
  prevColors = colors;
  
}

function processColors(color, background) {

  let formColor = color.trim().toLowerCase();

  let newColor = "";
  let backgroundColor = "";

  if (formColor === '') {
    console.log('Empty font color strings are not a color!!!!!!!!!!!!!!!!');
    return;
  }

  newColor = ansiColors.color[formColor];

  if (typeof newColor === 'undefined') {
    console.log('Please check spelling of font color names. Note that hex values and rgb values are \x1b[31mnot accepted.\x1b[0m');
  }



  if (typeof background !== "undefined") {

    let formBkgColor = background.trim().toLowerCase();

    if (formBkgColor === '') {
      console.log('Empty background color strings are not a color!!!!!!!!!!!!!!!!');
      return;
    }

    backgroundColor = ansiColors.background[formBkgColor];

    if (typeof backgroundColor === 'undefined') {
      console.log('Please check spelling of font color names. Note that hex values and rgb values are \x1b[31mnot accepted.\x1b[0m');
    }
    
    newColor = `\x1b[${backgroundColor}m\x1b[${newColor}m`;
  }

  else {
    newColor = `\x1b[${newColor}m`;
  }

  return newColor;
}

function processStyle(rawStyle) {

  let styleReturnString = '';

  if (typeof rawStyle === 'undefined') {
    return '';
  }
  else if (typeof rawStyle === 'string') {
    return oneStyle(rawStyle);
  }
  else if (typeof rawStyle === 'object') {
    rawStyle.forEach(element => {
      styleReturnString = styleReturnString + oneStyle(element);
    });
    return styleReturnString;
  }
  
}

function oneStyle(rawStyle) {
  rawStyle = rawStyle.toLowerCase().trim();

  let formattedStyle = 0;

  switch (rawStyle) {
    case 'bold':
      formattedStyle = 1;
      break;
    case 'faint':
      formattedStyle = 2;
      break;
    case 'dim':
      formattedStyle = 2;
      break;
    case 'italic':
      formattedStyle = 3;
      break;
    case 'italics':
      formattedStyle = 3;
      break;
    case 'italicize':
      formattedStyle = 3;
      break;
    case 'underline':
      formattedStyle = 4;
      break;
    case 'underscore':
      formattedStyle = 4;
      break;
    case 'blink':
      formattedStyle = 5;
      break;
    case 'blinking':
      formattedStyle = 5;
      break;
    case 'flash':
      formattedStyle = 6;
      break;
    case 'flashing':
      formattedStyle = 6;
      break;
    case 'invert':
      formattedStyle = 7;
      break;
    case 'inverted':
      formattedStyle = 7;
      break;
    case 'swap':
      formattedStyle = 7;
      break;
    case 'swapped':
      formattedStyle = 7;
      break;
    case 'invisible':
      formattedStyle = 8;
      break;
    case 'conceal':
      formattedStyle = 8;
      break;
    case 'strikethrough':
      formattedStyle = 9;
      break;
    case 'cross':
      formattedStyle = 9;
      break;
    case 'frame':
      formattedStyle = 51;
      break;
    case 'framed':
      formattedStyle = 51;
      break;
    case 'encircled':
      formattedStyle = 52;
      break;
    case 'circled':
      formattedStyle = 52;
      break;
    case 'overline':
      formattedStyle = 53;
      break;
    case 'overscore':
      formattedStyle = 53;
      break;
    case 'skibidi':
      console.log('skibidi toilet');
      break;
    case 'normal':
      formattedStyle = 0;
      break;
    case 'default':
      formattedStyle = 0;
      break;
    default:
      formattedStyle = 0;
      break;
  }

  let logStyle = '\x1b[' + formattedStyle + 'm';
  return logStyle;
}

function party() {
  let bold = '\x1b[1m';
  let italic = '\x1b[2m';
  let underline = '\x1b[4m';
  let norm = '\x1b[0m';
  

  console.log(bold + processColors('red') + 'P' + norm + bold + processColors('brightyellow') + 'A' + norm + bold + italic + processColors('brightgreen') + 'R' + norm + bold + processColors('blue') + 'T' + norm + bold + processColors('purple') + 'Y' + norm + bold + processColors('brightred') + 'Y' + norm + bold + processColors('white') + 'Y' + norm + bold + processColors('cyan') + 'Y' + norm + bold + processColors('green') + '!' + norm + bold + processColors('yellow') + '!' + norm);
}

module.exports = {
  returnFunc,
  party,
};

module.exports = returnFunc;
