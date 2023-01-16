import Page from "./page.js";
import ElementLocator from "../decorator/elementLocator.decorator.js";
import Generate from "../utils/pageFactory.js";
import {SignUpPage} from "./signUp.page.js";

export class FormPage extends Page {
    @ElementLocator('[name="firstName"]')
    private firstNameField: WebdriverIO.Element;

    @ElementLocator('[name="lastName"]')
    private lastNameField: WebdriverIO.Element;

    @ElementLocator('[name="email"]')
    private emailField: WebdriverIO.Element;

    @ElementLocator('[name="new-password"]')
    private passwordField: WebdriverIO.Element

    @ElementLocator('[id="mui-component-select-source"]')
    private hearAboutInput: WebdriverIO.Element

    @ElementLocator('[type="submit"]')
    private createAccountButton: WebdriverIO.Element

    @ElementLocator('[data-value="contractor"]')
    private contractorElementSelect: WebdriverIO.Element

    constructor() {
        super();
    }

    protected async navigate(): Promise<void> {
        const signUpPage = await Generate(SignUpPage);
        await signUpPage.clickNextButton();
    }

    protected isLoaded(): Promise<boolean> {
        return Promise.resolve(true)
    }

    public async fillForm() {
        await this.firstNameField.setValue('Mateus');
        await this.lastNameField.setValue('Pasqualini');
        await this.emailField.setValue('testemail@company.com');
        await this.passwordField.setValue('Val1dPassw@rd');
        await this.selectHearAbout();
    }

    private async selectHearAbout() {
        await this.hearAboutInput.click();
        await this.contractorElementSelect.click();
    }

    public async getCreateAccountButton() {
        return this.createAccountButton;
    }
}