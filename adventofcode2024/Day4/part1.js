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
for(var l=0; l < arr.length; l++) {	
var lineArr= arr[l].split('');
grid.push(lineArr);
}
// Run the function and print the result
gs.log("Occurrences of 'XMAS':"+countXMAS(grid));

function countXMAS(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const target = "XMAS";
    const targetLength = target.length;
    var count = 0;

	//gs.info('target length: '+targetLength)

    // Define directions: right, down, diagonal-right-down, diagonal-left-down
   const directions = [
        [0, 1],    // Horizontal (right)
        [1, 0],    // Vertical (down)
        [1, 1],    // Diagonal (right-down)
        [1, -1],   // Diagonal (left-down)
        [0, -1],   // Horizontal (left)
        [-1, 0],   // Vertical (up)
        [-1, -1],  // Diagonal (left-up)
        [-1, 1]    // Diagonal (right-up)
    ];
	/* 
	const directions=[
		[0,1],
		[0,-1]
	];
*/
 for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (grid[i][j] == 'X') {  // Only start search if 'X' is found
                for (var dir = 0; dir < directions.length; dir++) {
                    var dx = directions[dir][0];
					var dy = directions[dir][1];
                    if (isXMAS(i, j, dx, dy)) {						
                        count++;
						//gs.info('Updated count :'+count);
                    }
                }
            }
        }
    }

    // Helper function to check if "XMAS" is found from a starting point
    function isXMAS(x, y, dx, dy) {
		           // 0,5,0,1
        for (var t = 0; t < targetLength; t++) {
			//gs.info(x+','+y+' inside isXMAS dx= '+dx+' dy='+dy+' t='+t.toString());
            var newX = x + (t * dx);
            var newY = y + (t * dy);
			//gs.info('newX='+newX+' newy='+newY+' GridXY='+grid[newX][newY]+' Target='+target[t]);
            if (newX < 0 || newY < 0 || newX >= rows || newY >= cols || grid[newX][newY] != target[t]) {
                return false;
            }
        }		
        return true;
    }
    return count;
}
