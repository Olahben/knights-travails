import searchForPath from "./search.js";
import buildTree from "./buildPath.js";
import board from "./board.js";
import knight from "./knight.js";
import { getParents } from "./buildPath.js";

const knightPosition = knight([6, 4]).position;
const tree = buildTree([5, 1], knightPosition);
console.log(tree);
const parentsArr = getParents();
console.log(parentsArr);
// searchForPath(tree, knightPosition, []);
