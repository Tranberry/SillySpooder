import * as store from './store.js';

const nameOne = document.getElementById('customname1');
const nameTwo = document.getElementById('customname2');
const randomize = document.querySelector('.randomize');
const Quote = document.querySelector('.Quote');

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
 * Fetch one random item from array
 * @param {array} array any array, ecample; cities like: Tokyo, London, Berlin.
 * @return {array} one item (ex: London) from array
 */
function randomthingy(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
* Shuffles an array in place. This shuffle is performed using the Fisher-Yates
* algorithm, which is both unbiased and efficient in terms of time and space.
* @param {array} array the array to shuffle.
* @return {array} a reference to array.
* @example var shuffled = require('fyshuffle')([2, 3, 5, 7, 11]);
*/
function fyshuffle(array) {
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
function result() {
  let newQuote = randomthingy(store.QuoteText);
  // let newQuote = (store.QuoteText[store.QuoteText.length-1]);

  const getName = fyshuffle(store.suspects);

  const name1 = getName[0];
  const name2 = getName[1];

  newQuote = newQuote
      .replace(/:insertadjective:/g, randomthingy(store.adjective))
      .replace(/:insertadjective2:/g, randomthingy(store.adjective))
      .replace(/:insertadjective3:/g, randomthingy(store.adjective))
      .replace(/:insertadjective4:/g, randomthingy(store.adjective))
      .replace(/:insertadjective5:/g, randomthingy(store.adjective))
      .replace(/:insertadjective6:/g, randomthingy(store.adjective))

      .replace(/:insertanimal:/g, randomthingy(store.animal))
      .replace(/:insertanimal2:/g, randomthingy(store.animal))

      .replace(/:insertBluRhyme:/g, randomthingy(store.rhymeBlu))

      .replace(/:insertbodypart:/g, randomthingy(store.bodyPart))
      .replace(/:insertbodypart2:/g, randomthingy(store.bodyPart))

      .replace(/:insertcity:/g, randomthingy(store.city))

      .replace(/:insertcolor:/g, randomthingy(store.colors))

      .replace(/:insertevent:/g, randomthingy(store.eventthing))

      .replace(/:insertfluid:/g, randomthingy(store.fluid))

      .replace(/:insertIllness:/g, randomthingy(store.illness))

      .replace(/:insertnoun:/g, randomthingy(store.noun))
      .replace(/:insertnoun2:/g, randomthingy(store.noun))
      .replace(/:insertnoun3:/g, randomthingy(store.noun))

      .replace(/:insertnumber:/g, randomthingy(store.number))

      .replace(/:insertplace:/g, randomthingy(store.place))

      .replace(/:insertpluralnoun:/g, randomthingy(store.pluralNoun))
      .replace(/:insertpluralnoun2:/g, randomthingy(store.pluralNoun))
      .replace(/:insertpluralnoun3:/g, randomthingy(store.pluralNoun))

      .replace(/:insertsubstance:/g, randomthingy(store.substance))

      .replace(/:inserttheme:/g, randomthingy(store.theme))

      .replace(/:insertvegetable:/g, randomthingy(store.veggie))
      .replace(/:insertvegetable2:/g, randomthingy(store.veggie))


      .replace(/:insertverb:/g, randomthingy(store.verb))
      .replace(/:insertverb2:/g, randomthingy(store.verb))

      .replace(/:insertwebsite:/g, addMarkupString(randomthingy(store.website)))

      .replace(/:insertweekday:/g, randomthingy(store.weekday));

  /**
 * adds html-span with class of .person and .name
 * @param {string} name person name
 * @return {string} wrapped with spane and added Class
 * @example addSpanClass('Cycy') === '<span class="person Cycy">Cycy</span>'
 */
  function addSpanClass(name) {
    const prefix = '<span class="person '+name+'">';
    const postfix = '</span>';
    return prefix + name + postfix;
  }

  // check if name 1 is present and regex it away otherwise not
  if (nameOne.value !== '') {
    let name = nameOne.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote
        .replace(/:Cycy:/g, addSpanClass(name));
    // lege var beter maken
  } else {
    newQuote = newQuote
        .replace(/:Cycy:/g, addSpanClass(name1));
  }

  // check if name 2 is present and regex it away otherwise not
  if (nameTwo.value !== '') {
    let name = nameTwo.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote
        .replace(/:Gwen:/g, addSpanClass(name));
    // lege var beter maken
  } else {
    newQuote = newQuote
        .replace(/:Gwen:/g, addSpanClass(name2));
  }

  // drukt nieuwe content naarbuiten
  /** replace Qoute with newQoute, writing this to understand Sjoerd */
  Quote.innerHTML = newQuote;
  // Quote.style.visibility = 'visible';
}
// pakt de random knop
randomize.addEventListener('click', result);
