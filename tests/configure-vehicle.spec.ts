import { test, expect } from '@playwright/test';

test('access mb', async ({ page }) => {
    test.slow();

    await page.goto('');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Mercedes-Benz/);
    await page.locator('.buttons-wrapper').getByTestId('handle-accept-all-button').click();

    await page.locator('ul[label=Menubar]').getByText('Our models').click();
    await page.locator('[slot=seamless-vmos-flyout]').getByText('Hatchbacks').click();
    await page.locator('[flyout-title=Hatchbacks][is-secondary-vmos-flyout=true]').getByText(' A-Class Hatchback ').click();
    await page.locator('.owc-stage-cta-buttons.owc-stage-cta-buttons--dark').getByText(' Build your car ').click();

    // await page.goto('https://www.mercedes-benz.co.uk/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/GB/en/bm/1770122,1770512,1770542,1770842,1770872');
    // await page.locator('.buttons-wrapper').getByTestId('handle-accept-all-button').click();

    await page.locator('cc-motorization-filters-primary-filters div.label').getByText('Fuel Type').click();
    await page.locator('ccwb-multi-select ccwb-checkbox').filter({ hasText: 'Diesel'}).locator('div').first().click();
    await page.locator('ccwb-heading').filter({ hasText: 'Filter' }).click();

    await page.locator('div.cc-motorization-comparison').screenshot({ path: 'filtered-diesel.png'});

    const finalPricesArray = [];
    const pricesStringArray = await page.locator('span.cc-motorization-header__price--with-environmental-hint').allTextContents();
    for(const item of pricesStringArray) {
        // const valueArray = item.split('£');
        // finalPricesArray.push(parseInt(valueArray[1].replace(',', '')));

        const finalValue = item.replace('£','').replace(',','');

        finalPricesArray.push(parseInt(finalValue));

    }

    const maxValue = Math.max(...finalPricesArray);
    const minValue = Math.min(...finalPricesArray);

    console.log(maxValue, minValue);
});