;'use strict';

function printHeader(headerContent) {
  var header = document.createElement('h4');
  header.textContent = headerContent;
  document.body.appendChild(header);
}

function assertEquals(expected, actual) {
  var result =
    expected instanceof Array && actual instanceof Array
      ? JSON.stringify(expected) === JSON.stringify(actual)
      : expected === actual;
  var element = document.createElement('div');
  element.textContent = result;
  document.body.appendChild(element);
}
