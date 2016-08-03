// Select elements by attribute
// Source: http://codereview.stackexchange.com/questions/14061/javascript-function-to-get-dom-elements-by-any-attribute

function getElements(attrib) {
  return document.querySelectorAll('[' + attrib + ']');
}

var elementsByAttribute = getElements('required');

// Toggle Class
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
