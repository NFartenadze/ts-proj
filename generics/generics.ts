class GenericArray<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new GenericArray(["a", "b", "c"]);

//type inference with generics

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything([1, 2, 3]);

//Generic constraints

class Car {
  print() {
    console.log("I am a car");
  }
}

interface Printable {
  print(): void;
}
class House {
  print() {
    console.log("I am a house");
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
