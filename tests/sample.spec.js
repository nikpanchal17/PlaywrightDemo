const {test, expect} = require('@playwright/test')
 
test("My First Test",async function({page}){
expect(12).toBe(12)

})

test.skip("My Second Test",async function({page}){
    expect("Nikhil Panchal").toContain("Nikhil")
    })
    
test("My Third Test",async function({page}){
    expect("nikhil Panchal").toContain("nikhil")
    expect(true).toBeTruthy()
    //expect(false).toBeFalsy()
 })
 test("My Fourth Test",async function({page}){
    expect("Ishita panchal".includes("panchal")).toBeTruthy()
    })
    
        
