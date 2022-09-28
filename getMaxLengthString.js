const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {


 

  if(arrayOfString == null || arrayOfString == undefined){
    return undefined
  } else{
    let arrayS = arrayOfString[0].length
    let stringMax =[]

  
   for(let arrString of arrayOfString){
    if(arrString.length > arrayS){
      arrayS = arrString.length
    }
  }
  for(let arrString of arrayOfString){
    if(arrString.length == arrayS){
      stringMax.push(arrString)
      
    }
   }  
  return stringMax



  }
 
}



//  console.log(getMaxLengthString(['hello', 'hi', 'hey']))
// console.log(getMaxLengthString(['hello', 'hi', 'hey','Good Evening', 'Good Morning']))
// console.log(getMaxLengthString(['hi']))
// console.log(getMaxLengthString(null))
// console.log(getMaxLengthString(undefined) )

module.exports = getMaxLengthString

 // if (arrayOfString == (null || undefined)) {
  //   undefined

  // } else {

  //   let arrString = arrayOfString[0].length
  //   let objequal = []



  //   for (let i = 0; i < arrayOfString.length; i++) {

  //     if (arrayOfString[i].length > arrString) {
  //       arrString = arrayOfString[i].length
  //     }
  //   }

  //   for (let i = 0; i < arrayOfString.length; i++) {
  //     if (arrayOfString[i].length == arrString) {
  //       objequal.push(arrayOfString[i])
  //     }
  //   }

  //   return objequal
  // }