# `all.js`
This file is a collection of snippets that I want as a reference without having to google them again


#### Select elements by attribute
Source: http://codereview.stackexchange.com/questions/14061/javascript-function-to-get-dom-elements-by-any-attribute

```js
function getElements(attrib) {
  return document.querySelectorAll('[' + attrib + ']');
}

var elementsByAttribute = getElements('required');

```
#### Toggle Class
Source: http://youmightnotneedjquery.com

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
Generated _Thu Aug 18 2016 18:03:22 GMT-0400 (EDT)_ from [&#x24C8; all.js](all.js "View in source")

