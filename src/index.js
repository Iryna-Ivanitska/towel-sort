
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || (matrix.length == 0)) return [];

  let newMatrix = [];
  matrix.forEach( (element, index) => {
    if ((index+1) % 2 === 0) {newMatrix.push(element.reverse())} else {
      newMatrix.push(element)
    } 
  } )
  return Array.prototype.concat.apply([], newMatrix);
}
