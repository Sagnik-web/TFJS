const random_09 =()=>{

const tf = require('@tensorflow/tfjs')


const randomGamma = tf.randomGamma([3,3],1)
randomGamma.print()








}


module.exports = random_09