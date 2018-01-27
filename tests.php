<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Test</title>
    <script src="tests.js?v=<?=
        filemtime(__DIR__ . '/tests.js')
    ?>"></script>
    <script src="js-helper.js?v=<?=
        filemtime(__DIR__ . '/js-helper.js')
    ?>"></script>
    <script>
      window.addEventListener('DOMContentLoaded', function () {

        // ---------------------------------------------------------------------

        printHeader('jsHelper.co.addZeroPrefix(value, order)');

        assertEquals('00', jsHelper.co.addZeroPrefix(0));
        assertEquals('01', jsHelper.co.addZeroPrefix(1));
        assertEquals('10', jsHelper.co.addZeroPrefix(10));
        assertEquals('11', jsHelper.co.addZeroPrefix(11));

        assertEquals('000', jsHelper.co.addZeroPrefix(0, 2));
        assertEquals('001', jsHelper.co.addZeroPrefix(1, 2));
        assertEquals('010', jsHelper.co.addZeroPrefix(10, 2));
        assertEquals('011', jsHelper.co.addZeroPrefix(11, 2));
        assertEquals('100', jsHelper.co.addZeroPrefix(100, 2));
        assertEquals('111', jsHelper.co.addZeroPrefix(111, 2));

        assertEquals('0000', jsHelper.co.addZeroPrefix(0, 3));
        assertEquals('0001', jsHelper.co.addZeroPrefix(1, 3));
        assertEquals('0010', jsHelper.co.addZeroPrefix(10, 3));
        assertEquals('0011', jsHelper.co.addZeroPrefix(11, 3));
        assertEquals('0100', jsHelper.co.addZeroPrefix(100, 3));
        assertEquals('0111', jsHelper.co.addZeroPrefix(111, 3));
        assertEquals('1000', jsHelper.co.addZeroPrefix(1000, 3));
        assertEquals('1111', jsHelper.co.addZeroPrefix(1111, 3));

        // ---------------------------------------------------------------------

        printHeader('countSubString(subString, string)');

        assertEquals(1, jsHelper.co.countSubString('h', 'hello'));
        assertEquals(2, jsHelper.co.countSubString('l', 'hello'));
        assertEquals(3, jsHelper.co.countSubString('l', 'hello world'));
        assertEquals(1, jsHelper.co.countSubString('ll', 'hello world'));

        // ---------------------------------------------------------------------

        printHeader('filterArrayOnUniqueValues(array)');

        assertEquals([], jsHelper.co.filterArrayOnUniqueValues([]));
        assertEquals([1], jsHelper.co.filterArrayOnUniqueValues([1]));
        assertEquals(
          [1, 2, 3],
          jsHelper.co.filterArrayOnUniqueValues([1, 2, 3])
        );
        assertEquals(
          [1, 2, 3],
          jsHelper.co.filterArrayOnUniqueValues([1, 2, 2, 3, 3, 3])
        );

        // ---------------------------------------------------------------------

        printHeader('fizzBuzz(limit)');

        // ...

        // ---------------------------------------------------------------------

        printHeader('getDaysInMonth(month, year)');

        assertEquals(31, jsHelper.co.getDaysInMonth(1, 1970));
        assertEquals(28, jsHelper.co.getDaysInMonth(2, 1970));
        assertEquals(31, jsHelper.co.getDaysInMonth(3, 1970));
        assertEquals(30, jsHelper.co.getDaysInMonth(4, 1970));
        assertEquals(31, jsHelper.co.getDaysInMonth(5, 1970));
        assertEquals(30, jsHelper.co.getDaysInMonth(6, 1970));
        assertEquals(31, jsHelper.co.getDaysInMonth(7, 1970));
        assertEquals(31, jsHelper.co.getDaysInMonth(8, 1970));
        assertEquals(30, jsHelper.co.getDaysInMonth(9, 1970));
        assertEquals(31, jsHelper.co.getDaysInMonth(10, 1970));
        assertEquals(30, jsHelper.co.getDaysInMonth(11, 1970));
        assertEquals(31, jsHelper.co.getDaysInMonth(12, 1970));

        // ---------------------------------------------------------------------

        printHeader('getFactorial(n)');

        assertEquals(1, jsHelper.co.getFactorial(1));
        assertEquals(2, jsHelper.co.getFactorial(2));
        assertEquals(6, jsHelper.co.getFactorial(3));
        assertEquals(24, jsHelper.co.getFactorial(4));
        assertEquals(120, jsHelper.co.getFactorial(5));

        // ---------------------------------------------------------------------

        printHeader('getMaxNumberInArray(array)');

        assertEquals(4, jsHelper.co.getMaxNumberInArray([4]));
        assertEquals(4, jsHelper.co.getMaxNumberInArray([4, 2]));
        assertEquals(4, jsHelper.co.getMaxNumberInArray([4, 2, 1]));

        // ---------------------------------------------------------------------

        printHeader('getMinNumberInArray(array)');

        assertEquals(4, jsHelper.co.getMinNumberInArray([4]));
        assertEquals(2, jsHelper.co.getMinNumberInArray([4, 2]));
        assertEquals(1, jsHelper.co.getMinNumberInArray([4, 2, 1]));

        // ---------------------------------------------------------------------

        printHeader('inArray(value, array)');

        assertEquals(false, jsHelper.co.inArray(0, []));
        assertEquals(false, jsHelper.co.inArray(1, []));
        assertEquals(false, jsHelper.co.inArray('', []));
        assertEquals(false, jsHelper.co.inArray('a', []));
        assertEquals(false, jsHelper.co.inArray(0, ['a', 'b', 'c', 'd']));
        assertEquals(false, jsHelper.co.inArray(1, ['a', 'b', 'c', 'd']));
        assertEquals(false, jsHelper.co.inArray('', ['a', 'b', 'c', 'd']));
        assertEquals(true, jsHelper.co.inArray('a', ['a', 'b', 'c', 'd']));
        assertEquals(true, jsHelper.co.inArray('c', ['a', 'b', 'c', 'd']));

        // ---------------------------------------------------------------------

        printHeader('isUniqueArray(array)');

        assertEquals(true, jsHelper.co.isUniqueArray([]));
        assertEquals(false, jsHelper.co.isUniqueArray(['a', 'b', 'a']));
        assertEquals(true, jsHelper.co.isUniqueArray(['a', 'b', 'c', 'd']));

        // ---------------------------------------------------------------------

        printHeader('isValidDomainName(domainName)');

        assertEquals(false, jsHelper.co.isValidDomainName(''));
        assertEquals(false, jsHelper.co.isValidDomainName('example'));
        assertEquals(true, jsHelper.co.isValidDomainName('example.com'));

        // ---------------------------------------------------------------------

        printHeader('isValidIp(ip)');

        assertEquals(false, jsHelper.co.isValidIp(''));
        assertEquals(false, jsHelper.co.isValidIp('123'));
        assertEquals(true, jsHelper.co.isValidIp('123.123.123.123'));
        assertEquals(true, jsHelper.co.isValidIp('192.168.0.1'));

        // ---------------------------------------------------------------------

        printHeader('max(a, b)');

        assertEquals(false, jsHelper.co.max(1, 2) === 0);
        assertEquals(false, jsHelper.co.max(1, 2) === 1);
        assertEquals(true, jsHelper.co.max(1, 2) === 2);

        // ---------------------------------------------------------------------

        printHeader('min(a, b)');

        assertEquals(false, jsHelper.co.min(1, 2) === 0);
        assertEquals(false, jsHelper.co.min(1, 2) === 2);
        assertEquals(true, jsHelper.co.min(1, 2) === 1);

      });
    </script>
</head>
<body>
    <h1>Test</h1>
</body>
</html>
