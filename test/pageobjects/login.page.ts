import Page from './page.js';
import ElementLocator from "../decorator/elementLocator.decorator.js";

export class LoginPage extends Page {

    @ElementLocator('[class="deel-ui__typography__heading_1 semi-bold text-center"]')
    private pageHeader: WebdriverIO.Element

    @ElementLocator('[data-qa="sign-up"]')
    private signUpButton: WebdriverIO.Element


    constructor() {
        super();
        this.PAGE_URL = 'login'
    }

    protected async isLoaded(): Promise<boolean> {
        return Promise.resolve(true)
    }

    public async clickSignUpButton(){
        await this.signUpButton.click()
    }
}

