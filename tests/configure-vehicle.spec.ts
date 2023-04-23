import { test, expect } from '@playwright/test';
import LandingPage from '../src/pages/LandingPage';
import A_ClassHatchbackPage from '../src/pages/A_ClassHatchbackPage';
import CarConfiguratorPage from '../src/pages/CarConfiguratorPage';
import fs from 'fs';

test.describe('Configure Vehicle Worflow', async () => {
    let landingPage: LandingPage;
    let aClassHatchbackPage: A_ClassHatchbackPage;
    let carConfiguratorPage: CarConfiguratorPage;

    let minMaxPrices;

    test.beforeEach(async ({ page }) => {
        landingPage = new LandingPage(page);
        aClassHatchbackPage = new A_ClassHatchbackPage(page);
        carConfiguratorPage = new CarConfiguratorPage(page);
    });

    test('Validate A Class models price are between £15,000 and £60,000', async ({ page, browserName }) => {
        test.slow();

        await test.step('Acessing configuration car Page', async() => {
            await landingPage.visit();
            await expect(page, 'Not in Mercedes-Benz website').toHaveTitle(/Mercedes-Benz/);

            await landingPage.acceptAllCookies();
            await landingPage.selectAClassHathbackModel();

            await aClassHatchbackPage.clickBuildYourCarButton();
        });

        await test.step('Filtering Models by Fuel Type: Diesel', async() => {
            await carConfiguratorPage.filterByDieselEngine();
            await carConfiguratorPage.takeScreenshotEngineVariants(browserName);
        });

        await test.step('Registering artifacts and asserting prices', async() => {
            minMaxPrices = await carConfiguratorPage.getMaxMinModelPrices();

            await fs.writeFile(`artifacts/prices_${browserName}.txt`,`${minMaxPrices.maxValue}\n${minMaxPrices.minValue}`, 'utf-8', (err) => {
                if (err) throw err;
            });

            await expect(minMaxPrices.maxValue, 'Max Price exceeded').toBeLessThanOrEqual(60000);
            await expect(minMaxPrices.minValue, 'Min Price exceeded').toBeGreaterThanOrEqual(15000);
        });
    });
});
