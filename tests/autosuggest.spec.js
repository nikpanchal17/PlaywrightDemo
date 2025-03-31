const {test, expect} = require('@playwright/test')

test("auto suggestion keyboard", async function({page}){
    await page.goto("https://google.com")
    await page.locator("textarea[name='q']").type("Rohit Sharma")
    await page.waitForSelector("//li[@role='presentation']")
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("ArrowDown")
    // await page.keyboard.press("Enter")

    const elemets=await page.$$("//li[@role='presentation']")
    for (let i = 0; i < elemets.length; i++) {
        const text = await elemets[i].textContent();
        if(text.includes('net'))
        {
            await elemets[i].click()
            break
        }
    }
})