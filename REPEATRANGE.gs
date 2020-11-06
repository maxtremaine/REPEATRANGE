/**
 * Repeats a range multiple times in the same column.
 *
 * @param {object} range The range to repeat.
 * @param {number} repeats The number of times to repeat.
 * @param {boolean} hasHeader Does the range have a header?
 * @param {boolean} sort Do you want to sort the output?
 * @returns The repeated range.
 * @customfunction
 */

function REPEATRANGE(range, repeats, hasHeader, sort) {
  var output = [];
  
  if(typeof range !== "object") {
    throw new Error("A range was not provided.");
  }
  
  if(typeof repeats === "undefined") {
    throw new Error("A number of repeats was not provided.");
  }
  
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
