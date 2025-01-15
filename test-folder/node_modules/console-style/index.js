function returnFunc(string, rawColor, style, font) {

    string = '%c' + string;
    console.log(string);
    console.log(rawColor);

    color = processColor(rawColor);

    console.log(string, color);
    return string + ',' + color;
}

function processColor(color) {
    newColor = color.trim().toLowerCase();

    newColor = "color:" + newColor;
    return newColor;
}

module.exports = returnFunc;