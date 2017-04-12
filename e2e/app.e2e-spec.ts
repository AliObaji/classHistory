import { ClassHistoryPage } from './app.po';

describe('class-history App', () => {
  let page: ClassHistoryPage;

  beforeEach(() => {
    page = new ClassHistoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
