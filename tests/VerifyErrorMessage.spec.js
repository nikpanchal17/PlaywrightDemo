const{test, expect}= require('@playwright/test')
test.use({viewport:{width:1000,height:500}})

test("Verify Error Message", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);

    await page.getByPlaceholder("Username").type("Admin")
    
    await page.locator("input[name='password']").type("Admin123")
    
    await page.locator("//button[@type='submit']").click()

    const ErrorMsg = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

    console.log(ErrorMsg);
    
    expect(ErrorMsg.includes("Invalid")).toBeTruthy()
    expect(ErrorMsg==="Invalid credentials").toBeTruthy()
})