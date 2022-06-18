const universe = [
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
// [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
// [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

// [0, 0, 0, 0, a, b, c, 0, 0, 0],
// [0, 0, 0, 0, d, 1, e, 0, 0, 0],
// [0, 0, 0, 0, f, g, h, 0, 0, 0],

function next(cells) {
  const result = [];
  for (let row = 0; row < cells.length; row++) {
    result.push([])
    for (let col = 0; col < cells[row].length; col++) {
      let a = cells[row - 1]?.[col - 1] || 0;
      let b = cells[row - 1]?.[col] || 0;
      let c = cells[row - 1]?.[col + 1] || 0;
      let d = cells[row]?.[col - 1] || 0;
      let e = cells[row]?.[col + 1] || 0;
      let f = cells[row + 1]?.[col - 1] || 0;
      let g = cells[row + 1]?.[col] || 0;
      let h = cells[row + 1]?.[col + 1] || 0;
      let neighboursAlive = a + b + c + d + e + f + g + h;
      let currentState = cells[row][col]
      let nextState = checkRules(currentState, neighboursAlive)
      result[row].push(nextState)
    }
  }
  return result;
}

function checkRules(cellState, neighboursAlive) {
  if (cellState == 0) {
    return neighboursAlive == 3 ? 1 : 0;
  }
  if(neighboursAlive == 2 || neighboursAlive == 3) {
    return 1
  }
  return 0
}

let tick1 = universe;
let tick2 = next(tick1);
let tick3 = next(tick2);
let tick4 = next(tick3);
let tick5 = next(tick4);
let tick6 = next(tick5);
let tick7 = next(tick6);
let tick8 = next(tick7);
console.log(tick1, tick2, tick3, tick4, tick5, tick6, tick7, tick8);

// Next function:
// draw(tick1)
// erase(tick1); draw(tick2)
// erase(tick2); draw(tick3)

// Rules of the Game:
// Any live cell with fewer than two neighbours dies, by underpopulation.
// Any live cell with two or three neighbours lives on the next generation.
// Any live cell with more than three neighbours dies, by overpopulation.
// Any dead cell with exactly three neighbours becomes a live cell, by reproduction.
