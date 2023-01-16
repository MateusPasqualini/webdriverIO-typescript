import Page from './page.js';
import ElementLocator from "../decorator/elementLocator.decorator.js";

export class LoginPage extends Page {
    @ElementLocator('#username')
    private usernameField: WebdriverIO.Element;

    @ElementLocator('#password')
    private passwordField: WebdriverIO.Element;

    @ElementLocator('[id="login"] > button')
    private loginButton: WebdriverIO.Element;

    @ElementLocator('[class="example"] > h2')
    private pageHeader: WebdriverIO.Element

    @ElementLocator('#flash')
    private flashAlert: WebdriverIO.Element


    constructor() {
        super();
        this.PAGE_URL = 'login'
    }

    protected async isLoaded(): Promise<boolean> {
        return await this.pageHeader.isExisting()
    }

    public async login(username: string, password: string) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    public async getAlert() {
        return this.flashAlert;
    }


}

