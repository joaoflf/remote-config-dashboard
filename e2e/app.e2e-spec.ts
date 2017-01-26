import { RemoteConfigDashboardPage } from './app.po';

describe('remote-config-dashboard App', function() {
  let page: RemoteConfigDashboardPage;

  beforeEach(() => {
    page = new RemoteConfigDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
