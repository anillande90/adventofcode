var input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

var arr = input.split('\n');
var grid = [];
for (var l = 0; l < arr.length; l++) {
    var lineArr = arr[l].split('');
    grid.push(lineArr);
}
// Run the function and print the result
gs.log("Occurrences of 'XMAS':" + countXMAS(grid));

function countXMAS(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    var count = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] == 'A') { // if the Center letter'A' is found
                if (isXMAS(i, j)) {
                    count++;
                }
            }
        }
    }
    // Helper function to check if "XMAS" is found from a starting point
    function isXMAS(Ai, Aj) {
        if ((Ai - 1) > -1 && (Aj - 1) > -1 && (Ai + 1) <= rows-1 && (Aj + 1) <= cols-1) {
            var digonalStr1 = grid[Ai - 1][Aj - 1] + 'A' + grid[Ai + 1][Aj + 1];
            var digonalStr2 = grid[Ai + 1][Aj - 1] + 'A' + grid[Ai - 1][Aj + 1];
            if ((digonalStr1 == 'MAS' || digonalStr1 == 'SAM') && (digonalStr2 == 'MAS' || digonalStr2 == 'SAM')) {
                return true;
            }
        }
    }
    return count;
}
