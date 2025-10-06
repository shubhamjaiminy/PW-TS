import { expect, test,  } from './base';
test('has title', async ({  loginPage  , mobilePage }) => {
  await loginPage.goto();
  await mobilePage.mobileSeries();
  const linkUrls = await mobilePage.getAllLinksFromPage(mobilePage.page);
  console.log(linkUrls);
  for(const url of linkUrls) {
   try {
     const response = await mobilePage.page.request.get(url);
          expect.soft(response.ok()).toBeTruthy();
   } catch (error) {
          expect.soft(null,`${url} is not valid`).toBeTruthy();
    }
  }
});
