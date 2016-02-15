var trim = require('lodash/trim');
var deburr = require('lodash/deburr');

// Function takes a filename string (without extension) and removes/replaces characters
// that are not appropriate for filenames
module.exports = function(dirtyString) {
  var cleanString = dirtyString
    .replace(/\./g, '')
    .replace(/,/g, '')
    .replace(/'/g, '')
    .replace('"', '')
    .replace('”', '')
    .replace(':', '')
    .replace(/&/g, 'and')
    .replace(/\//g, '-')
    .replace(/\s{2,}/, ' ');
  cleanString = trim(cleanString);
  cleanString = deburr(cleanString);
  return cleanString;
};
