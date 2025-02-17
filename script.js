let charCount = 0;
let wordCount = 1; //atleast 1 word
let vowelCount = 0;
let vowels = "aeiouAEIOU";

// Prompt user to input a sentence
let sentence = prompt("Enter a sentence ending with a period ('.'):");

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
  let char = sentence[i];
  charCount++; // Increment the character count

  // If the character is a space, it's a new word
  if (char === " ") wordCount++;

  // If the character is a vowel (case-insensitive), increment vowel count
  if (vowels.includes(char)) vowelCount++;

  // Stop the loop if a period (.) is found, as the sentence ends
  if (char === ".") break;
}

// Display the results in the console
console.log("Sentence Length:", charCount);
console.log("Number of Words:", wordCount);
console.log("Number of Vowels:", vowelCount);
