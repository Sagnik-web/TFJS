const oneLike_05 = ()=>{

const tf = require('@tensorflow/tfjs')

const val = tf.tensor([[12,14,16],[17,18,19]])

// console.log(val);

val.print()


const oncesLike = tf.onesLike(val)
oncesLike.print()


















}

module.exports = oneLike_05