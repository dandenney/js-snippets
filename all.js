// Select elements by attribute
// Source: http://codereview.stackexchange.com/questions/14061/javascript-function-to-get-dom-elements-by-any-attribute

function getElements(attrib) {
    return document.querySelectorAll('[' + attrib + ']');
}

var elements = getElements('required');
