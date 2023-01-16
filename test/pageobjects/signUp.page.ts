import Page from "./page.js";
import ElementLocator from "../decorator/elementLocator.decorator.js";
import Generate from "../utils/pageFactory.js";
import {LoginPage} from "./login.page.js";

export class SignUpPage extends Page {
    @ElementLocator('[class="deel-ui__box sign-up-account-type-box mb-9"] + button')
    private nextButton: WebdriverIO.Element

    constructor() {
        super();
    }

    protected async navigate(): Promise<void> {
        const loginPage = await Generate(LoginPage);
        await loginPage.clickSignUpButton();
    }

    protected isLoaded(): Promise<boolean> {
        return Promise.resolve(true)
    }

    public async clickNextButton(){
        await this.nextButton.click()
    }

}