import { Page } from '@playwright/test';
import { BasePage } from './components/BasePage';

export default class A_ClassHatchbackPage extends BasePage {
    private readonly buildYourCarButton = this.page.locator('.owc-stage-cta-buttons.owc-stage-cta-buttons--dark').getByText(' Build your car ');

    constructor(page: Page) {
        super(page);
        this.buildYourCarButton = page.locator('.owc-stage-cta-buttons.owc-stage-cta-buttons--dark').getByText(' Build your car ');
    }

    async clickBuildYourCarButton() {
        await this.page.getByText(' Buying an A-Class Hatchback ').hover();
        await this.buildYourCarButton.click({timeout: 5000});
    }
}
