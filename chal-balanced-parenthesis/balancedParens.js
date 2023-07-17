// Given a string, return true or false depending on whether that string has balanced parentheses.

// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

// For example:

// >>> has_balanced_parens("()")
// // true

// >>> has_balanced_parens("(Oh Noes!)(")
// // false

// >>> has_balanced_parens("((There's a bonus open paren here.)")
// // false

// >>> has_balanced_parens(")")
// // false

// >>> has_balanced_parens("(")
// // false

// >>> has_balanced_parens("(This has (too many closes.) ) )")
// // false
// You may consider a string with no parentheses balanced:

// >>> has_balanced_parens("Hey...there are no parens here!")
// // true




// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
function peek(stack) { // to find last item on stack 
    return stack[stack.length-1]
}
function has_balanced_parens(str) {
    let stack = []
    for (let i = 0; i < str.length; i++){
        //if the char is an openning paren push it on the stack
        let char = str.charAt(i)
        if (char === '(') { // if it is an openning paren  push to stack
            stack.push(char)
        } else if(char === ')') {
            //if the char is a closing paren make sure it has a matching openning paren
            if (peek(stack) === '(') {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0 // check if stack is empty, it is balanced
}
console.log(has_balanced_parens(sample1))
console.log(has_balanced_parens(sample2))
console.log(has_balanced_parens(sample3))
console.log(has_balanced_parens(sample4))
console.log(has_balanced_parens('(()'))
console.log(has_balanced_parens("Hey...there are no parens here!")) 
console.log(has_balanced_parens("(Oh Noes!)("))