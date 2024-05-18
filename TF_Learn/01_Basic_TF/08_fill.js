const fill_08 =()=>{

const tf = require('@tensorflow/tfjs')



const fillTensor = tf.fill([2,2,2],23)

fillTensor.print()





}


module.exports = fill_08
