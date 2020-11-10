/**
 * Repeats a range vertically.
 *
 * @param {Array<any>} range The range to repeat.
 * @param {number} repeats The number of times to repeat. Must be an integer.
 * @param {boolean} hasHeader Does the range have a header? Default is false.
 * @param {boolean} sort Do you want to sort the output? Default is false.
 * @returns The repeated range.
 * @customfunction
 */

function REPEATRANGE(range, repeats, hasHeader = false, sort = false) {
  // Check types.
  
  if(!Array.isArray(range)) range = Array.of(range);
  
  if(!Number.isInteger(repeats)) throw "'repeats' must be an integer.";
  
  if(typeof hasHeader !== "boolean") throw "'hasHeader' must be a boolean.";
  
  if(typeof sort !== "boolean") throw "'sort' must be a boolean.";
  
  // End of types.
  
  var output = [];
  
  if(hasHeader) {
    output.push(range.shift());
  }
  
  for(var i = 0; i < repeats; i++) {
    for(var j = 0; j < range.length; j++) {
      output.push(range[j]);
    }
  }
  
  if(sort) {
    if (hasHeader) {
      var storedHead = output.shift();
      output.sort();
      output.unshift(storedHead);
    } else {
      output.sort();
    }
  }
  
  return output
}
