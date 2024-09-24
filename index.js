var word = 'Hello!';
const world = 'Hello!';

hello();

function hello() {
  console.log(word)

  world = 'Hi!';

  console.log(world);
}

var test = 'test';

hello(test);
