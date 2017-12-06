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
 * @returns 
 */
difference: function difference(array, [values]){
        var diff = [];
        var i = 0;
        while(i < array.length){
          if  ([values].indexOf(array[i]) === -1 ){
               diff.push(array[i]);
          }   i++;
        } return diff;
    },
/**
 * 
 * 
 * @param {any} collection 
 * @param {any} output 
 */
forEach: function forEach(collection,output) {
    let n = collection.length;
    for(i = 0 ; i < n ; i++){
       output (collection[i]);
    }
   }    
}

