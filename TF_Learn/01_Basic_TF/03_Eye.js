const Eye_03 = ()=>{

const tf = require('@tensorflow/tfjs')



// tf.eye (numRows, numColumns?, batchShape?, dtype?) 

const tensorEye = tf.eye(numRows=3)



// tensorEye.print()
// console.log(tensorEye);



const tensorEyeCol = tf.eye(numRows=3, numColumns=2)
// tensorEyeCol.print()



const tensorEyeBatch = tf.eye(3,4,[2],'int32')
tensorEyeBatch.print()
console.log(tensorEyeBatch);



















}
module.exports = Eye_03
