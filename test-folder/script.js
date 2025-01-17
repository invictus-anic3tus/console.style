
// Require the package
const consoleStyle = require("console-style");


// Some examples!

consoleStyle('Normal text');

consoleStyle("White, bold text", "white", "black", "bold");

consoleStyle("Red, italic text", "red", "black", "italic");

consoleStyle("Green underlined", "green", "black", "underline");

consoleStyle("Purple background and overline", "white", "purple", "overline");

consoleStyle("Black on yellow with a strikethrough", "black", "yellow", "strikethrough");

consoleStyle("no newline after, ", undefined, undefined, undefined, false);
consoleStyle('and no newline before!');

// And so much more!

// docs at https://github.com/invictus-anic3tus/console.style