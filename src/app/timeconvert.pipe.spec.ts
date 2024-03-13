import { TimeConversionPipe } from './timeconvert.pipe';

describe('TimeconvertPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeConversionPipe();
    expect(pipe).toBeTruthy();
  });
});
