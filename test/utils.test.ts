import { generateAvatar } from '../utils/generateAvatar';
import { generateString } from '../utils/generateString';

test('Should return a random string with desired length', () => {
  let length = 10;
  expect(generateString(length)).toHaveLength(length);
});

test('Generate function much have a default length of 5', () => {
  expect(generateString()).toHaveLength(5);
});

test('Generate image function should return a valid image url', () => {
  const urlRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  expect(generateAvatar()).toMatch(urlRegex);
});
