
function Calculate() {
  
  var principal = parseFloat(document.getElementById('Principal').value);
  var rate = parseFloat(document.getElementById('Rate').value);
  var time = parseFloat(document.getElementById('Time').value);
    
    console.log("Principal: " + principal + " (" + typeof(principal) + ")");
  console.log("Rate: " + rate + " (" + typeof(rate) + ")");
  console.log("Time: " + time + " (" + typeof(time) + ")");
if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    document.getElementById('total').innerHTML = "Please enter valid numbers.";
    return;
}   
const total= principal * (1 +(rate/100 * time));


    document.getElementById('total').innerHTML = "With a beginning principal of $" + principal + " and with a growth rate of " + rate + "% for " + time +" years, your total will be $" + total.toFixed(2); 
    
}
