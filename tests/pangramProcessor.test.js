const { getMissingLetters } = require('../src/pangramProcessor');

let expected;
describe('Testing getMissingLetters', () => {
  beforeEach(() => {
    expected = 'abcdefghijklmnopqrstuvwxyz';
  });

  it('When given a string, getMissingLetters successfully returns a string', () => {
    const input = 'I am a string';
    const result = getMissingLetters(input);
    expect(typeof (result)).toEqual('string');
  });
  it('When given invalid characters, getMissingLetters successfully returns the whole alphabet', () => {
    const input = '12%3.$5=!~`09}';
    const result = getMissingLetters(input);
    expect(result).toEqual(expected);
  });
  it('When given no input, getMissingLetters successfully returns the whole alphabet', () => {
    const result = getMissingLetters();
    expect(result).toEqual(expected);
  });
  it('When given an empty string, getMissingLetters successfully returns the whole alphabet', () => {
    const result = getMissingLetters('');
    expect(result).toEqual(expected);
  });
  it('When given a pangram, getMissingLetters successfully returns an empty string', () => {
    const input = 'A quick brown fox jumps over the lazy dog';
    expected = '';
    const result = getMissingLetters(input);
    expect(result).toEqual(expected);
  });
  it('When given valid input that is not a pangram, getMissingLetters successfully returns the missing letters', () => {
    const input = 'Lions, and tigers, and bears, oh my!';
    expected = 'cfjkpquvwxz';
    const result = getMissingLetters(input);
    expect(result).toEqual(expected);
  });
  it('When given an extremely long input string that is not a pangram, getMissingLetters successfully returns the missing letters', () => {
    const generateLongString = (() => {
      let x = '12k3i4pa5qb67d8f9j0l';
      const iterations = 12;
      for (let i = 0; i < iterations; i += 1) {
        x += x.concat(x);
      }
      return x;
    });
    const input = generateLongString();
    expected = 'ceghmnorstuvwxyz';
    console.time('Long string processing time');
    const result = getMissingLetters(input);
    console.timeEnd('Long string processing time');
    expect(result).toEqual(expected);
  });
});
