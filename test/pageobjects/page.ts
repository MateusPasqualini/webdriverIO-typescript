import {LoadableComponent} from "./loadable.page.js";
import ElementLocator from "../decorator/elementLocator.decorator.js";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page extends LoadableComponent {
    protected PAGE_URL;

    protected async navigate(): Promise<void> {
        await browser.url(`https://the-internet.herokuapp.com/${(this.PAGE_URL)}`)
    }

    protected isLoaded(): Promise<boolean> {
        return Promise.resolve(false);
    }
}
