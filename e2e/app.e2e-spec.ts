import { PlaceholderProjectPage } from './app.po';

describe('placeholder-project App', () => {
  let page: PlaceholderProjectPage;

  beforeEach(() => {
    page = new PlaceholderProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
