const {test, expect} = require('@playwright/test')
const { parse } = require('path')
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))//stringify method js value ko json me convert krta h

test("Read Data From JAson File", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//input[@id='email1']").fill(testdata.username)
    await page.locator("//input[@id='pssword1']").fill(testdata.password)




})