import Page from "./page.js";
import ElementLocator from "../decorator/elementLocator.decorator.js";

export class CheckboxPage extends Page {

    @ElementLocator('[type="checkbox"]:first-child')
    private firstCheckBox: WebdriverIO.Element

    @ElementLocator('[type="checkbox"]:last-child')
    private secondCheckBox: WebdriverIO.Element

    @ElementLocator('[class="example"] > h3')
    private pageHeader: WebdriverIO.Element

    constructor() {
        super();
        this.PAGE_URL = 'checkboxes'
    }

    public clickCheckbox(checkbox: string) {
        if (checkbox === "first") {
            this.firstCheckBox.click();
        } else {
            this.secondCheckBox.click();
        }
        return this;
    }

    protected async isLoaded(): Promise<boolean> {
        return await this.pageHeader.isExisting()
    }

    public getCheckbox(checkbox: string) {
        return checkbox === "first" ? this.firstCheckBox : this.secondCheckBox;
    }
}