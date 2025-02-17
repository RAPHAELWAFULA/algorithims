let charCount = 0;
let wordCount = 1;
let vowelCount = 0;
let vowels = "aeiouAEIOU";

let sentence = prompt("Enter a sentence ending with a period ('.'):");

for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  charCount++;

  if (char === " ") wordCount++;

  if (vowels.includes(char)) vowelCount++;

  if (char === ".") break;
}

console.log("Sentence Length:", charCount);
console.log("Number of Words:", wordCount);
console.log("Number of Vowels:", vowelCount);
