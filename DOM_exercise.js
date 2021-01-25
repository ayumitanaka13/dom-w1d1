/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const words = document.querySelector("p");
words.innerHTML = words.innerText.split(" ").map((word) => {
  if (word.length >= 8) {
    return `<span style="background-color:yellow">${word}</span>`;
  } else {
    return word;
  }
}).join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const a = document.createElement("a");
document.querySelector("body").append(a);
a.href = "http://officeipsum.com/";
a.innerText = "New Source";

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

words.innerHTML = words.innerHTML.split(".").join(".</p><p>") + "</p>";

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const wordCount = words.innerText.split(" ").length;
const wordCountDiv = document.createElement("div");
wordCountDiv.innerHTML = wordCount;
document.body.insertBefore(wordCountDiv, words);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

words.innerHTML = words.innerText.replaceAll(/\?/g, "🤔");
words.innerHTML = words.innerText.replaceAll(/\!/g, "😲");
