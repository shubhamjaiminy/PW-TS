import { Page } from "playwright";
import { expect } from "playwright/test";

export class mobile {
    readonly page: any;
    constructor(page: any) {
        this.page = page;
    }

    async mobileSeries() {
        await this.page.locator('[placeholder="Search for Products, Brands and More"]').type('Mobiles');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);
    }
async getAllLinksFromPage(page: Page) {
  const links = page.getByRole("link");
  const allLinks = await links.all();

  const allHrefs = await Promise.all(
    allLinks.map((link) => link.getAttribute('href'))
  );
 const allValidHrefs = allHrefs.reduce((links,link)=>{
             expect.soft(link , `${link} is not valid href`).toBeTruthy();
     if(link && link.startsWith("https://www.flipkart.com/")) {
        links.add(new URL(link, page.url()).href);
     }
     return links;
}, new Set<string>());
  return allHrefs;
 }
}
