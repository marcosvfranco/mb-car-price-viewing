import { Page } from '@playwright/test';
import { BasePage } from './components/BasePage';
import MenuBar from './components/LandingPage/MenuBar';
import CookiesModal from './components/LandingPage/CookiesModal';

export default class LandingPage extends BasePage {
    private readonly url = 'https://www.mercedes-benz.co.uk/';

    private readonly menuBar: MenuBar;
    private readonly cookiesModal: CookiesModal;

    constructor(page: Page) {
        super(page);
        this.menuBar = new MenuBar(page);
        this.cookiesModal = new CookiesModal(page);
    }

    async visit() {
        await this.page.goto(this.url);
    }

    async acceptAllCookies() {
        await this.cookiesModal.agreeCookiesButton.click();
    }

    async selectAClassHathbackModel() {
        await this.menuBar.ourModelsItem.click();
        await this.menuBar.hathbackItem.click();
        await this.menuBar.aClassHathbackItem.click();
    }
}
