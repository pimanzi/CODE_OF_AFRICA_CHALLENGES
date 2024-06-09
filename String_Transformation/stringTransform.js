/**
 * Performs some operations on a string based on its length.
 *
 * @param {string} string - The string to be manipulated.
 * @returns {string} - The manipulated string based on its length.
 */
function stringTransform(string = '') {
  let length = string.length;

  // If the length of the string is divisible by both 3 and 5, handle it first
  if (length % 3 === 0 && length % 5 === 0) {
    let list = string.split('').reverse();
    let newStr = list.join('');
    let charCodes = [];
    for (let i = 0; i < length; i++) {
      let charCharacter = newStr.charCodeAt(i);
      charCodes.push(charCharacter);
    }

    return charCodes.join(' ');
  }

  // If the length of the string is divisible by 3, reverse the string
  if (length % 3 === 0) {
    let list = string.split('').reverse();
    return list.join('');
  }

  // If the length of the string is divisible by 5, convert each character to its ASCII code and concatenate
  if (length % 5 === 0) {
    let charCodes = [];
    for (let i = 0; i < length; i++) {
      let charCharacter = string.charCodeAt(i);
      charCodes.push(charCharacter);
    }

    return charCodes.join(' ');
  }

  // If none of the above conditions are met, return an appropriate message
  return 'Your string is neither fully divisible by 3 nor 5';
}
