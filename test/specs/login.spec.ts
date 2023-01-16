import {LoginPage} from '../pageobjects/login.page.js'
import Generate from "../utils/pageFactory.js";


describe('Login tests', () => {

    it('should login with valid credentials', async () => {
        const loginPage = await Generate(LoginPage)
        await loginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(loginPage.getAlert()).toBeExisting()
        await expect(loginPage.getAlert()).toHaveTextContaining(
            'You logged into a secure area!')
    })


    after(async () => {
        await browser.deleteSession()
    })
})


