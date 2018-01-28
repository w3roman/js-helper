
var jsHelper = {
  constants: {
    CSS_PREFIX: 'w3lifer--js-helper--'
  },
  co: {},
  ui: {}
};

// -----------------------------------------------------------------------------

/**
 * Returns the passed value with a zero prefix, if the value is less than
 * 1e<order>.
 * @param {Number|String} value
 * @param {Number}        [order=1]
 * @returns {String}
 */
jsHelper.co.addZeroPrefix = function (value, order) {
  order = order || 1;
  var times = 0;
  var orderValue = Math.pow(10, order);
  if (value < orderValue) {
    times = ('' + orderValue).length - ('' + value).length;
  }
  // noinspection JSValidateTypes
  return '0'.repeat(times) + value;
};

/**
 * Returns number of occurrences of a subString in a string.
 * @param {String} subString
 * @param {String} string
 * @returns {Number}
 * @see https://stackoverflow.com/a/5175859/4223982
 */
jsHelper.co.countSubString = function (subString, string) {
  return string.split(subString).length - 1;
};

/**
 * @param {Array} array
 * @see https://stackoverflow.com/a/9229821/4223982
 */
jsHelper.co.filterArrayOnUniqueValues = function (array) {
  return array.filter(
    function (item, position, self) {
      return self.indexOf(item) === position;
    }
  );
};

/**
 * @param {Number|String} limit
 * @see https://repl.it/@w3lifer/fizz-buzz
 */
jsHelper.co.fizzBuzz = function (limit) {
  for (var i = 1; i <= limit; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log('FizzBuzz');
      } else {
        console.log('Fizz');
      }
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
};

/**
 * @param {Number|String} month
 * @param {Number|String} year
 * @returns {Number}
 * @see https://stackoverflow.com/a/1184359/4223982
 */
jsHelper.co.getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};

/**
 * @param {Number} n
 * @returns {Number}
 * @see https://learn.javascript.ru/task/factorial
 */
jsHelper.co.getFactorial = function (n) {
  return n ? n * jsHelper.co.getFactorial(n - 1) : 1;
};

/**
 * With ECMAScript 6 you can use the new spread operator.
 * Math.max(...[1, 2, 3]);
 * @param {Array} array
 * @returns {*}
 * @see https://stackoverflow.com/q/1669190/4223982#comment49713958_1669190
 */
jsHelper.co.getMaxNumberInArray = function (array) {
  return Math.max.apply(null, array);
};

/**
 * With ECMAScript 6 you can use the new spread operator.
 * Math.min(...[1, 2, 3]);
 * @param {Array} array
 * @returns {*}
 * @see https://stackoverflow.com/q/1669190/4223982#comment49713958_1669190
 */
jsHelper.co.getMinNumberInArray = function (array) {
  return Math.min.apply(null, array);
};

/**
 * @param {Number|String} value
 * @param {Array}         array
 * @returns {Boolean}
 */
jsHelper.co.inArray = function (value, array) {
  return !(array.indexOf(value) === -1);
};

/**
 * @param {Array} array
 * @returns {Boolean}
 */
jsHelper.co.isUniqueArray = function (array)
{
  var map = {};
  for (var i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      return false;
    }
    map[array[i]] = 1;
  }
  return true;
};

/**
 * @param {String} domainName
 * @returns {Boolean}
 * @see https://safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch08s15.html
 */
jsHelper.co.isValidDomainName = function (domainName) {
  return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(domainName);
};

/**
 * @param {String} ip
 * @returns {Boolean}
 */
jsHelper.co.isValidIp = function (ip) {
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
};

/**
 * @param {Number|String} a
 * @param {Number|String} b
 * @returns {*}
 */
jsHelper.co.max = function (a, b) {
  return a > b ? a : b;
};

/**
 * @param {Number|String} a
 * @param {Number|String} b
 * @returns {*}
 */
jsHelper.co.min = function (a, b) {
  return a < b ? a : b;
};

// -----------------------------------------------------------------------------

/**
 * @param {Object} params
 * @param {Array}  params.links
 */
jsHelper.ui.addScriptsToThePage = function (params) {
  for (var i = 0; i < params.links.length; i++) {
    var script = document.createElement('script');
    script.src = params.links[i];
    script.async = false; // For the order of addition
    document.body.appendChild(script);
  }
};

/**
 * Only works if the user takes an action.
 * @param {String} text
 * @see https://stackoverflow.com/a/30810322/4223982
 */
jsHelper.ui.copyTextToClipboard = function (text) {
  var input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
};

/**
 * Disables code review.
 * Tested in: Google Chrome.
 */
jsHelper.ui.disableCodeReview = function () {

  // Disabling the context menu

  window.addEventListener('contextmenu', function(mouseEvent) {
    mouseEvent.preventDefault();
  });

  // Disabling the Dev Tools

  window.addEventListener('keydown', function(keyboardEvent) {
    if (
      // 85 - U (Ctrl + U)
      (keyboardEvent.ctrlKey && keyboardEvent.keyCode === 85) ||
      (
        keyboardEvent.ctrlKey &&
        keyboardEvent.shiftKey &&
        // 73 - I (Ctrl + Shift + I), 74 - J (Ctrl + Shift + J)
        [73, 74].indexOf(keyboardEvent.keyCode) !== -1
      ) ||
      // 123 - F12
      keyboardEvent.keyCode === 123
    ) {
      keyboardEvent.preventDefault();
    }
  });

};

/**
 * Google URL Shortener
 * @param {Object}   options
 * @param {String}   options.apiKey
 * @param {String}   options.longUrl
 * @param {Function} options.onError function (xhr) {}
 * @param {Function} options.onLoad  function (xhr) {}
 * @see https://goo.gl
 * @see https://developers.google.com/url-shortener
 */
jsHelper.ui.googleUrlShortener = function (options) {
  if (!options.apiKey) {
    console.error('Google URL Shortener: You must specify API key');
    return;
  }
  if (!options.longUrl) {
    console.error('Google URL Shortener: You must specify URL');
    return;
  }
  if (!options.onLoad) {
    console.error('Google URL Shortener: You must specify "onLoad" callback');
    return;
  }
  if (!options.onError) {
    console.error('Google URL Shortener: You must specify "onError" callback');
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.open(
    'post',
    'https://www.googleapis.com/urlshortener/v1/url?key=' + options.apiKey
  );
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.addEventListener(
    'load',
    options.onLoad.bind(null, xhr)
  );
  xhr.addEventListener('error', options.onError.bind(null, xhr));
  xhr.send(JSON.stringify({'longUrl': options.longUrl}));
};

/**
 * @param {Object} options
 * @param {Object} options.from HTMLElement
 * @param {Object} options.to   HTMLElement
 */
jsHelper.ui.htmlHeadersMap = function (options) {

  // Get

  var headers = [];
  for (var i = 1; i <= 6; i++) {
    var headersOnPage = options.from.querySelectorAll('h' + i);
    for (var j = 0; j < headersOnPage.length; j++) {
      headers.push(headersOnPage[j]);
    }
  }

  // Sort

  var sortedHeaders = {};
  headers.forEach(function (header) {
    sortedHeaders[
      Math.round(header.getBoundingClientRect().top + pageYOffset)
    ] = header;
  });
  headers = sortedHeaders;

  // Wrap

  var nav = document.createElement('nav');
  nav.classList.add(jsHelper.constants.CSS_PREFIX + 'html-headers-map');

  // Generate markup

  for (var header in headers) {
    var item = document.createElement('div');
    item.classList.add(
      jsHelper.constants.CSS_PREFIX + 'html-headers-map--' +
        headers[header].tagName.toLowerCase()
    );
    item.textContent = headers[header].textContent;
    nav.appendChild(item);
  }

  // Add to

  options.to.appendChild(nav);

};

/**
 * @param {String} [textContent=</>]
 */
jsHelper.ui.iLoveValidator = function (textContent) {
    var link = document.createElement('a');
    link.textContent = textContent || '</>';
    link.target = '_blank';
    link.setAttribute('id', jsHelper.constants.CSS_PREFIX + 'i-love-validator');
    link.addEventListener('click', function () {
      this.href =
        'https://validator.w3.org/nu/' +
          '?showimagereport&showoutline&showsource&doc=' +
            location.href.split('#')[0];
    });
    document.body.appendChild(link);
};

/**
 * Executes callback on the passed key code sequence.
 * @param {Object}   options
 * @param {String}   [options.keyCodeSequence=null] - Key code sequence.
 *                                                    For example: 79,75 (ok).
 *                                                    Delimiter: ","
 *                                                    (without space).
 * @param {Function} [options.callback=null]
 * @param {Boolean}  [options.removeEventListenerAfterFirstExecution=false]
 */
jsHelper.ui.onKeyCodeSequence = function (options) {

  options = options || {};
  options.keyCodeSequence = options.keyCodeSequence || null;
  options.callback = options.callback || null;
  options.removeEventListenerAfterFirstExecution =
    options.removeEventListenerAfterFirstExecution || false;

  if (!options.keyCodeSequence || !options.callback) {
      return;
  }

  var inputKeySequence = [];
  window.addEventListener('keyup', doSomething);
  function doSomething(keyboardEvent) {
    if (keyboardEvent.keyCode === 27) { // Esc
      inputKeySequence = [];
    } else if (keyboardEvent.keyCode === 8) { // Backspace
      inputKeySequence.pop();
    } else {
      inputKeySequence.push(keyboardEvent.keyCode);
      if (inputKeySequence.toString() === options.keyCodeSequence) {
        if (options.removeEventListenerAfterFirstExecution) {
          window.removeEventListener('keyup', doSomething);
        }
        inputKeySequence = [];
        options.callback();
      }
    }
  }

};
