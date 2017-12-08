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



}   

