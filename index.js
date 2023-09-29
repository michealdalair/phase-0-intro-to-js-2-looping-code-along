// Code your solutions in this file

function writeCards(names, event){

    let thankyoumessage=[];

    for (let i = 0; i < names.length; i++){
const message= `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

thankyoumessage.push(message)}
return thankyoumessage;


}
writeCards(["Charlie", "Samip", "Ali"], "birthday");


function countDown(number){

    for (let i = number; i>=0; i--){

        console.log(i)
    }
}
 countDown(5);