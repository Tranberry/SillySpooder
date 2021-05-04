import {
  QuoteText, adjective, noun, city, verb, animal, pluralNoun, fluid,
  substance, eventthing, weekday, theme, veggie, bodyPart, place, number,
  website,
  colors,
  rhymeBlu,
} from './store.js';

const nameOne = document.getElementById('customname1');
const customName2 = document.getElementById('customname2');
const randomize = document.querySelector('.randomize');
const Quote = document.querySelector('.Quote');

/**
 * Fetch random array index
 *
 * @param {array} array - values like city, noun etc..
 * @return {array} - random [i] from array
 */
function randomthingy(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Generates the string/story - super huge function like mega gazillion long.
 */
function result() {
  let newQuote = randomthingy(QuoteText);
  const adjItem = randomthingy(adjective);
  const adjItem2 = randomthingy(adjective);
  const adjItem3 = randomthingy(adjective);
  const adjItem4 = randomthingy(adjective);
  const adjItem5 = randomthingy(adjective);
  const adjItem6 = randomthingy(adjective);
  const nounItem = randomthingy(noun);
  const nounItem2 = randomthingy(noun);
  const nounItem3 = randomthingy(noun);
  const pnounItem = randomthingy(pluralNoun);
  const pnounItem2 = randomthingy(pluralNoun);
  const pnounItem3 = randomthingy(pluralNoun);
  const animalItem = randomthingy(animal);
  const animalItem2 = randomthingy(animal);
  const cityItem = randomthingy(city);
  const bodyItem = randomthingy(bodyPart);
  const bodyItem2 = randomthingy(bodyPart);
  const placeItem = randomthingy(place);
  const webItem = randomthingy(website);
  const numberItem = randomthingy(number);
  const verbItem = randomthingy(verb);
  const verbItem2 = randomthingy(verb);
  const fluidItem = randomthingy(fluid);
  const substanceItem = randomthingy(substance);
  const eventItem = randomthingy(eventthing);
  const themeItem = randomthingy(theme);
  const weekdayItem = randomthingy(weekday);
  const veggieItem = randomthingy(veggie);

  const bluRhyItem = randomthingy(rhymeBlu);
  const colorItem = randomthingy(colors);

  const name1 = 'Cycy';
  const name2 = 'Gwen';

  newQuote = newQuote
      .replace(/:insertadjective:/g, adjItem)
      .replace(/:insertadjective2:/g, adjItem2)
      .replace(/:insertadjective3:/g, adjItem3)
      .replace(/:insertadjective4:/g, adjItem4)
      .replace(/:insertadjective5:/g, adjItem5)
      .replace(/:insertnoun:/g, nounItem)
      .replace(/:insertnoun2:/g, nounItem2)
      .replace(/:insertpluralnoun:/g, pnounItem)
      .replace(/:insertpluralnoun2:/g, pnounItem2)
      .replace(/:insertpluralnoun3:/g, pnounItem3)
      .replace(/:insertanimal:/g, animalItem)
      .replace(/:insertcity:/g, cityItem)
      .replace(/:insertbodypart:/g, bodyItem)
      .replace(/:insertbodypart2:/g, bodyItem2)
      .replace(/:insertplace:/g, placeItem)
      .replace(/:insertwebsite:/g, webItem)
      .replace(/:insertnumber:/g, numberItem)
      .replace(/:insertverb:/g, verbItem)
      .replace(/:insertadjective6:/g, adjItem6)
      .replace(/:insertfluid:/g, fluidItem)
      .replace(/:insertsubstance:/g, substanceItem)
      .replace(/:insertevent:/g, eventItem)
      .replace(/:insertanimal2:/g, animalItem2)
      .replace(/:inserttheme:/g, themeItem)
      .replace(/:insertweekday:/g, weekdayItem)
      .replace(/:insertnoun3:/g, nounItem3)
      .replace(/:insertverb2:/g, verbItem2)
      .replace(/:insertvegetable:/g, veggieItem)
      .replace(/:insertBluRhyme:/g, bluRhyItem)
      .replace(/:insertcolor:/g, colorItem);

  // check if name 1 is present and regex it away otherwise not
  if (nameOne.value !== '') {
    let name = nameOne.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote.replace(/:Cycy:/g, name);
    // lege var beter maken
  } else {
    newQuote = newQuote.replace(/:Cycy:/g, name1);
  }

  if (customName2.value !== '') {
    let name = customName2.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    newQuote = newQuote.replace(/:Gwen:/g, name);
    // lege var beter maken
  } else {
    newQuote = newQuote.replace(/:Gwen:/g, name2);
  }

  // drukt nieuwe content naarbuiten
  Quote.innerHTML = newQuote;
  Quote.style.visibility = 'visible';
}
// pakt de random knop
randomize.addEventListener('click', result);
