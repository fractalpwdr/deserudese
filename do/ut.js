function* myGenerator() {
  yield [5, 14, 0.0027172418939298733];
}

const generator = myGenerator();

console.log(generator.next().value); // [5, 14, 0.0027172418939298733]
