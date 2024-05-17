const matrix_01 =()=>{

const tf = require('@tensorflow/tfjs')


// tf.tensor (values, shape?, dtype?) 
const dimention_0 = tf.tensor(1)

// dimention_0.print()
// console.log(dimention_0);
console.log(dimention_0.shape);
console.log(dimention_0.size)
console.log(dimention_0.dtype)


}

module.exports = matrix_01