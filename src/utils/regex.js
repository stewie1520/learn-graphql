const regexEscape = (string) => String(string).replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');

/**
 * @param {String} str
 * @param {String} option
 * @return {RegExp}
 */
const makeCleanRegex = (str, option = 'i') => new RegExp(regexEscape(str), option);

module.exports = {
  makeCleanRegex,
};
