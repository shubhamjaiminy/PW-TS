import { test, expect } from '@playwright/test';
export class login {
    readonly page: any
    constructor(page: any) {
        this.page = page;
    }
    async goto() {
         await this.page.goto('https://www.flipkart.com/',{ waitUntil: 'load' });

  // Expect a title "to contain" a substring.
  await expect(this.page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
    }
}
