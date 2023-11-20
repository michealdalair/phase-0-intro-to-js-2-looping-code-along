


function writeCards(names, eventname){
    let messages=[];
    for (let i=0;i< names.length;i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${eventname} gift!`);
}


return messages;
    }
  


const thankyous=writeCards(["Guadalupe","Ollie","Aki"] ,"surprise")

console.log(thankyous);


    function countDown(number){

     while(number>=0){

        console.log(number);
        number--;
     }

    }