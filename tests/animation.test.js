const { animate } = require('../src/animation');

describe('Testing animation', () => {
  beforeEach(() => {
  });
  it('When Given valid inputs, animate returns an array of strings', () => {
    const speed = 2;
    const initString = 'RR..LRL';
    const result = animate(speed, initString);
    expect(typeof (result)).toEqual('object');
    expect(typeof (result[0])).toEqual('string');
  });
  it('When Given invalid inputs, animate returns an error', () => {
    const speed = 2.7;
    const initString = 'XFJYS';
    const expected = ['Invalid Input Provided'];
    const result = animate(speed, initString);
    expect(result).toEqual(expected);
  });
  it(' Case 0: When Given valid inputs, animate returns an array with particle positions', () => {
    const speed = 2;
    const initString = '..R....';
    const expected = [
      '..X....',
      '....X..',
      '......X',
      '.......',
    ];
    const result = animate(speed, initString);
    expect(result).toEqual(expected);
  });
  it('Case 1: When Given valid inputs, animate returns an array with particle positions', () => {
    const speed = 3;
    const initString = 'RR..LRL';
    const expected = [
      'XX..XXX',
      '.X.XX..',
      'X.....X',
      '.......',
    ];
    const result = animate(speed, initString);
    expect(result).toEqual(expected);
  });
  it('Case 2: When Given valid inputs, animate returns an array with particle positions', () => {
    const speed = 2;
    const initString = 'LRLR.LRLR';
    const expected = [
      'XXXX.XXXX',
      'X..X.X..X',
      '.X.X.X.X.',
      '.X.....X.',
      '.........',
    ];
    const result = animate(speed, initString);
    expect(result).toEqual(expected);
  });
  it('Case 3: When Given valid inputs, animate returns an array with particle positions', () => {
    const speed = 10;
    const initString = 'RLRLRLRLRL';
    const expected = [
      'XXXXXXXXXX',
      '..........',
    ];
    const result = animate(speed, initString);
    expect(result).toEqual(expected);
  });
  it('Case 4: When Given valid inputs, animate returns an array with particle positions', () => {
    const speed = 1;
    const initString = '...';
    const expected = [
      '...',
    ];
    const result = animate(speed, initString);
    expect(result).toEqual(expected);
  });
  it('Case 5: When Given valid inputs, animate returns an array with particle positions', () => {
    const speed = 1;
    const initString = 'LRRL.LR.LRR.R.LRRL.';
    const expected = [
      'XXXX.XX.XXX.X.XXXX.',
      '..XXX..X..XX.X..XX.',
      '.X.XX.X.X..XX.XX.XX',
      'X.X.XX...X.XXXXX..X',
      '.X..XXX...X..XX.X..',
      'X..X..XX.X.XX.XX.X.',
      '..X....XX..XX..XX.X',
      '.X.....XXXX..X..XX.',
      'X.....X..XX...X..XX',
      '.....X..X.XX...X..X',
      '....X..X...XX...X..',
      '...X..X.....XX...X.',
      '..X..X.......XX...X',
      '.X..X.........XX...',
      'X..X...........XX..',
      '..X.............XX.',
      '.X...............XX',
      'X.................X',
      '...................',
    ];
    const result = animate(speed, initString);
    expect(result).toEqual(expected);
  });
});
