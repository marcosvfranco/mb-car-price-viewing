import { Page } from '@playwright/test';
import { BasePage } from './components/BasePage';

export default class A_ClassHatchbackPage extends BasePage {
    private readonly buildYourCarButton = this.page.locator('.owc-stage-cta-buttons.owc-stage-cta-buttons--dark').getByText(' Build your car ');

    constructor(page: Page) {
        super(page);
        this.buildYourCarButton = page.locator('.owc-stage-cta-buttons.owc-stage-cta-buttons--dark').getByText(' Build your car ');
    }

    async clickBuildYourCarButton() {
        await this.buildYourCarButton.click();
    }
}
