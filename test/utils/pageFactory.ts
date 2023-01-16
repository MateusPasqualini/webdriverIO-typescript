import Page from "../pageobjects/page.js";

export default async function Generate<T extends Page>(pageType: new (browser) => T): Promise<T> {
    const page = new pageType(browser)
    await page.load()
    return page
}
