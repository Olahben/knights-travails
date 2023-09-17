import knight from "./knight.js";

function buildPath(position, desiredPosition) {
  const knightPosition = knight(position).position;

  function buildTree(root) {
    console.log("root", root, "desired position:", desiredPosition);
    // if (JSON.stringify(root) === JSON.stringify(desiredPosition)) return root;
    const newRoot = {
      move: root.move,
      possibilities: {},
    };
    // console.log(newRoot);
    // Assigns all possible moves
    newRoot.possibilities.first =
      root.move[0] - 2 >= 0 && root.move[1] - 1 >= 0 ? [root.move[0] - 2, root.move[1] - 1] : false;
    newRoot.possibilities.second =
      root.move[0] - 2 >= 0 && root.move[1] + 1 < 8 ? [root.move[0] - 2, root.move[1] + 1] : false;
    newRoot.possibilities.third =
      root.move[0] - 1 >= 0 && root.move[1] - 2 >= 0 ? [root.move[0] - 1, root.move[1] - 2] : false;
    newRoot.possibilities.fourth =
      root.move[0] - 1 >= 0 && root.move[1] + 2 < 8 ? [root.move[0] - 1, root.move[1] + 2] : false;
    newRoot.possibilities.fifth =
      root.move[0] + 1 < 8 && root.move[1] - 2 >= 0 ? [root.move[0] + 1, root.move[1] - 2] : false;
    newRoot.possibilities.sixth =
      root.move[0] + 1 < 8 && root.move[1] + 2 < 8 ? [root.move[0] + 1, root.move[1] + 2] : false;
    newRoot.possibilities.seventh =
      root.move[0] + 2 < 8 && root.move[1] - 1 >= 0 ? [root.move[0] + 2, root.move[1] - 1] : false;
    newRoot.possibilities.eighth =
      root.move[0] + 2 < 8 && root.move[1] + 1 < 8 ? [root.move[0] + 2, root.move[1] + 1] : false;
    return newRoot;
  }
  const result = buildTree({
    move: knightPosition,
    possibilities: {},
  });
  console.log(result);
}
buildPath([4, 4], [3, 3]);
