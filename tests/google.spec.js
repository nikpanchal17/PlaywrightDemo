const {test, expect} =require('@playwright/test')

test("Google Verify Title", async function ({page}) {
    await page.goto("https://google.com")
    const URL = await page.url()
    console.log("Title is ",URL)
    await expect (page).toHaveTitle("Google")
})