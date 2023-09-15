import knight from "./knight.js";
import board from "./board.js";

function buildPath(position) {
  const knightPosition = knight([3, 3]).position;
  const boardArr = board();
  // console.log(knightPosition, boardArr);

  function buildTree(arr) {
    const root = knightPosition;
    for (let i = 0; i < 9; i += 1) {
      console.log(root);
      if (root[0] - 2 > 0 && root[1] - 1 > 0) {
        root.first = root.forEach((ele, index) => {
          // console.log(ele, index);
        });
      }
    }
  }
  buildTree(boardArr);
}
buildPath([3, 3]);
