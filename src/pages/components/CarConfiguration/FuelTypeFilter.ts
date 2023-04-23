import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export default class FuelTypeFilter extends BasePage {

    private readonly fuelTypeFilterInput = this.page.locator('cc-motorization-filters-primary-filters div.label').getByText('Fuel Type');

    constructor(page: Page) {
        super(page);
    }

    async selectFuelType(fuel: 'Diesel' | 'Premium' | 'Super') {
        await this.fuelTypeFilterInput.click();
        await this.page.locator('ccwb-multi-select ccwb-checkbox').filter({ hasText: fuel}).locator('div').first().click();
    }
}
