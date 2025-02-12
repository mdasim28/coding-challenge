"use strict";

/* 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

/**
 * Converts a string to uppercase, adds exclamation at the end.
 * If string is a sentence, then adds a emoji between word.
 *
 * @param {string} str
 * @returns {string}
 * @throws {string}
 */
function panic(str) {
  if (typeof str === "string" && str) {
    const addEmoji = str.trim().toUpperCase();
    if (!addEmoji.includes("  ") && !addEmoji.match(/^(?:[^\w]+|\d+)?$/)) {
      return addEmoji.split(" ").join(" 😱 ") + "!";
    }
  }
  return "Invalid argument: The argument must be a valid string";
}

/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

/**
 * Return sentence in lowercase and adds shh... in the beginning.
 * Removes ! at the end of a sentence if there is any.
 *
 * @param {string} str
 * @returns {string}
 * @throws {string}
 */

function whisper(str) {
  if (
    typeof str === "string" &&
    str &&
    str.trim() &&
    !str.match(/^([^\w]+|\d+)$/)
  ) {
    if (str.endsWith("!")) {
      return "shh... " + str.slice(0, -1).toLowerCase();
    }
    return "shh... " + str.toLowerCase();
  }
  return "Invalid argument: The argument must be a valid string";
}

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));
// console.log(whisper(""));
// console.log(whisper(" "));
// console.log(whisper("2024"));
// console.log(whisper(123));
// console.log(whisper("$%#"));

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

/**
 *
 * @param {string} str
 * @returns {string}
 */
function altCaps(str) {
  if (
    typeof str === "string" &&
    str &&
    str.trim() &&
    !str.match(/^([^\w]+|\d+)$/)
  ) {
    const toAltCaps = str
      .trim()
      .split("")
      .map((el, index) => {
        const oddEvenCaps =
          index % 2 === 0 ? el.toUpperCase() : el.toLowerCase();
        return oddEvenCaps;
      });
    return toAltCaps.join("");
  } else return "Invalid input";
}
// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
// console.log(altCaps(" abc"));
// console.log(altCaps(""));
// console.log(altCaps("123"));

/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  if (
    word &&
    typeof word === "string" &&
    word.trim() &&
    !word.match(/^([^\w]+|\d+)$/)
  ) {
    return word[0].toUpperCase() + word.slice(1);
  }
  return "Invalid input";
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .trim()
    .split(" ")
    .map((el) => capitalizeWord(el))
    .join(" ");
}

// Test your functions
// console.log(capitalizeWord("pumpkin"));
// console.log(toTitleCase("pumpkin pranced purposefully across the pond"));
// console.log(toTitleCase(" Hi, how are you? "));
// console.log(toTitleCase("123"));
// console.log(toTitleCase(""));

/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
  for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);
    else if (i % 3 === 0) console.log(`${i} - Vacation!`);
    else if (i % 5 === 0) console.log(`${i} - $100,000 bonus!`);
    else console.log(`${i} - 😥`);
  }
}
// awardBonuses();

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  if (word.startsWith(":") && word.endsWith(":") && word) {
    const emojiKey = word.slice(1, -1);
    return emojis[emojiKey] || emojiKey;
  }
  return word || "Invalid input";
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
  return phrase
    .split(/\s+/)
    .map((el) => emojifyWord(el))
    .join(" ")
    .trim();
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":dog:"));
// console.log(emojifyWord(""));
// console.log(emojifyWord("elephant"));
// console.log(emojifyWord(":Tiger:"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));
