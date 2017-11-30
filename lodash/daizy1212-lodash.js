var daizy1212 = {
    chunk: function (array,length=1){
        var result = [];
        for(i = 0; i < array.length; i +=length){
            result.push(array.slice(i,i+length));
        }
         return result;
    },
}

