let string = 'I am the string of more Than 20 char'
let vowels = 0;
let consonants = 0;

for(char of string){
    if(['a', 'e', 'i', 'o', 'u'].includes(char)){
        vowels++;
    }
    else if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90 || char.charCodeAt() >= 97 && char.charCodeAt() <= 122){
        consonants++;
    }
}
console.log( "vowels are ", vowels,"  consonants are ",consonants);