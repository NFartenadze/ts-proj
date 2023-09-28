import { Sorter } from "./Sorter";
import { CharactersCollection } from "./collections/CharactersCollection";
import { NumbersCollection } from "./collections/NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 40]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("dcba");
const sorterTwo = new Sorter(charactersCollection);
sorterTwo.sort();
console.log(charactersCollection.data);
