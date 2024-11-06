class Password {
    constructor(){
        console.log("Password generator");
        this.pass = "";
    }

    generatePassword(len){
        let char = "abcdefghijklmnopqrstuvwxyz";
        let no = "1234567890";
        let schar = "!@#$%&*";
        let pass = ""; // Local variable to hold the generated password

        if(len < 5){
            return "Your password should be at least 5 characters long";
        } else {
            let i = 1;
            while(i<len){
            this.pass += char[Math.floor(Math.random()*char.length)];
            this.pass += no[Math.floor(Math.random()*no.length)];
            this.pass += schar[Math.floor(Math.random()*schar.length)];
            i+=3;
            }
            this.pass.substr(0, len); // Ensure password matches requested length
            return this.pass;
        }
    }
}

function displayPassword() {
    let length = document.getElementById("length").value;
    let passwordGenerator = new Password();
    let password = passwordGenerator.generatePassword(parseInt(length));
    document.getElementById("passwordDisplay").textContent = password;
}

document.getElementById("button").addEventListener("click", displayPassword);

  // Event listener for Enter key press
  document.getElementById("length").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if Enter key is pressed
        displayPassword();
    }
});