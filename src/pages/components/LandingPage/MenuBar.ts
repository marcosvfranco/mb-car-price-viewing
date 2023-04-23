import { Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { eLandingPageSelectors } from '../../../utils/eSelectors';

const {
    menuBar,
    firstLevelMenuBar,
    secondLevelMenuBar
} = eLandingPageSelectors;

export default class MenuBar extends BasePage {

    private readonly menuBar = this.page.locator(menuBar.selector.css);
    readonly ourModelsItem = this.menuBar.getByText(menuBar.ourModels.selector.text);

    private readonly firstLevelMenuBar = this.page.locator(firstLevelMenuBar.selector.css);
    readonly hathbackItem = this.firstLevelMenuBar.getByText(firstLevelMenuBar.hatchbackItem.selector.text);

    private readonly secondLevelMenuBar = this.page.locator(secondLevelMenuBar.hatchback.selector.css);
    readonly aClassHathbackItem = this.secondLevelMenuBar.getByText(secondLevelMenuBar.hatchback.A_Class_HatchbackItem.selector.text);

    constructor(page: Page) {
        super(page);
    }

}
