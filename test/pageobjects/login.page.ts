import Page from './page.js';
import ElementLocator from "../decorator/elementLocator.decorator.js";

export class LoginPage extends Page {
    /**
     * define selectors using page factory methods
     */

    @ElementLocator('#username')
    public usernameField: WebdriverIO.Element;

    @ElementLocator('#password')
    public passwordField: WebdriverIO.Element;

    @ElementLocator('[id="login"] > button')
    public loginButton: WebdriverIO.Element;

    public async login(username: string, password: string) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }

    public open() {
        return super.open('login');
    }

}



