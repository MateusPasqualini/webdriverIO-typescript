import {LoadableComponent} from "./loadable.page.js";

export default class Page extends LoadableComponent {
    protected PAGE_URL;

    protected async navigate(): Promise<void> {
        await browser.url(`/${(this.PAGE_URL)}`)
    }

    protected isLoaded(): Promise<boolean> {
        return Promise.resolve(false);
    }
}
