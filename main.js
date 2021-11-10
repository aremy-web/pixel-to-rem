
//rem convert starts
function convert_to_rem () { 
    var px_value = document.getElementById("px_value").value;
    const px_root = 16; 
    var rem = px_value /px_root;
    document.getElementById("result").innerHTML = rem + (" rem");
}

// enter key event 
var input = document.getElementById("px_value");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
});
