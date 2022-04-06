let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e){
    if (e.keyCode == 13){
        return(e);
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
    let c = document.getElementById("compare");
    let d = document.getElementById("counter");
    if (a!=b) {
        c.style.textAlign = "center";
        counter++;
        d.innerHTML = `Numbers are the same. Computer got ${b}, and user got ${a}`
        d.style.color= "white";
        d.style.backgroundColor = "#312f2f";
        d.style.padding = "20px";
        d. style.textAlign = "center";
        
    }else if (a == b){
        c.innerHTML = `Numbers are the same. Computer got ${b}, and user got ${a}`
        c.style.color= "white";
        c.style.backgroundColor = "#00ff00";
        c.style.padding = "20px";
        c. style.textAlign = "center";
        d.innerHTML = `You have tried ${counter} times to get it right.`
        d.style.color= "white";
        d.style.backgroundColor = "#00ff00";
        d.style.padding = "20px";
        d. style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "#e4ff9c";
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = " ";
}