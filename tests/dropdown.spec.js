const {test, expect} = require('@playwright/test')

test(" Valid Login", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    //Perfered choice use label 
    await page.locator("#state").selectOption({label:"Goa"})
  //  await page.waitForTimeout(1000)

    await page.locator("#state").selectOption({value:"Rajasthan"})
 //   await page.waitForTimeout(1000)
    
    await page.locator("#state").selectOption({index:4})
   // await page.waitForTimeout(1000)

   // const value = await page.locator("#state").textContent()
    //console.log("Name of States "+value+" ");

    //await expect(value.includes('Rajasthan')).toBeTruthy()

    //loop 

    let state = await page.$("#state")
    let allElements = await state.$$("option")
    let ddStatus = false
    for(let i=0; i<allElements.length;i++){
        let elements = await allElements[i]
        let val =await elements.textContent()
        console.log("Values from drop down using For loop",+val);  
        if(val.includes("Rajasthan"))
        {
            ddStatus=true
            break
            
        }
    }
    await expect(ddStatus).toBeTruthy()

})