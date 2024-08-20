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

    const vowelCounts = {
        'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0,
        'y': 0, 'æ': 0, 'ø': 0, 'å': 0
    };

    for (let index = 0; index < inputString.length; index++) {
        let char = inputString.charAt(index);
        console.log("Character at index", index, ":", char);
        if (vowelCounts.hasOwnProperty(char)) {
            vowelCounts[char]++;
        }
    }

    document.getElementById("letters").innerHTML = `A: ${vowelCounts['a']}, E: ${vowelCounts['e']}, I: ${vowelCounts['i']}, O: ${vowelCounts['o']},
    U: ${vowelCounts['u']}, Y: ${vowelCounts['y']}, Æ: ${vowelCounts['æ']}, Ø: ${vowelCounts['ø']}, Å: ${vowelCounts['å']}`;
}