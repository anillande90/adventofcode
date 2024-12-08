var input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

var safeCount = 0;
input = input.split('\n');

for (var indx in input) {
    var this_line = input[indx].split(' ');
    //gs.info('Validating report ' + this_line);
    var isAssending = isSortedAssending(this_line);
    var isDescending = isSortedDesending(this_line);
    //gs.info(indx+' Report is asc='+isAssending+' and desc='+isDescending+' for '+this_line);
    if (isAssending || isDescending) {
        var isSafe = checkSafty(this_line);
        if (isSafe) {
            safeCount++;
        } else {
            //gs.info('Report not safe : ' + this_line);
            for (var i = 0; i < this_line.length; i++) {
                var new_line = [];
                new_line = this_line;
                var isSafe = reCheckSafety(input[indx].split(' '), i);
                if (isSafe) {
                    //gs.info(' Report is Safe ' + this_line);
                    safeCount++;
                    break;
                }
            }
        }
    } else {
        for (var i = 0; i < this_line.length; i++) {
            var new_line = [];
            new_line = this_line;
            var isSafe = reCheckSafety(input[indx].split(' '), i);
            if (isSafe) {
                //gs.info(' Report is Safe ' + this_line);
                safeCount++;
                break;
            }
        }
    }
}

function reCheckSafety(arr, index) {
    arr.splice(index, 1);
    //gs.info('New Line : ' + arr);
    isAssending = isSortedAssending(arr);
    isDescending = isSortedDesending(arr);
    if (isAssending || isDescending) {
        var isSafe = checkSafty(arr);
        if (isSafe) {
            //gs.info(' Report is Safe '+safeCount);
            return true;
        }
    }
}

function isSortedAssending(arr) {
    for (var i = 1; i < arr.length; i++) {
        //gs.info(arr[i-1] +' and '+arr[i]);
        if (Number(arr[i - 1]) > Number(arr[i]))
            return false;
    }
    return true;
}

function isSortedDesending(arr) {
    for (var j = 1; j < arr.length; j++) {
        if (Number(arr[j - 1]) < Number(arr[j]))
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
