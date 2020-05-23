import boynames from './boynames';
import girlnames from './girlnames';
import adjectives from './adjectives';

const getRandomArbitrary = (min: number, max: number) => Math.random() * (max - min) + min;

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const capitalizeAllWords = (words: string) =>
  words.split(' ').map(capitalizeFirstLetter).join(' ');

export const generateRandomName = () => {
  const isBoy = getRandomArbitrary(0, 1) > 0.5;
  const nameId = Math.floor(getRandomArbitrary(0, 50));
  const name = isBoy ? boynames[nameId] : girlnames[nameId];
  const adjectiveId = Math.floor(getRandomArbitrary(0, adjectives.length));
  const adjectiveList = adjectives[adjectiveId];
  return `${name} the ${capitalizeAllWords(adjectiveList)}`
}
