// const {test, expect} = require('@playwright/test')
// const { parse } = require('path')
// const testdata = JSON.parse(JSON.stringify(require("../datadriven.json")))//stringify method js value ko json me convert krta h


// test.describe("Data Driven Login Test",function()
// {
//     for(const data of datadriven)
//         {
//         test.describe(`Login with user ${data.id}`,function()
//         {
//             test('Read Data From JAson File', async({page})=>{

//                 await page.goto("https://freelance-learn-automation.vercel.app/login")
            
//                 await page.locator("//input[@id='email1']").fill(data.username)

//                 await page.locator("//input[@id='pssword1']").fill(data.password)
            
//                   });
//             })
//         }
//  }
