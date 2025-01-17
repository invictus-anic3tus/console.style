
// Require the package
const consoleStyle = require("console-style");


// Some examples!

consoleStyle('Normal text\n');

consoleStyle("White, bold text\n", "white", "black", "bold");

consoleStyle("Red, italic text\n", "red", "black", "italic");

consoleStyle("Green underlined\n", "green", "black", "underline");

consoleStyle("Purple background and overline\n", "white", "purple", "overline");

consoleStyle("Black on yellow with a strikethrough\n", "black", "yellow", "strikethrough");

consoleStyle("Blinking bright-red text\n", 'brightred', undefined, 'blinking');

consoleStyle("no newline after, ", undefined, undefined, undefined, false);
consoleStyle('and no newline before!\n\n');

consoleStyle('Use this formatting later\n', 'brightwhite', 'blue', 'bold');
consoleStyle('I keep the last formatting!', undefined, undefined, undefined, undefined, true);

consoleStyle('\nMultiple styles!!\n', undefined, undefined, ['bold', 'italic', 'blinking', 'underline']);

// And more!

// docs at https://github.com/invictus-anic3tus/console.style