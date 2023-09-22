import knight from "./knight.js";

function buildPath(position, desiredPosition) {
  const knightPosition = knight(position).position;

  function buildTree(root) {
    console.log(root.first, desiredPosition);
    if (JSON.stringify(root.first) === JSON.stringify(desiredPosition)) return;
    // Assigns all possible moves
    root.possibilities.first =
      root.first[0] - 2 >= 0 && root.first[1] - 1 >= 0
        ? [root.first[0] - 2, root.first[1] - 1]
        : false;
    root.possibilities.second =
      root.first[0] - 2 >= 0 && root.first[1] + 1 < 8
        ? [root.first[0] - 2, root.first[1] + 1]
        : false;
    root.possibilities.third =
      root.first[0] - 1 >= 0 && root.first[1] - 2 >= 0
        ? [root.first[0] - 1, root.first[1] - 2]
        : false;
    root.possibilities.fourth =
      root.first[0] - 1 >= 0 && root.first[1] + 2 < 8
        ? [root.first[0] - 1, root.first[1] + 2]
        : false;
    root.possibilities.fifth =
      root.first[0] + 1 < 8 && root.first[1] - 2 >= 0
        ? [root.first[0] + 1, root.first[1] - 2]
        : false;
    root.possibilities.sixth =
      root.first[0] + 1 < 8 && root.first[1] + 2 < 8
        ? [root.first[0] + 1, root.first[1] + 2]
        : false;
    root.possibilities.seventh =
      root.first[0] + 2 < 8 && root.first[1] - 1 >= 0
        ? [root.first[0] + 2, root.first[1] - 1]
        : false;
    root.possibilities.eighth =
      root.first[0] + 2 < 8 && root.first[1] + 1 < 8
        ? [root.first[0] + 2, root.first[1] + 1]
        : false;

    for (let i = 0; i < Object.keys(root.possibilities).length; i += 1) {
      const keys = Object.keys(root.possibilities);
      const key = keys[i];
      const newRoot = {
        first: root.possibilities[key],
        possibilities: {},
      };
      console.log(newRoot);
      if (root.possibilities[key]) {
        // buildTree(newRoot);
      }
    }
    console.log(root);
  }
  const result = buildTree({
    first: knightPosition,
    possibilities: {},
  });
  console.log(result);
}
buildPath([4, 4], [3, 3]);
