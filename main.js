// Create class to hold possible numbers for each empty cell
class emptyCell {
    constructor() {
        this.possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
}

// full 2d sudoku puzzle
let puzzle = [[null, null, null, null, 1, null, 7, 2, null],
              [null, null, 3, 2, 7, 8, null, 9, null],
              [null, 5, 7, null, null, null, 3, null, 8],
              [null, null, null, 9, 6, null, null, 7, 1],
              [null, null, null, null, 8, 2, null, 6, 3],
              [1, 9, 6, null, null, null, null, 4, 2],
              [3, null, 8, null, 2, 9, null, null, 4],
              [null, null, 9, null, 5, 1, null, null, null],
              [null, 6, null, 7, null, 3, null, 8, 9]];

puzzle.solved = false;

function solvePuzzle(){
    while (!puzzle.solved) { //while the puzzle is not solved
        for (let row = 0; row < puzzle.length; row++) { //search each row
            for (let column = 0; column < puzzle[row].length; column++) { //search each cell inside each row
                if (puzzle[row][column] == null) {  //if the cell is empty
                    puzzle[row][column] = new emptyCell(); // add 1-9 to possible numbers
                    updatePossibleNumbers(row, column); // remove numbers not possible
                    console.log(puzzle[row][column].possibleNumbers) //print update possible numbers
                }
                puzzle.solved = true; //end loop after one cycle
            }
        }
    }
}

// remove numbers not possible
function updatePossibleNumbers(cellRow, cellColumn) {
    removeNumbersInRow(cellRow, cellColumn); // remove numbers in row from possible numbers
    removeNumbersInColumn(cellRow, cellColumn); // remove numbers in column from possible numbers
}

function removeNumbersInRow(cellRow, cellColumn) {
    for (let column = 0; column < puzzle[cellRow].length; column++) { // search each cell inside the current row
        if ((typeof(puzzle[cellRow][column])) == "number") { // if the cell contains a number:
            let possibleNumbers = puzzle[cellRow][cellColumn].possibleNumbers; // simplified for readability
            let index = possibleNumbers.indexOf(puzzle[cellRow][column]); // simplified for readability
            if (index > -1) { // if the number is found in "possibleNumbers"
                possibleNumbers.splice(index, 1); // remove the number from possibe numbers
            }
        }
    }
}

function removeNumbersInColumn(cellRow, cellColumn) {
    for (let row = 0; row < puzzle.length; row++) { //search each cell in the current column
        if (typeof(puzzle[row][cellColumn]) == "number") {
            let possibleNumbers = puzzle[cellRow][cellColumn].possibleNumbers; // simplified for readability
            let index = possibleNumbers.indexOf(puzzle[row][cellColumn]); // simplified for readability
            if (index > -1) { // if the number is found in "possibleNumbers"
                possibleNumbers.splice(index, 1); // remove the number from possibe numbers
            }
        }
    }
}

solvePuzzle(); //run
