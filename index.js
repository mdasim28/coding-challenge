"use strict";

import { podcasts, products, cartItems, mediaData, postData } from "./data.js";

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

/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;

  // return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// console.log(isAnagram("allergy", "gallery"));
// console.log(isAnagram("treasure", "measure"));
// console.log(isAnagram("rainbow", "crossbow"));

// console.log((1 || 0) + 1);

/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/

const title = ":htraE no od ot ffutS";
const messages = [
  "maerc eci yrT",
  "rewoT leffiE tisiV",
  "noom eht ot snamuh etacoleR",
  "egrahc ni stac tuP",
];

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/

/**
 * Reverses both the character in word and the word order in a string
 * @param {string} arr
 * @returns {string}
 */
function reverseString(arr) {
  return arr.split("").reverse().join("");
}

/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/

/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function reverseStringsInArray(arr) {
  return arr.map(reverseString);
}

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));

/*  
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str) {
  // First reverse string and validate using conditionals whether string is a palindrome true or false

  // Solution 1: Built in reverse methond
  // return str.split("").reverse().join("") === str ? true : false;

  // Solution 2: for loop using push and join
  // const reversedStr = [];
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedStr.push(str[i]);
  // }
  // return reversedStr.join("") === str;

  // Solution 3: for loop
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr === str;
}

// Test your function
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("civic"));
// console.log(isPalindrome("octopus"));
// console.log(isPalindrome("pumpkins"));
// console.log(isPalindrome("madam"));

/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23";

function removeDupeChars(chars) {
  // Solution 1: Using spread and new Set
  return [...new Set(chars)].join("");

  // Solution 2: Using for of loop and includes
  // First declare let variable with empty string
  // Loop through the parameter and only include unique value
  // let uniqueStr = "";
  // for (let char of chars) {
  //   if (!uniqueStr.includes(char)) {
  //     uniqueStr += char;
  //   }
  // }
  // return uniqueStr;
}

// console.log(removeDupeChars(password));

/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/

function countChars(str) {
  // Declare a variable with empty object
  // Convert string into a lowercase
  // Loop through the string and convert each character into key and their value will be count occurence
  // return object

  let countedChars = {};
  const strToLowerCase = str.toLowerCase().replace(/\s+/, "");
  for (let chars of strToLowerCase) {
    countedChars[chars] = (countedChars[chars] || 0) + 1;
  }

  return countedChars;
}

// console.log(countChars("Peggy Porth"));
// console.table(countChars("Mohammed Asim"));

/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/

const eggScrambleRecipe = [
  "🥓 bacon",
  "🥓 bacon",
  "",
  "🍳 eggs",
  "",
  "🫑 green peppers",
  "🧀 cheese",
  "🌶️ hot sauce",
  "🥓 bacon",
  "🥦 broccoli",
  "🧀 cheese",
  "🥦 broccoli",
  "🌶️ hot sauce",
];

function removeDupesFromArray(arr) {
  // return [...new Set(arr)];

  const uniqueEl = {};
  return arr.filter((el) => {
    if (!uniqueEl[el]) {
      uniqueEl[el] = true;
      return true;
    }
    return false;
  });
}
// console.log(removeDupesFromArray(eggScrambleRecipe));

/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
  [39, 99, 76],
  89,
  98,
  [87, 56, 90],
  [96, 95],
  40,
  78,
  50,
  [63],
];

const kittyPrizes = [
  ["💰", "🐟", "🐟"],
  "🏆",
  "💐",
  "💵",
  ["💵", "🏆"],
  ["🐟", "💐", "💐"],
  "💵",
  "💵",
  ["🐟"],
  "🐟",
];

function flatten(arr) {
  // return arr.flat();
  const flatArr = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      el.forEach((item) => flatArr.push(item));
    } else flatArr.push(el);
  }

  return flatArr;
}

// console.log(flatten(kittyPrizes));
// console.log(flatten(kittyScores));

/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

const studentCount = [50, 53, 61, 67, 60, 70, 78, 80, 80, 81, 90, 110];

function sumArray(arr) {
  // let finalCount = 0;
  // for (let el of arr) {
  //   finalCount += el;
  // }

  // arr.forEach((el) => (finalCount += el));

  return arr.reduce((acc, currVal) => acc + currVal, 0);
}
// console.log(sumArray(studentCount));

/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 32,
  "🌮 tacos": 10,
  "🥗 salads": 15,
  "🍝 pasta": 30,
};

function findTheWinner(obj) {
  // Solution: 1
  // const [winner, votes] = Object.entries(obj).sort((a, b) => b[1] - a[1])[0];
  // return `The winner is ${winner} with ${votes} votes!`;
  // Solution: 2
  // let winner = "";
  // let maxVotes = -Infinity;
  // for (let item in obj) {
  //   if (obj[item] > maxVotes) {
  //     maxVotes = obj[item];
  //     winner = item;
  //   }
  // }
  // return `The winner is ${winner} with ${maxVotes} votes!`;
  // Solution: 3
  const [winner, votes] = Object.entries(obj).reduce((acc, currVal) =>
    acc[1] > currVal[1] ? acc : currVal
  );
  return `The winner is ${winner} with ${votes} votes!`;
}

// console.log(findTheWinner(gameNightFood));

/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

function getFreePodcasts(data) {
  // Solution: 1
  // return data
  //   .filter((el) => !el.paid)
  //   .map((el) => ({
  //     title: el.title,
  //     rating: el.rating,
  //     paid: el.paid,
  //   }));
  // Solution: 2
  // const freePodcast = [];
  // data.forEach((el) => {
  //   // console.log(el);
  //   if (!el.paid) {
  //     freePodcast.push({
  //       title: el.title,
  //       rating: el.rating,
  //       paid: el.paid,
  //     });
  //   }
  // });
  // return freePodcast;

  // Solution: 3
  return data.reduce((acc, currVal) => {
    if (!currVal.paid) {
      acc.push({
        title: currVal.title,
        rating: currVal.rating,
        paid: currVal.paid,
      });
    }
    return acc;
  }, []);
}

// console.log(getFreePodcasts(podcasts));

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data) {
  return data.reduce((acc, currVal) => {
    if (currVal.type === "sweet") {
      acc.push({
        item: currVal.item,
        price: currVal.price,
      });
    }
    return acc;
  }, []);
}

// console.log(getSaleItems(products));

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

function total(arr) {
  return arr.reduce((acc, currVal) => acc + currVal.price, 0).toFixed(2);
}

// console.log(total(products));

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr) {
  return arr.reduce((acc, currVal) => {
    if (currVal.type === "savory") {
      return acc + currVal.price;
    }
    return acc;
  }, 0);
}

// console.log(totalSavory(products));

/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

function sortProducts(data) {
  return data
    .sort((a, b) => a.price - b.price)
    .forEach((el) => console.log(`${el.product}, ${el.price}`));
}

// sortProducts(cartItems);

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/

function getUniqueTags(data) {
  // Solution: 1
  // return [...new Set(data.flatMap((el) => el.tags))];
  // Solution: 2
  // const uniqueTags = [];
  // data
  //   .flatMap((el) => el.tags)
  //   .forEach((el) => {
  //     if (!uniqueTags.includes(el)) {
  //       uniqueTags.push(el);
  //     }
  //   });
  // return uniqueTags;

  // Solution: 3
  const uniqueTags = {};
  return data
    .flatMap((el) => el.tags)
    .filter((el) => {
      if (!uniqueTags[el]) {
        uniqueTags[el] = true;
        return true;
      }
    });
}
// console.log(getUniqueTags(mediaData));

/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

function sortByDuration(data, flightLength) {
  flightLength <= 60
    ? data.sort((a, b) => a.duration - b.duration)
    : data.sort((a, b) => b.duration - a.duration);

  data.forEach(({ title, duration }, index) => {
    console.log(`${index + 1}. ${title}, ${duration} minutes`);
  });
}
// sortByDuration(podcasts, 60);

/* Popularity Contest 

Iggy the Influencer and Toby the Tiktoker are dying to know
who's more popular on social media. 

Toby's TikToks get an average of 400 likes. On average, how many
likes do Iggy's Instagram posts get? 

In data.js you'll find a list of Iggy's recent posts. 
Use reduce() to write a function that returns the average number of likes.
To find the average, add up the total number of likes, then divide
by the total number of posts.
*/

function calcAverageLikes(data) {
  // Solution: 1
  // return Math.round(
  //   data.reduce((acc, currVal) => acc + currVal.likes, 0) / data.length
  // );

  // Solution: 2
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    count += data[i].likes;
  }
  return Math.round(count / data.length);
}

// console.log(calcAverageLikes(postData));

/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/
const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data) {
  return data.reduce((acc, currEl) => [...acc, ...currEl.hosts], []);
}

function assignAwards(data) {
  // Solution: 1
  // const hostList = getHosts(data);
  // const awardsArr = [];
  // for (let i = 0; i < hostList.length; i++) {
  //   const randomAwards = awards[Math.floor(Math.random() * awards.length)];
  //   awardsArr.push(`${randomAwards} ${hostList[i]}`);
  // }
  // return awardsArr;

  // Solution: 2
  return getHosts(data).map(
    (el) => `${awards[Math.floor(Math.random() * awards.length)]} ${el}`
  );
}

// console.log(getHosts(podcasts));
// console.log(assignAwards(podcasts));

/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/

function createDescriptionsFor(data) {
  return data.map((el) => {
    return {
      ...el,
      description: `${el.title} is a ${el.duration} minute ${el.tags.join(
        ", "
      )} podcast hosted by ${el.hosts.join(", ")}`,
    };
  });
}

const updatedPodcast = createDescriptionsFor(podcasts);
// console.log(updatedPodcast);

/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
  "moz biblical torchbearers",
  "it's razorbill beachcomber",
  "och mcrobbie trailblazers",
  "bib chorizo cellarmaster",
  "thor scribble carbimazole",
  "zilla borscht abercrombie",
  "brazil scorcher batmobile",
  "dame shelburne characterizing",
  "uber englishman characterized",
  "agnes rhumbline characterized",
  "rehab scrutinized charlemagne",
  "dreams zurich interchangeable",
  "bam hamster technocratic",
  "mechatronic masterbatch",
  "bam ratchet mechatronics",
];

function normalizeStr(str) {
  return str.replaceAll(" ", "").toLowerCase().split("").sort().join("");
}

function isAnagramInArray(anagram, arr) {
  return arr.filter((el) => normalizeStr(el) === normalizeStr(anagram));
}
// console.log(isAnagramInArray("Tom Chant Scrimba Teacher", anagrams));
