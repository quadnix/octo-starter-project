import { sayHello } from './index.js';

describe('Index UT', () => {
  it('should say hello', () => {
    const message = sayHello();
    expect(message).toBe('Hello World!');
  });
});
