
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    } else if (matrix.length==0) {
            return [];
    } else {
         return matrix.sort((a,b)=>{
            return a-b;
        });
    }
}
