// function printLetters(inputString) {
//     let text = '';
    
// for (let index=0; index <= inputString.length-1; index++) {
//     text = text + inputString.charAt(index) + ' ';
    
//     }
//     document.getElementById("letters").innerHTML = text;
// }

function countVowels() {
    
    const inputElement = document.getElementById("input");
    
    const inputString = inputElement.value.toLowerCase();
    console.log("Input String:", inputString);
    let countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;
    let countY = 0, countÆ = 0, countØ = 0, countÅ = 0;
    
    for (let index=0; index < inputString.length; index++){
        let char = inputString.charAt(index);
        console.log("Character at index", index, ":", char);
        switch (char) {
            case 'a': countA++; break;
            case 'e': countE++; break;
            case 'i': countI++; break;
            case 'o': countO++; break;
            case 'u': countU++; break;
            case 'y': countY++; break;
            case 'æ': countÆ++; break;
            case 'ø': countØ++; break;
            case 'å': countÅ++; break;
        }
    }
    document.getElementById("letters").innerHTML = `A: ${countA}, E: ${countE}, I: ${countI}, O: ${countO},
    U: ${countU}, Y: ${countY}, Æ: ${countÆ}, Ø: ${countØ}, Å: ${countÅ}`;
    
     
}