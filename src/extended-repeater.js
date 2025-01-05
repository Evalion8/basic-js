const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '00',
  } = options;

  const additionStr =
    (String(addition) + additionSeparator).repeat(additionRepeatTimes - 1) +
    String(addition);

  const repeatedString =
    (String(str) + additionStr + separator).repeat(repeatTimes - 1) +
    (String(str) + additionStr);

  if (!separator || !additionSeparator) {
    return;
  }

  return repeatedString;
}

module.exports = {
  repeater,
};
