const {test, expect} = require('@playwright/test')

test("File Uploade", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("1741673923voucher.pdf")
    await page.locator("#file-submit").click()
     expect(await page.locator("\\h3")).toHaveText("File Uploaded!")


})