"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./collections/CharactersCollection");
const NumbersCollection_1 = require("./collections/NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 40]);
const sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection("dcba");
const sorterTwo = new Sorter_1.Sorter(charactersCollection);
sorterTwo.sort();
console.log(charactersCollection.data);