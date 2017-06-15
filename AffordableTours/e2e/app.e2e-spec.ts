import { AffordableToursPage } from './app.po';

describe('affordable-tours App', () => {
  let page: AffordableToursPage;

  beforeEach(() => {
    page = new AffordableToursPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
