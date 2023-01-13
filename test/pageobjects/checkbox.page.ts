import Page from "./page.js";
import ElementLocator from "../decorator/elementLocator.decorator.js";

export class CheckboxPage extends Page {

    @ElementLocator('[type="checkbox"]:first-child')
    private firstCheckBox: WebdriverIO.Element

    @ElementLocator('[type="checkbox"]:last-child')
    private secondCheckBox: WebdriverIO.Element

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


    public WebElement

    public getCheckbox(checkbox: string) {
        return checkbox === "first" ? this.firstCheckBox : this.secondCheckBox;
    }
}