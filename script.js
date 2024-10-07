const passbox = document.getElementById("password");
const length = 12;

const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lower = "qwertyuiopasdfghjklzxcvbnm";
const num = "1234567890";
const symbol = "!@#$%^&*()";
const allchars = upper + lower + num + symbol;

function genPass() {
    let pass = "";

    
    pass += upper[Math.floor(Math.random() * upper.length)];
    pass += lower[Math.floor(Math.random() * lower.length)];
    pass += num[Math.floor(Math.random() * num.length)];
    pass += symbol[Math.floor(Math.random() * symbol.length)];

   
    while (pass.length < length) {
        pass += allchars[Math.floor(Math.random() * allchars.length)];
    }

  
    console.log(pass);

    passbox.value = pass;
}

function copy(){
    passbox.select();
    document.execCommand("copy");
}