import Page from "../pageobjects/page.js";

export default function Generate<T extends Page>(pageType: new (browser) => T): T {
    const page = new pageType(browser)
    void (async function () {
        await page.load()
    })()
    return page
}
