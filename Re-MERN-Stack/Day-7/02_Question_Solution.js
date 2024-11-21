// write a JavaScript function that accepts a string as a 
// parameter and counts the number of vowels within the string. 
// Note: As the letter 'Y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string: : The quick brown fox' expected output : 5


// const checVowel = (iphone) => {
//     let countVowel = 0;
//     const text = iphone.toLowerCase();
//     for (let i = 0; i <= text.length - 1; i++) {
//         if (text[i] === "a" ||  text[i] == "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
//             countVowel++;
//         }
//     }
//     return countVowel;
// }
// const count = checVowel("The quick brown fox");
// console.log(count)


const countVowel=(inputString)=>{
    const vowels = 'aeiouAEIOU';
    let count =0 ;

    for(let char of inputString){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

// const iData = prompt("Enter your text");
const exampleString = "Nishan Kumar Rai";
const vowelCount = countVowel(exampleString)
console.log(vowelCount)