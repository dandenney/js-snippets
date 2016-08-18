Select elements by attribute
Source: http://codereview.stackexchange.com/questions/14061/javascript-function-to-get-dom-elements-by-any-attribute

```js
function getElements(attrib) {
  return document.querySelectorAll('[' + attrib + ']');
}

var elementsByAttribute = getElements('required');

```
Toggle Class
Source: http://youmightnotneedjquery.com
This had a lightbulb moment for me as I was doing a weird combo if classList.add() and classList.remove().

```js
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

```
------------------------
Generated _Thu Aug 18 2016 14:14:30 GMT-0400 (EDT)_ from [&#x24C8; all.js](all.js "View in source")
