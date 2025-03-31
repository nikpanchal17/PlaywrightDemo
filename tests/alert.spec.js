const {test, expect} = require('@playwright/test')

test("Handle Alert Message", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(d)=>{
        expect(d.type()).toContain("alert") //alert ki jgh confrim of promtp messages bhi ho sakte h
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept() //accept mtlb ok and dismiss mtln cancle 
    })
    await page.locator("//button[text()='Click for JS Alert']").click()
   
})

test("Handle Confirm Message", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(dialogWindow)=>{
        expect(dialogWindow.type()).toContain("confirm") //alert ki jgh confrim of promtp messages bhi ho sakte h
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        await dialogWindow.dismiss() //accept mtlb ok and dismiss mtln cancle 
    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
   
})

test("Handle Prompt Box", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async(dialogWindow)=>{

        expect(dialogWindow.type()).toContain("prompt") //alert ki jgh confrim of promtp messages bhi ho sakte h

        expect(dialogWindow.message()).toContain("I am a JS prompt")

        await dialogWindow.accept("NIkhil") //accept mtlb ok and dismiss mtln cancle 
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
    await page.waitForTimeout
   
})