import { PracCompontentPage } from './app.po';

describe('prac-compontent App', function() {
  let page: PracCompontentPage;

  beforeEach(() => {
    page = new PracCompontentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
