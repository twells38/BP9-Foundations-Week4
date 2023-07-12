// Write your solution below:
// Write a function to remove all duplciate letters from a provided string. The string will only contail lowercase letters between a - z. The string will not contain spaces.

// For example:

// >>> makeUnique('helloworld')
// // helowrd

// >>> makeUnique('iwanttoclimbamountain')
// // iwantoclmbu

// function makeUnique(str) {
//     let uniqueStr = ''
//     str = str.toLowerCase().replace(/\s+/g, '')
//     for (let i = 0; i < str.length; i++){
//         if (!uniqueStr.includes(str[i]))
//             uniqueStr += str[i]
//     }
//     console.log(uniqueStr)
// }

 function makeUnique(str) {
     str = str.toLowerCase()
     let map = new Map()
     let uniqueStr = []
     for (let i = 0; i < str.length; i++){     if (!map.has(str[i])) {
         map.set(str[i])
         uniqueStr.push(str[i])
         }
     }
     return uniqueStr.join('')
 }
 console.log(makeUnique('helloworld'))
 console.log(makeUnique('iwanttoclimbamountain')) 

