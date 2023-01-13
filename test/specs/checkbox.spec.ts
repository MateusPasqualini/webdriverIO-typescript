import Generate from "../utils/pageFactory.js";
import {CheckboxPage} from "../pageobjects/checkbox.page.js";


describe('My checkbox application', () => {
    it('should check all the boxes', async () => {
        const checkBoxPage = Generate(CheckboxPage)

        await checkBoxPage.clickCheckbox('first')

        await expect(checkBoxPage.getCheckbox('first')).toBeChecked()

        await checkBoxPage.clickCheckbox('first')

        await expect(checkBoxPage.getCheckbox('first')).not.toBeChecked()
    })
    after(async () => {
        await browser.deleteSession()
    })
})


