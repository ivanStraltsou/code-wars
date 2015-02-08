'use strict';

function validBraces(inputString) {
  var i, inputStringLength, isValid, bracesStack, char;

  bracesStack = [];
  inputString = String(inputString);
  inputStringLength = inputString.length;
  isValid = inputStringLength > 1;

  for (i = 0; i < inputStringLength && isValid; i++) {
    char = inputString[i];

    if (char in validBraces.bracesMatch) {
      bracesStack.push(char);
    } else if (validBraces.isClosingBrace(char)) {
      if (validBraces.bracesMatch[bracesStack.pop()] !== char) {
        isValid = false;
      }
    }
  }

  return isValid && bracesStack.length === 0;
}

validBraces.closingBraces = ['}', ']', ')'];
validBraces.bracesMatch = {
  '[': ']',
  '(': ')',
  '{': '}'
};
validBraces.isClosingBrace = function(brace) {
  return validBraces.closingBraces.indexOf(brace) !== -1;
};
