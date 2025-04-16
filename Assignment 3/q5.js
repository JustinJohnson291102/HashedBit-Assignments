function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}

let sentence = 'This is a sentance with wrong spelling';

sentence = correctfn(sentence, 'sentance', 'sentence');
sentence = correctfn(sentence, 'wrong', 'correct');

console.log("Corrected sentence: ", sentence);
console.log("");