export class mobile {
    readonly page: any;
    constructor(page: any) {
        this.page = page;
    }

    async mobileSeries() {
        await this.page.locator('[placeholder="Search for Products, Brands and More"]').type('Mobiles');
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(5000);// Wait for 2 seconds to ensure the search results are loaded.
        // Expect a title "to contain" a substring.
    }
}