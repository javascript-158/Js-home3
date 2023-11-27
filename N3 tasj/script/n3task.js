// N3 



let tshirtNumber = () => {

  let num1 = prompt("Choose which number T-shirt do you want to use ? (max: 23) ")

if (num1 > 0 && num1 <= 23) {
document.write("you choose T-shirt number " + num1)
} else {
    document.write("Invalid T-shirt number. Please choose a number between 1 and 23.");
  }
}
tshirtNumber()


