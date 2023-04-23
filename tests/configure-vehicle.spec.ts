import { test, expect } from '@playwright/test';
import LandingPage from '../src/pages/LandingPage';
import A_ClassHatchbackPage from '../src/pages/A_ClassHatchbackPage';
import CarConfiguratorPage from '../src/pages/CarConfiguratorPage';
import fs from 'fs';

test('Validate A Class models price are between £15,000 and £60,000', async ({ page }) => {
    test.slow();
    const landingPage = new LandingPage(page);
    const aClassHatchbackPage = new A_ClassHatchbackPage(page);
    const carConfiguratorPage = new CarConfiguratorPage(page);

    await landingPage.visit();
    await expect(page, 'Not in Mercedes-Benz website').toHaveTitle(/Mercedes-Benz/);

    await landingPage.acceptAllCookies();
    await landingPage.selectAClassHathbackModel();

    await aClassHatchbackPage.clickBuildYourCarButton();

    await carConfiguratorPage.filterByDieselEngine();
    await carConfiguratorPage.takeScreenshotEngineVariants();
    const minMaxPrices = await carConfiguratorPage.getMaxMinModelPrices();

    await expect(minMaxPrices.maxValue, 'Max Price exceeded').toBeLessThanOrEqual(60000);
    await expect(minMaxPrices.minValue, 'Min Price exceeded').toBeGreaterThanOrEqual(15000);

    await fs.writeFile('artifacts/prices.txt',`${minMaxPrices.maxValue}\n${minMaxPrices.minValue}`, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Prices saved in file with success');
    });
});
