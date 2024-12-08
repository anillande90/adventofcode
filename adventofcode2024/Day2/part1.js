var input = `75 78 81 82 80
1 2 6 8 12
55 58 60 63 65`;
var safeCount = 0;
input = input.split('\n');

for (var indx in input) {
    var this_line = input[indx].split(' ');
    var isAssending = isSortedAssending(this_line);
    var isDescending = isSortedDesending(this_line);
	//gs.info(indx+' Report is asc='+isAssending+' and desc='+isDescending+' for '+this_line);
    if (isAssending || isDescending) {
        var isSafe = checkSafty(this_line);
        if (isSafe) {
            //gs.info(' Report is Safe '+safeCount);
            safeCount++;
        } else {
            //gs.info(' is NotSafe : ');
        }
    }
}
function isSortedAssending(arr) {
    for (var i = 1; i < arr.length; i++) {
		gs.info(arr[i-1] +' and '+arr[i]);
        if(Number(arr[i-1]) > Number(arr[i]))
            return false;
    }
    return true;
}

function isSortedDesending(arr) {
    for (var j = 1; j < arr.length; j++) {
        if (Number(arr[j-1]) < Number(arr[j]))
            return false;
    }
    return true;
}
function checkSafty(arr) {
    for (var k = 0; k < arr.length - 1; k++) {
        if ((Math.abs(arr[k] - arr[k + 1]) == 0) || (Math.abs(arr[k] - arr[k + 1]) > 3))
            return false;
    }
    return true;
}
gs.info("total = " + safeCount);
