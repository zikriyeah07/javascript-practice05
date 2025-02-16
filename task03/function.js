let mName = prompt("Hey there whats your name");

if(mName.length>=1){

    let wName = prompt("Whats name of your spouse");
alert(`Okay we are calculating the love between you ${mName} and ${wName} `)
let lovePercentage = Math.floor(Math.random()*100)+"%";
alert(`the love between ${mName} and ${wName} ❤️ is ${lovePercentage}`);
if(lovePercentage>="90%" || lovePercentage<="100%"){
    alert(`Perfect Match ❤️`);
}
else if(lovePercentage>="50%" || lovePercentage<="89%"){
    alert(`Good compatibility! 😊`);
}
else if(lovePercentage>="0%" || lovePercentage<="49%"){
    alert(`Maybe just friends! 😅`);
}

else{
    alert(`Error`);
}

}
else{
    alert(`Please enter `)
}
