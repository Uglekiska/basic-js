import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
let newMatrix = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let newMatrix2 = [
  [null, null, null],
  [null, null, null]
];

export default function minesweeper(matrix) {
  if (matrix.length === 3) {
    newMatrix[0][0] = matrix[0][1] / 1 + matrix[1][1] / 1 + matrix[1][0] / 1; //1
    newMatrix[0][1] = matrix[0][0] / 1 + matrix[1][0] / 1 + matrix[1][1] / 1 + matrix[1][2] / 1 + matrix[0][2] / 1; //2
    newMatrix[0][2] = matrix[0][1] / 1 + matrix[1][1] / 1 + matrix[1][2] / 1; //3
    newMatrix[1][0] = matrix[0][0] / 1 + matrix[0][1] / 1 + matrix[1][1] / 1 + matrix[2][0] / 1 + matrix[2][1] / 1; //4
    newMatrix[1][1] = matrix[0][0] / 1 + matrix[0][1] / 1 + matrix[0][2] / 1 + matrix[1][0] / 1 + matrix[1][2] / 1 + matrix[2][0] / 1 + matrix[2][1] / 1 + matrix[2][2] / 1; //5
    newMatrix[1][2] = matrix[0][1] / 1 + matrix[0][2] / 1 + matrix[1][1] / 1 + matrix[2][1] / 1 + matrix[2][2] / 1; //6
    newMatrix[2][0] = matrix[1][0] / 1 + matrix[1][1] / 1 + matrix[2][1] / 1; //7
    newMatrix[2][1] = matrix[1][0] / 1 + matrix[1][1] / 1 + matrix[1][2] / 1 + matrix[2][0] / 1 + matrix[2][2] / 1; //8
    newMatrix[2][2] = matrix[1][1] / 1 + matrix[1][2] / 1 + matrix[2][1] / 1; //9
    return newMatrix;
  } else if (matrix.length === 2) {
    newMatrix2[0][0] = matrix[0][1] / 1 + matrix[1][1] / 1 + matrix[1][0] / 1; //1
    newMatrix2[0][1] = matrix[0][0] / 1 + matrix[1][0] / 1 + matrix[1][1] / 1 + matrix[1][2] / 1 + matrix[0][2] / 1; //2 up
    newMatrix2[0][2] = matrix[0][1] / 1 + matrix[1][1] / 1 + matrix[1][2] / 1; //3
    newMatrix2[1][0] = matrix[0][0] / 1 + matrix[0][1] / 1 + matrix[1][1] / 1; //4
    newMatrix2[1][1] = matrix[0][0] / 1 + matrix[0][1] / 1 + matrix[0][2] / 1 + matrix[1][0] / 1 + matrix[1][2] / 1; //5
    newMatrix2[1][2] = matrix[1][1] / 1 + matrix[0][1] / 1 + matrix[0][2] / 1; //6
    return newMatrix2;
  }
};