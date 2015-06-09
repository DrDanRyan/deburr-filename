var _ = require('lodash');

// Function takes a filename string (without extension) and removes/replaces characters
// that are not appropriate for filenames
module.exports = function(dirtyString) {
  let cleanString = dirtyString.replace(/\./g, '');
  cleanString = cleanString.replace(/,/g, '');
  cleanString = cleanString.replace(/&/g, 'and');
  cleanString = cleanString.replace(/\//g, '-');
  cleanString = cleanString.replace(/'/g, '');
  cleanString = cleanString.replace(/\s{2,}/, ' ');
  cleanString = cleanString.replace('"', '');
  cleanString = cleanString.replace('”', '');
  cleanString = _.trim(cleanString);
  cleanString = _.deburr(cleanString);
  return cleanString;
};
