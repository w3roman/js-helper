
const jsHelper = {}

/**
 * Returns the passed value with a zero prefix, if the value is less than
 * 1e<order>.
 * @param {Number|String} value
 * @param {Number}        [order=1]
 * @returns {String}
 */
jsHelper.addZeroPrefix = function (value, order) {
  order = order || 1;
  var times = 0;
  var orderValue = Math.pow(10, order);
  if (value < orderValue) {
    times = ('' + orderValue).length - ('' + value).length;
  }
  return '0'.repeat(times) + value;
};

/**
 * Returns number of occurrences of a subString in a string.
 * @param {String} subString
 * @param {String} string
 * @returns {Number}
 * @see https://stackoverflow.com/a/5175859/4223982
 */
jsHelper.countSubString = function (subString, string) {
  return string.split(subString).length - 1;
};

/**
 * @param {Array} array
 * @see https://stackoverflow.com/a/9229821/4223982
 */
jsHelper.filterArrayOnUniqueValues = function (array) {
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
jsHelper.fizzBuzz = function (limit) {
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
jsHelper.getDaysInMonth = function (month, year) {
  return new Date(year, month, 0).getDate();
};

/**
 * @param {Number} n
 * @returns {Number}
 * @see https://learn.javascript.ru/task/factorial
 */
jsHelper.getFactorial = function (n) {
  return n ? n * jsHelper.getFactorial(n - 1) : 1;
};

/**
 * With ECMAScript 6 you can use the new spread operator.
 * Math.max(...[1, 2, 3]);
 * @param {Array} array
 * @returns {*}
 * @see https://stackoverflow.com/q/1669190/4223982#comment49713958_1669190
 */
jsHelper.getMaxNumberInArray = function (array) {
  return Math.max.apply(null, array);
};

/**
 * With ECMAScript 6 you can use the new spread operator.
 * Math.min(...[1, 2, 3]);
 * @param {Array} array
 * @returns {*}
 * @see https://stackoverflow.com/q/1669190/4223982#comment49713958_1669190
 */
jsHelper.getMinNumberInArray = function (array) {
  return Math.min.apply(null, array);
};

/**
 * @param {Number|String} value
 * @param {Array}         array
 * @returns {Boolean}
 */
jsHelper.inArray = function (value, array) {
  return !(array.indexOf(value) === -1);
};

/**
 * @param {Array} array
 * @returns {Boolean}
 */
jsHelper.isUniqueArray = function (array)
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
jsHelper.isValidDomainName = function (domainName) {
  return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(domainName);
};

/**
 * @param {String} ip
 * @returns {Boolean}
 */
jsHelper.isValidIp = function (ip) {
  return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip);
};

/**
 * @param {Number|String} a
 * @param {Number|String} b
 * @returns {*}
 */
jsHelper.max = function (a, b) {
  return a > b ? a : b;
};

/**
 * @param {Number|String} a
 * @param {Number|String} b
 * @returns {*}
 */
jsHelper.min = function (a, b) {
  return a < b ? a : b;
};

export default jsHelper
