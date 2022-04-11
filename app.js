let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e){
    if (e.keyCode == 13){
        run(e);
    }
});

userNum.focus();

let counter = 0;

function run() {
    document.getElementById("paragraph").innerHTML = "Hello World";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum(){
    let ran = Math.floor(Math.random() * 10);
    return ran;
}

function userNumber(){
    let user = document.getElementById("getNumber").value;
    return user;
}

function compareNumbers(){
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");
    if (a != b) {
        z.style.textAlign = "center";
        counter++;
        c.innerHTML = "You have tried " + counter + " times to get it right."
        c.style.color= "white";
        c.style.backgroundColor = "#312f2f";
        c.style.padding = "20px";
        c.style.textAlign = "center";

    }else if (a == b){
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "#00ff00";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You tried " + counter + " times to get it right.";
        c.style.color = "white";
        c.style.backgroundColor = "#00ff00";
        c.style.padding = "20px";
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "#e4ff9c";
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = " ";
}