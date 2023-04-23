import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { eLandingPageSelectors } from '../../../utils/eSelectors';

const { cookiesModalAgreeButton } = eLandingPageSelectors;

export default class CookiesModal extends BasePage {

    private readonly cookiesModal = this.page.locator(cookiesModalAgreeButton.selector.css);
    readonly agreeCookiesButton = this.cookiesModal.getByTestId(cookiesModalAgreeButton.selector.testId);

    constructor(page: Page) {
        super(page);
    }

}
