// Write your code below this line
// Decode String

// Difficulty
// Medium
// Concepts
// Loops

// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"

function decodeString(str) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let splittedStr = str.toLowerCase().split('')
    let shift = Number(splittedStr[0])
    
    let result = ''
    for (let i = 1; i < splittedStr.length; i++){
        let char = splittedStr[i]
        let alphabetIndex = alphabet.indexOf(char) //find index of char in alphabet array
        let newIndex = (alphabetIndex + shift) % 26
        let newChar = alphabet[newIndex]
        result += newChar
        
    }
    console.log(result)
}
decodeString('1a')
decodeString('3ce')
decodeString('2fcjjm') 