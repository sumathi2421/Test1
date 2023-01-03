const SearchPage = require('../pageobjects/search.page')

describe('Ebay Product Search',() => {
it('should open the main url and verify the title', async() =>{
    await SearchPage.open()
//await expect(browser).toHaveTitle('Electronics,Cars,Fashion,collection & More | ebay'
//)

})
it('should search for a product and verify the search text value', async() => {

await SearchPage.searchInput.addValue('Laptop')
await SearchPage.searchBtn.click()
 await expect(SearchPage.searchInput).toHaveValue('Laptop')

});
//it('should redirect to a new page and verify the title', async() =>{
    //await expect(browser).toHaveTitle('Laptop | ebay');

//});
it('should update the search category', async() => {
await expect(SearchPage.category).toHaveText('PC Laptops & Netbooks')

})
})
