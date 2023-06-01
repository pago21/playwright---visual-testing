import { Page } from "@playwright/test";

export class MainPage {
    constructor(private page: Page) { }

    acceptTermsHeader = this.page.getByRole('button', { name: 'Accept all' })
    acceptTermsButton = this.page.locator('#L2AGLb')
}