import knight from "./knight.js";

function buildPath(position, desiredPosition) {
  const knightPosition = knight(position).position;
  const moves = new Set();

  function createDataStructure(initMove) {
    const dataStructure = {
      move: initMove,
      possibilities: {
        first: {},
        second: {},
        third: {},
        fourth: {},
        fifth: {},
        sixth: {},
        seventh: {},
        eighth: {},
      },
    };

    return dataStructure;
  }

  function buildTree(root) {
    console.log(root, desiredPosition);
    if (JSON.stringify(root.move) === JSON.stringify(desiredPosition)) {
      console.log("Position found!");
      return root;
    }
    if (moves.has(JSON.stringify(root.move))) return root;
    moves.add(JSON.stringify(root.move));
    // Assigns all possible moves
    console.log("Root before assigning:", root);
    root.possibilities.first = createDataStructure(
      root.move[0] - 2 >= 0 && root.move[1] - 1 >= 0
        ? [root.move[0] - 2, root.move[1] - 1]
        : false
    );
    root.possibilities.second = createDataStructure(
      root.move[0] - 2 >= 0 && root.move[1] + 1 < 8
        ? [root.move[0] - 2, root.move[1] + 1]
        : false
    );
    root.possibilities.third = createDataStructure(
      root.move[0] - 1 >= 0 && root.move[1] - 2 >= 0
        ? [root.move[0] - 1, root.move[1] - 2]
        : false
    );
    root.possibilities.fourth = createDataStructure(
      root.move[0] - 1 >= 0 && root.move[1] + 2 < 8
        ? [root.move[0] - 1, root.move[1] + 2]
        : false
    );
    root.possibilities.fifth = createDataStructure(
      root.move[0] + 1 < 8 && root.move[1] - 2 >= 0
        ? [root.move[0] + 1, root.move[1] - 2]
        : false
    );
    root.possibilities.sixth = createDataStructure(
      root.move[0] + 1 < 8 && root.move[1] + 2 < 8
        ? [root.move[0] + 1, root.move[1] + 2]
        : false
    );
    root.possibilities.seventh = createDataStructure(
      root.move[0] + 2 < 8 && root.move[1] - 1 >= 0
        ? [root.move[0] + 2, root.move[1] - 1]
        : false
    );
    root.possibilities.eighth = createDataStructure(
      root.move[0] + 2 < 8 && root.move[1] + 1 < 8
        ? [root.move[0] + 2, root.move[1] + 1]
        : false
    );

    console.log("Root after assigning:", root);

    /* root.possibilities.first =
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
        : false; */

    for (let i = 0; i < Object.keys(root.possibilities).length; i += 1) {
      const keys = Object.keys(root.possibilities);
      const key = keys[i];
      console.log("calling:", root.possibilities[key].move);
      if (root.possibilities[key].move) {
        buildTree(createDataStructure(root.possibilities[key].move));
      }
    }
    return root;
  }
  const result = buildTree(createDataStructure(knightPosition));
  console.log(result.possibilities.first);
}
buildPath([4, 4], [3, 3]);
