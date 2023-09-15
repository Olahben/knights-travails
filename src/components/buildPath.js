import knight from "./knight.js";
import board from "./board.js";

function buildPath(position) {
  const knightPosition = knight([0, 0]).position;
  const boardArr = board();
  // console.log(knightPosition, boardArr);

  function buildTree(arr) {
    const root = knightPosition;
    root.first =
      root[0] - 2 >= 0 && root[1] - 1 >= 0 ? [root[0] - 2, root[1] - 1] : false;
    root.second =
      root[0] - 2 >= 0 && root[1] + 1 < 8 ? [root[0] - 2, root[1] + 1] : false;
    root.third =
      root[0] - 1 >= 0 && root[1] - 2 >= 0 ? [root[0] - 1, root[1] - 2] : false;
    root.fourth =
      root[0] - 1 >= 0 && root[1] + 2 < 8 ? [root[0] - 1, root[1] + 2] : false;
    root.fifth =
      root[0] + 1 < 8 && root[1] - 2 >= 0 ? [root[0] + 1, root[1] - 2] : false;
    root.sixth =
      root[0] + 1 < 8 && root[1] + 2 < 8 ? [root[0] + 1, root[1] + 2] : false;
    root.seventh =
      root[0] + 2 < 8 && root[1] - 1 >= 0 ? [root[0] + 2, root[1] - 1] : false;
    root.eighth =
      root[0] + 2 < 8 && root[1] + 1 < 8 ? [root[0] + 2, root[1] + 1] : false;
    console.log(root);
  }
  buildTree(boardArr);
}
buildPath([0, 0]);
