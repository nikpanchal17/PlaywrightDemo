const {test, expect} = require('@playwright/test')

test("File Uploade", async function({page}){

    await page.goto("https://www.google.com")
    //await page.locator("textarea[name='q']").type("KL Rahul")
    //await page.keyboard.press("Enter")

   /* await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Backspace")
    
    await page.keyboard.press("Control+V")
    */
    await page.locator("textarea[name='q']").focus()
    await page.keyboard.type("Rohit Sharma!")
    await page.keyboard.press("ArrowLeft")
    //down - means button ko pakad rkha kar rkha h 
    await page.keyboard.down("Shift")
    for(let i=0;i<6;i++){
    await page.keyboard.press("ArrowLeft")
    }

    //up- means button to relase krna
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")

 
})