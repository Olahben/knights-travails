import knight from "./knight.js";

function buildPath(position, desiredPosition) {
  const knightPosition = knight(position).position;
  const moves = new Set();
  const queue = [];

  function createDataStructure(initMove) {
    const dataStructure = {
      move: initMove,
      possibilities: {
        first: null,
        second: null,
        third: null,
        fourth: null,
        fifth: null,
        sixth: null,
        seventh: null,
        eighth: null,
      },
    };

    return dataStructure;
  }

  const initRoot = createDataStructure(position);
  queue.push(initRoot);

  function createPossibilities(root) {
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

    return root;
  }

  while (queue.length !== 0) {
    if (JSON.stringify(queue[0].move) === JSON.stringify(desiredPosition)) {
      console.log("Position found!");
      console.log(initRoot.possibilities.fifth.possibilities.second);
      return initRoot;
    }
    const move = queue[0];
    // console.log("move:", move);
    const newNode = createPossibilities(move);
    // console.log(newNode);
    queue.shift();
    queue.push(newNode.possibilities.first);
    queue.push(newNode.possibilities.second);
    queue.push(newNode.possibilities.third);
    queue.push(newNode.possibilities.fourth);
    queue.push(newNode.possibilities.fifth);
    queue.push(newNode.possibilities.sixth);
    queue.push(newNode.possibilities.seventh);
    queue.push(newNode.possibilities.eighth);
  }
}
buildPath([4, 4], [3, 3]);
