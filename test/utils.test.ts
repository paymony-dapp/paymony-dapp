import { generateString } from '../utils/generateString';

test('Should return a random string with desired length', () => {
  let length = 10;
  expect(generateString(length)).toHaveLength(length);
});

test('Generate function much have a default length of 5', () => {
  expect(generateString()).toHaveLength(5);
});
