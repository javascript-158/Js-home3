// N2


let num1 = prompt("Enter the temperature in Celsius:")
let equal = "fahrenheit"

let pharengeit = (num1, equal) => {
    if ( equal) {
        return (num1 * 9/5) + 32
    } else {
        return "Invalid input or unit"
    }
};

console.log(pharengeit(num1, equal))

document.write(num1 + " celsius = " + (pharengeit(num1, equal)) + " fahrenheit")


