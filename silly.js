import * as store from './store.js';

/** Name from HTML input field ONE - customname1 */
const nameOne = document.getElementById('userName1');
/** Name from HTML input field TWO - customname2  */
const nameTwo = document.getElementById('userName2');
/** HTML button */
const generateQuote = document.getElementById('generateQuote');
/** Quote/Story HTML element */
const theQuote = document.getElementById('theQuote');

/**
 * Wrap string in html a:href markup
 * @param {string} string string to be wrapped in HTML a:href markup
 * @return {string} wrapped string in HTML a:href markup
 */
function addMarkupString(string) {
  const prefix = '<a href="https://' + string + '">';
  const postfix = '</a>';
  return string = prefix + string + postfix;
};


/**
 * Fetch one random element from an array
 * @param {array} array any primitive array; cities like: Tokyo, London, Berlin.
 * @return {string} one item (ex: London) from array
 */
function randomArrElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}


/**
* Shuffles an array in place. This using the Fisher-Yates algorithm,
* which is both unbiased and efficient in terms of time and space.
* @param {array} array the array to shuffle.
* @return {array} a reference to array.
* @example var shuffled = require('f-y shuffle')([2, 3, 5, 7, 11]);
*/
function shuffle(array) {
  let remaining = array.length;

  while (remaining > 0) {
    const pos = Math.floor(Math.random() * remaining);
    const tmp = array[pos];
    const end = remaining - 1;

    array[pos] = array[end];
    array[end] = tmp;

    --remaining;
  }
  return array;
}


/**
 * Generates the string/story - super huge function like mega gazillion long.
 */
function quoteGenerator() {
  let newQuote = randomArrElement(store.QuoteText);
  // Let newQuote = (store.QuoteText[store.QuoteText.length-1]);

  const getName = shuffle(store.suspects);

  const name1 = getName[0];
  const name2 = getName[1];

  newQuote = newQuote
      .replace(/:insertadjective:/g, randomArrElement(store.adjective))
      .replace(/:insertadjective2:/g, randomArrElement(store.adjective))
      .replace(/:insertadjective3:/g, randomArrElement(store.adjective))
      .replace(/:insertadjective4:/g, randomArrElement(store.adjective))
      .replace(/:insertadjective5:/g, randomArrElement(store.adjective))
      .replace(/:insertadjective6:/g, randomArrElement(store.adjective))

      .replace(/:insertanimal:/g, randomArrElement(store.animal))
      .replace(/:insertanimal2:/g, randomArrElement(store.animal))

      .replace(/:insertBluRhyme:/g, randomArrElement(store.rhymeBlu))

      .replace(/:insertbodypart:/g, randomArrElement(store.bodyPart))
      .replace(/:insertbodypart2:/g, randomArrElement(store.bodyPart))

      .replace(/:insertcity:/g, randomArrElement(store.city))

      .replace(/:insertcolor:/g, randomArrElement(store.colors))

      .replace(/:insertevent:/g, randomArrElement(store.eventThing))

      .replace(/:insertfluid:/g, randomArrElement(store.fluid))

      .replace(/:insertIllness:/g, randomArrElement(store.illness))

      .replace(/:insertnoun:/g, randomArrElement(store.noun))
      .replace(/:insertnoun2:/g, randomArrElement(store.noun))
      .replace(/:insertnoun3:/g, randomArrElement(store.noun))

      .replace(/:insertnumber:/g, randomArrElement(store.number))

      .replace(/:insertplace:/g, randomArrElement(store.place))

      .replace(/:insertpluralnoun:/g, randomArrElement(store.pluralNoun))
      .replace(/:insertpluralnoun2:/g, randomArrElement(store.pluralNoun))
      .replace(/:insertpluralnoun3:/g, randomArrElement(store.pluralNoun))

      .replace(/:insertsubstance:/g, randomArrElement(store.substance))

      .replace(/:inserttheme:/g, randomArrElement(store.theme))

      .replace(/:insertvegetable:/g, randomArrElement(store.veggie))
      .replace(/:insertvegetable2:/g, randomArrElement(store.veggie))

      .replace(/:insertverb:/g, randomArrElement(store.verb))
      .replace(/:insertverb2:/g, randomArrElement(store.verb))

      .replace(/:insertwebsite:/g, addMarkupString(
          randomArrElement(store.website),
      ))

      .replace(/:insertweekday:/g, randomArrElement(store.weekday));


  /**
 * Wraps string with html class of .person + .name
 * @param {string} name person name
 * @return {string} wrapped with span and added Class
 * @example addSpanClass('Cycy') === '<span class="person Cycy">Cycy</span>'
 */
  function addSpanClass(name) {
    const prefix = '<span class="person '+name+'">';
    const postfix = '</span>';
    return prefix + name + postfix;
  }

  // Check if name 1 is present and regex it away otherwise not
  if (nameOne.value !== '') {
    let name = nameOne.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote
        .replace(/:Cycy:/g, addSpanClass(name));
    // Populate empty name field
  } else {
    newQuote = newQuote
        .replace(/:Cycy:/g, addSpanClass(name1));
  }

  // Check if name 2 is present and regex it away otherwise not
  if (nameTwo.value !== '') {
    let name = nameTwo.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote
        .replace(/:Gwen:/g, addSpanClass(name));
    // Populate empty name field
  } else {
    newQuote = newQuote
        .replace(/:Gwen:/g, addSpanClass(name2));
  }

  // Pushes out new content
  theQuote.innerHTML = newQuote;
}
// On button click calls result function populating 'quote'
generateQuote.addEventListener('click', quoteGenerator);
