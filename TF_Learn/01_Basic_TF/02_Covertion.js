const connvertion_01 =()=>{
    const tf = require('@tensorflow/tfjs')


    const data = tf.tensor([1,2,3,4,5,0],[3,2])

    const intCast = tf.cast(data,'int32')
    // console.log(intCast);


    const complexCast = tf.cast(data,'complex64')
    // complexCast.print()
    // console.log(complexCast);


    const boolCast = tf.cast(data,'bool')
    // boolCast.print()
    // console.log(boolCast);


    const changeBoolCast = tf.cast(boolCast,'int32')
    // changeBoolCast.print()






    const strVal = tf.tensor(['a','b','c'])
    strVal.print()
    // console.log(tf.cast(strVal,'bool')); XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx












    


}
module.exports = connvertion_01