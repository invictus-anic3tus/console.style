# console.style

A simple NPM package that lets you easily customize your console.logs!

Easy to use and fast to setup, console.style boasts a large amount of customization.

## Setup

The package is really easy to install from NPM. Just run `npm install @anicetus/console-style`

## Example script:

```
const consoleStyle = require("console-style");

// string, font color, background color, style, [newline?], [use the last format?]
consoleStyle('Error at line xx col xx', 'red', 'black', 'bold');

consoleStyle('GO!', 'green');
consoleStyle('slow...', 'yellow');
consoleStyle('STOP!', 'red');

```

## List of example functions:

Here are a few examples!

```
consoleStyle('Normal text\n');

consoleStyle("White, bold text\n", "white", "black", "bold");

consoleStyle("Red, italic text\n", "red", "black", "italic");

consoleStyle("Green underlined\n", "green", "black", "underline");

consoleStyle("Purple background and overline\n", "white", "purple", "overline");

consoleStyle("Black on yellow with a strikethrough\n", "black", "yellow", "strikethrough");

consoleStyle("Blinking bright-red text\n", 'brightred', undefined, 'blinking');

consoleStyle("no newline after, ", undefined, undefined, undefined, false);
consoleStyle('and no newline before!\n\n');

consoleStyle('Save this formatting for later\n', 'brightwhite', 'blue', 'bold');
consoleStyle('I keep the last formatting!', undefined, undefined, undefined, undefined, true);

consoleStyle('\nMultiple styles!!\n', undefined, undefined, ['bold', 'italic', 'blinking', 'underline']);
```

## List of all colors:

### Colors

#### font colors:

    normal
    black
    red
    green
    yellow
    blue
    magenta
    purple
    cyan
    white
    gray
    brightblack
    brightred
    brightgreen
    brightyellow
    brightblue
    brightmagenta
    brightcyan
    brightwhite

#### background colors:

    normal
    black
    red
    green
    yellow
    blue
    magenta
    purple
    cyan
    white
    gray

### What they look like in different terminals:

![ANSI color appearances](/images/ansicolors.png)

## Styles:

| Style Names   | Additional Names        | Description                                   |
| ------------- | ----------------------- | --------------------------------------------- |
| bold          |                         | Makes the text bold.                          |
| faint         | dim                     | Makes the text dim.                           |
| italic        | italics, italicize      | Makes the text italicized.                    |
| underline     | underscore              | Underlines the text.                          |
| blink         | blinking                | Makes the text blink.                         |
| flash         | flashing                | Makes the text flash.                         |
| invert        | inverted, swap, swapped | Inverts the text colors.                      |
| invisible     | conceal                 | Hides the text.                               |
| strikethrough | cross                   | Strikes through the text.                     |
| frame         | framed                  | Frames the text.   (not usually supported)    |
| encircled     | circled                 | Encircles the text.   (not usually supported) |
| overline      | overscore               | Adds a line above the text.                   |
| normal        | default                 | Resets to normal/default style.               |

## An example output:

![Terminal output image](/images/terminal.png)

<br>
<br>
<br>
<br>
I wonder what happens if you use "console.style party!" as your string...
