const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {


  if (arrayOfString == (null || undefined)) {
    undefined

  } else {

    let arrString = arrayOfString[0].length
    let objequal = []



    for (let i = 0; i < arrayOfString.length; i++) {

      if (arrayOfString[i].length > arrString) {
        arrString = arrayOfString[i].length
      }
    }

    for (let i = 0; i < arrayOfString.length; i++) {
      if (arrayOfString[i].length == arrString) {
        objequal.push(arrayOfString[i])
      }
    }

    return objequal
  }

 
}

//  console.log(getMaxLengthString(['hello', 'hi', 'hey']))
// console.log(getMaxLengthString(['hello', 'hi', 'hey','Good Evening', 'Good Morning']))
// console.log(getMaxLengthString(['hi']))
// console.log(getMaxLengthString(null))
// console.log(getMaxLengthString(undefined) )

module.exports = getMaxLengthString
