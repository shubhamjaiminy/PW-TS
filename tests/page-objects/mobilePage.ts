export class mobile {
    readonly page: any;
    constructor(page: any) {
        this.page = page;
    }

    async mobileSeries() {
        await this.page.locator('[placeholder="Search for Products, Brands and More"]').type('Mobiles');
        // Expect a title "to contain" a substring.
    }
}