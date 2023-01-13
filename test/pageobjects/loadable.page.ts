export abstract class LoadableComponent {
    constructor() {
    }

    public async load(): Promise<this> {
        await this.navigate()
        await this.waitUntilLoaded()
        return this
    }

    protected abstract navigate(): Promise<void>;

    protected async waitUntilLoaded(): Promise<void> {
        const isLoaded = await this.isLoaded()
        if (!isLoaded) {
            await browser.waitUntil(this.isLoaded);
        }
    }

    protected abstract isLoaded(): Promise<boolean>;
}
