const zeroLike_07 = ()=>{

const tf = require('@tensorflow/tfjs')

const val = tf.tensor([[12,14,16],[17,18,19]])

// console.log(val);

val.print()


const zeroLike = tf.zerosLike(val)
zeroLike.print()


















}

module.exports = zeroLike_07