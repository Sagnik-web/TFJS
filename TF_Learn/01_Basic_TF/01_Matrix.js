const matrix_01 =()=>{

const tf = require('@tensorflow/tfjs')


// tf.tensor (values, shape?, dtype?) 
const dimention_0 = tf.tensor(1)

// dimention_0.print()
// console.log(dimention_0);
// console.log(dimention_0.shape);
// console.log(dimention_0.size)
// console.log(dimention_0.dtype)


const dimention1D = tf.tensor([12,15,16,19])
// dimention1D.print()
// console.log(dimention1D.dtype); //By Default Datatype float32


const dimention2D = tf.tensor([12,15,16,17],[2,2],'int32')
// dimention2D.print()
// console.log(dimention2D);


const dimention3D  = tf.tensor([[[12,14],[19,16]],[[10,40],[90,66]]])
console.log(dimention3D);

















}

module.exports = matrix_01