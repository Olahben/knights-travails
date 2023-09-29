const parent = {};

export function getParents() {
  return parent;
}

function buildTree(position, desiredPosition) {
  const knightPosition = position;
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

  const initRoot = createDataStructure(knightPosition);
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
      return initRoot;
    }
    const move = queue[0];
    const newNode = createPossibilities(move);
    queue.shift();
    // Store parent of possibilities, and push possibilities into the queue
    queue.push(newNode.possibilities.first);
    parent[JSON.stringify(newNode.possibilities.first.move)] = JSON.stringify(
      newNode.move
    );
    queue.push(newNode.possibilities.second);
    parent[JSON.stringify(newNode.possibilities.second.move)] = JSON.stringify(
      newNode.move
    );
    queue.push(newNode.possibilities.third);
    parent[JSON.stringify(newNode.possibilities.third.move)] = JSON.stringify(
      newNode.move
    );
    queue.push(newNode.possibilities.fourth);
    parent[JSON.stringify(newNode.possibilities.fourth.move)] = JSON.stringify(
      newNode.move
    );
    queue.push(newNode.possibilities.fifth);
    parent[JSON.stringify(newNode.possibilities.fifth.move)] = JSON.stringify(
      newNode.move
    );
    queue.push(newNode.possibilities.sixth);
    parent[JSON.stringify(newNode.possibilities.sixth.move)] = JSON.stringify(
      newNode.move
    );
    queue.push(newNode.possibilities.seventh);
    parent[JSON.stringify(newNode.possibilities.seventh.move)] = JSON.stringify(
      newNode.move
    );
    queue.push(newNode.possibilities.eighth);
    parent[JSON.stringify(newNode.possibilities.eighth.move)] = JSON.stringify(
      newNode.move
    );
  }
}
// const tree = buildTree([4, 4], [3, 3]);
// console.log(tree);

export default buildTree;
