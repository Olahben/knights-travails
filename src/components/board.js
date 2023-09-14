function board() {
  const gameboard = [];

  // creates 8x8 chess gameboard
  for (let i = 0; i < 8; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      gameboard.push([i, j]);
    }
  }
  return { gameboard };
}

// export default board;
