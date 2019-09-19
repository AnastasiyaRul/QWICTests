var obj = require('../PageObject/PageSearchCar.js');
var d = require('../data/searchData');

beforeEach(async function () {
    // Login before each test
    await obj.LogIn();
    await browser.waitForAngularEnabled(false);
});

// Company -> Company Basic Data -> Country
describe('Buy a car', function () {

    it('Buy a car page: Search By Brand+Model', async function () {
        //Search BY Brand Audi + A3 Model
        await obj.searchBy(obj.brandSelection, obj.AudiBrand, obj.modelSelection, obj.AudiModel);
        // Check the presence of alert
        var popupAlert = browser.switchTo().alert();
        let alertText = popupAlert.getText();
        await expect(alertText).toBe('{"model":"A3","brand":"Audi","keyword":""}');
        await browser.switchTo().alert().accept();
    });

    it('Buy a car page: Search By Keyword', async function () {
        //Search all the Audi A3
        //Search BY Keyword 2019 (data page) - filter on 2019 year
        await obj.searchByKeyword(obj.brandSelection, obj.AudiBrand, obj.modelSelection, obj.AudiModel, d.searchData.SearchValue);
        // Check the presence of alert
        var popupAlert = browser.switchTo().alert();
        let alertText = popupAlert.getText();
        await expect(alertText).toBe(d.searchData.Result);
        await browser.switchTo().alert().accept();
    });
});

afterEach(function () {
    browser.refresh();
    browser.waitForAngularEnabled(true);
});


