/**
 * Get sum of array elements
 * @param Array
 */
function array_sum(arr,callback){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if (isNaN(arr[i]) == false){
            sum += arr[i];
        }
    }

    if (callback != undefined){
        callback();
    }
    return sum;
}

/**
 * Find min and max keys or values in array
 * @param Array, Boolean
 * @returns Array [min, max]
 */
function find_min_max(arr, keys_only){
    var max = arr[0]; min = arr[0];
    var max_index = 0; min_index = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
            max_index = i;
        } else
        if (arr[i]<min){
            min = arr[i];
            min_index = i;
        }
    }

    if (keys_only) {
        return [min_index, max_index];
    } else {
        return [min, max];
    }
}


/**
 * Replace min and max elements in array
 * @param Array
 * @returns Array
 */
function swap_min_max(arr){
    var min_max_index_array = find_min_max(arr, true),
        temp_max_value = arr[min_max_index_array[1]],
        swapped_arr = arr.slice();

    swapped_arr[min_max_index_array[1]] = swapped_arr[min_max_index_array[0]];
    swapped_arr[min_max_index_array[0]] = temp_max_value;

    return swapped_arr;
}

/**
 * Gen object from all data
 * @param arr
 * @returns {Object}
 */
function gen_object(arr){
    var sum = array_sum(arr),
        min_max = find_min_max(arr),
        swapped_arr = swap_min_max(arr),
        obj = new Object();
    obj.sum = sum;
    obj.min = min_max[0];
    obj.max = min_max[1];
    obj.swapped_arr = swapped_arr;
    obj.orig_arr = arr;
    return obj;
}

function arr_to_obj(arr){
   var obj = new Object();
    for (var i=0; i<arr.length;i++){
        obj[i]=arr[i];
    }
    return obj;
}

//var arr = [-1,9454545,-88,3];

var test_arrays = [
    [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1],
    [-1,-8,-2],
    [1,7,3],
    [1,undefined,3,5,-3],
    [1,NaN,3,5,-3]
];

for (var i = 0; i < test_arrays.length; i++) {
    console.log(gen_object(test_arrays[i]));
    console.log(arr_to_obj(test_arrays[i]));
}

array_sum(test_arrays[0], function(){
   console.log('Sum is done');
});



//var test_array = [1,3,5,-3];
//var arr = [3,2,5,6,'olha'];
//console.log(array_sum(test_array));
//console.log(find_min_max(test_array));
//console.log(swap_min_max(test_array));
//console.log('-----------------------');
//console.log(find_min_max(arr, true));
