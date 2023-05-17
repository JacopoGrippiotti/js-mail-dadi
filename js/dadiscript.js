

const button = document.querySelector('button')




button.addEventListener("click" , function(){

    let min = 1;
    let max = 6;

    let userNumber = (Math.floor(Math.random() * (max - min + 1)) + min);
    let computerNumber = (Math.floor(Math.random() * (max - min + 1)) + min);

    let userContainer = document.getElementById("userNumber");
    let computerContainer = document.getElementById("computerNumber");
    
    let output = document.getElementById("output")
    userContainer.innerHTML = ''
    computerContainer.innerHTML = ''
    output.innerHTML = ''

    console.log(userNumber);
    console.log(computerNumber);

    if (userNumber < computerNumber){
        userContainer.innerHTML += '<div> il tuo risultato è: ' +  userNumber + '</div>';
        computerContainer.innerHTML += '<div> il risultato del computer è: ' + computerNumber + '<div>';

        output.append("ha vinto il computer. Ritenta e sarai più fortunato")
        console.log("ha vinto il computer. Ritenta e sarai più fortunato")
    }

    else if (userNumber > computerNumber){
        userContainer.innerHTML += '<div> il tuo risultato è: ' +  userNumber + '</div>';
        computerContainer.innerHTML += '<div> il risultato del computer è: ' + computerNumber + '<div>';
        output.append("hai vinto sei un grande!")
        console.log("hai vinto sei un grande!")
    }

    else if (userNumber == computerNumber){
        userContainer.innerHTML += '<div> il tuo risultato è: ' +  userNumber + '</div>';
        computerContainer.innerHTML += '<div> il risultato del computer è: ' + computerNumber + '<div>';
        output.append("avete pareggiato ma il computer non avrà la meglio!")
        console.log("avete pareggiato ma il computer non avrà la meglio!")
    }
})