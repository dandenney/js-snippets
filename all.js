// # `all.js`
// This file is a collection of snippets that I want as a reference without having to google them again

// #### Check if a value is in an array
// Source: http://stackoverflow.com/questions/7378228/check-if-an-element-is-present-in-an-array?answertab=votes#tab-top
function isInArray(value, array) {
  return array.indexOf(value) > -1;
}
console.log(isInArray(1, [1,2,3])); // true

// #### Select elements by attribute
// Source: http://codereview.stackexchange.com/questions/14061/javascript-function-to-get-dom-elements-by-any-attribute

function getElements(attrib) {
  return document.querySelectorAll('[' + attrib + ']');
}

var elementsByAttribute = getElements('required');

// #### Toggle Class
// Source: http://youmightnotneedjquery.com

function toggleClass() {

  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    el.className = classes.join(' ');
  }

};
