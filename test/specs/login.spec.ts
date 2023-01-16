import {LoginPage} from '../pageobjects/login.page.js'
import Generate from "../utils/pageFactory.js";
import {SignUpPage} from "../pageobjects/signUp.page.js";
import {FormPage} from "../pageobjects/form.page.js";


describe('Login tests', () => {

    it('should login with valid credentials', async () => {
        const formPage = await Generate(FormPage)

        await formPage.fillForm()
        await expect(formPage.getCreateAccountButton()).not.toHaveAttr('disabled')
    })

    after(async () => {
        await browser.deleteSession()
    })
})


