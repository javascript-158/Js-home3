// N1

let num1 = prompt("Enter Number ")
let equal = "square"

let square = (num1, equal) => {
    if (equal) {
return num1 * num1
 }
    else {
        return "please enter a valid operator"
    }
}
console.log(square (num1, equal))

document.write(num1 + " squared is "+ (square (num1, equal))) 



