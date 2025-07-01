import { test as base } from '@playwright/test';
import { login } from './page-objects/login';
import { mobile } from './page-objects/mobilePage';

export type TestOptions = {
  loginPage: login;
  mobilePage : mobile;
}
export const test = base.extend<TestOptions>({
  loginPage: async ({ page }, use) => {
    const loginPage = new login(page);
    await use(loginPage);
  },
    mobilePage: async ({ page }, use) => {
    const mobilePage = new mobile(page);
    await use(mobilePage);
  },
});
export { expect } from '@playwright/test';