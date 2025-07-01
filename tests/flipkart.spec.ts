import { test,  } from './base';
test('has title', async ({  loginPage  , mobilePage }) => {
  await loginPage.goto();
  await mobilePage.mobileSeries();
});
