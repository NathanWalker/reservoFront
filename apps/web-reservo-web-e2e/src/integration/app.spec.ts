import { getGreeting } from '../support/app.po';

describe('web-reservo-web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to web-reservo-web!');
  });
});
