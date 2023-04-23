import { Page } from '@playwright/test';
import { BasePage } from './components/BasePage';
import FuelTypeFilter from './components/CarConfiguration/FuelTypeFilter';

interface iMinMaxPrices {
    minValue: number
    maxValue: number
}

export default class CarConfiguratorPage extends BasePage {
    private readonly fuelTypeFilter: FuelTypeFilter;

    private readonly filterTextContainer = this.page.locator('ccwb-heading').filter({ hasText: 'Filter' });
    private readonly engineVariantsResultContainer = this.page.locator('div.cc-motorization-comparison');
    private readonly modelPricesField = this.page.locator('span.cc-motorization-header__price--with-environmental-hint');

    constructor(page: Page) {
        super(page);
        this.fuelTypeFilter = new FuelTypeFilter(page);
    }

    async filterByDieselEngine() {
        await this.fuelTypeFilter.selectFuelType('Diesel');
        await this.filterTextContainer.click();
    }

    async takeScreenshotEngineVariants() {
        await this.engineVariantsResultContainer.screenshot({ path: 'artifacts/screenshots/engine-variants.png'});
    }

    async getMaxMinModelPrices(): Promise<iMinMaxPrices> {
        const finalPricesArray = [];
        const pricesStringArray = await this.modelPricesField.allTextContents();

        for(const item of pricesStringArray) {
            const finalValue = item.replace('£','').replace(',','');
            finalPricesArray.push(parseInt(finalValue));
        }

        return {
            maxValue: Math.max(...finalPricesArray),
            minValue: Math.min(...finalPricesArray)
        };
    }
}
