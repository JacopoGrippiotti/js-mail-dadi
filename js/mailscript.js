const emailList = ["gino@gmail.com", "adinolfi@tiscali.it", "marioSconcerti@gmail.com", "pino@gmail.com"];

let userEmail = prompt('inserisci la tua email')
for (let i = 0 ; i < emailList.length ; i++) {
    if (userEmail === emailList[i]) {
        console.log('email trovata e valida urrà')
        i = (emailList.length - 1)
        }
    
    else if(userEmail !== emailList[i]){
        
        if (i == (emailList.length - 1 )){
            
            console.log("email invalida")
        }
        
        else{
            console.log('continuo a cercare')
        }

    }
}
  
