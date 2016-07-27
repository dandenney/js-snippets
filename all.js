// Select elements by attribute

function getElements(attrib) {
    return document.querySelectorAll('[' + attrib + ']');
}

var elements = getElements('required');
