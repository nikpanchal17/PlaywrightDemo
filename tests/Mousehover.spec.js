const {test, expect} = require('@playwright/test')

test("Mouse Hover", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").type("admin@email.com",{delay:10})
    await page.getByPlaceholder("Enter Password").type("admin@123",{delay:10})
    await page.getByRole("button",{name:"Sign in"}).click()

    await page.locator("//span[text()='Manage']").hover()
    await page.locator("//a[normalize-space()='Manage Courses']").click()
    await page.waitForTimeout(5000)

})