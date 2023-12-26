import { sayHello } from '../src/index.js';

describe('App E2E', () => {
  it('should say hello', () => {
    const message = sayHello();
    expect(message).toBe('Hello World!');
  });
});
