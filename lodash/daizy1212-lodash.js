var daizy1212 = {
    /**
     * 
     * 
     * @param {any} array 
     * @param {number} [length=1] 
     * @returns 
     */
    chunk: function (array,length=1){
        var result = [];
        for(i = 0; i < array.length; i +=length){
            result.push(array.slice(i,i+length));
        }
         return result;
    },
    /**
     * 
     * 
     * @param {array} array 
     * @returns {array}
     */
    compact: function compact(array) {
        var res = [];
        for(i = 0; i < array.length; i++){
        if(array[i]){
            res.push(array[i]);
            }
        } return res;
    } , 
    /**
     * 
     * 
     * @param {any} array 
     * @param {any} [values] 
     * @returns 
     */
    concat: function concat(array,[values]){
        var newary = [];
        for( i = 0; i < array.length ; i++ ){
                newary.push(array[i]);
        }
        newary.push(value);
        return newary;
    },
/**
 * 
 * 
 * @param {any} array 
 * @param {any} [values] 
 * @returns  array
 */
difference: function difference(array, ...values){
        var diff = [];
        var i = 0;
        var j = 0;
        var combinevalues = [];
        while(values[j]){
            combinevalues += values.concat(values[j]);
            j++;
        }
        while(i < array.length){
          if  (combinevalues.indexOf(array[i]) === -1 ){
               diff.push(array[i]);
          }   i++;
        } return diff;
    },
/**
 * 
 * 
 * @param {any} array 
 * @param {any} value 
 * @param {any} start 
 * @param {any} end 
 * @returns 
 */
fill : function fill(array,value,start,end){
        start === undefined?start = 0:start >= 0 ? start:start = array.length + start;
        end === undefined?end = array.length:end >= 0 ? end : end = array.length + end;
           while(start < end){
                array[start] = value;
                start++;
            }
            return array;
    },
/**
 * 
 * 
 * @param {any} array 
 * @param {any} n 
 * @returns {array}
 */
drop: function drop(array,n){
    n === undefined ? n = 1:n;
    if(array.length === 0 || n >= array.length){
        return (array = []);
    }
    for(i = 0 ; i < n ; i++){
         array.shift(i);
    } return array;
},
/**
 * 
 * 
 * @param {any} array 
 * @param {any} n 
 * @returns {array}
 */
dropRight: function dropRight(array,n){
    n === undefined ? n = 1:n;
    if(array.length === 0 || n >= array.length){
        return (array = []);
    }
    for(i = 0 ; i < n ; i++){
         array.pop(i);
    } return array;
},
/**
 * 
 * 
 * @param {any} array 
 * @returns {array}
 */
flatten: function flatten(array) {
    for (i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            var newary = array[i];
            array.splice(i, 1);
            for (j = 0; j < newary.length; j++) {
                array.splice(i, 0, newary[j]);
                i++;
            } i--;
        }
    }
    return array;
},
/**
 * 
 * 
 * @param {any} array 
 * @returns 
 */
flattenDeep:function flattenDeep(array) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            var newary = array[i];
            array.splice(i, 1);
            for (j = 0; j < newary.length; j++) {
                array.splice(i, 0, newary[j]);
                i++;
            }
            i--;
        } else {
            count++;
        }
    }
    if (count === array.length) {
        return array
    } else {
        return flattenDeep(array);
    }
},
/**
 * 
 * 
 * @param {any} array 
 * @param {any} n 
 * @returns 
 */
flattenDepth:function flattenDepth(array,n) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            var newary = array[i];
            array.splice(i, 1);
            for (j = 0; j < newary.length; j++) {
                array.splice(i, 0, newary[j]);
                i++;
                count++;
            }
            i--;
           
            if (count === n) {
        return array
    } else {
        return flattenDepth(array,n);
    }

        } 
    }  
},
/**
 * 
 * 
 * @param {any} pairs 
 * @returns {object}
 */
fromPairs: function fromParis(pairs){
    var oj = {};
    for(i = 0 ; i < pairs.length; i++){
        oj[pairs[i][0]] = pairs[i][1];
    } return oj;
},
/**
 * 
 * 
 * @param {any} array 
 * @returns 
 */
head: function head(array){
    return array[0];
},
/**
 * 
 * 
 * @param {any} array 
 * @param {any} value 
 * @param {any} start 
 * @returns {number}
 */
indexOf: function indexOf(array, value, start) {
    start === undefined ? start = 0 : start >= 0 ? start :start = 0 ;
    if (start >= array.length ) {
       return -1;
    }
    for (i = start; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;

},
/**
 * 
 * 
 * @param {any} array 
 * @returns {array}
 */
initial: function initial(array){
    if(array.length === 0){
        return array;
    }
     array.splice(array.length-1);
     return array;
},
/**
 * 
 * 
 * @param {any} arrays 
 * @returns {arrary}
 */
intersection: function intersection(...arrays) {
    let bigary = [];
    let newary = [];
    for (i = 0; i < arrays.length; i++) {
        if (arrays[i] === []) {
            return arrays[i];
        }
        bigary = bigary.concat(arrays[i]);
    }
    for (j = 0; j < arrays[0].length; j++) {
        let k = bigary.indexOf(arrays[0][j], j);
        let count = 0;
        while (k !== -1) {
            count++;
            k = bigary.indexOf(arrays[0][j], k + 1);
        }
        if (count === arrays.length) {
            newary.push(arrays[0][j]);
        }
    }
    return newary;
},

}   

