var d = require('../data/searchData');

var EC = protractor.ExpectedConditions;
var PageSearchCar = function () {

    this.brandSelection = element(by.css('select[name="S1"]'));
    this.modelSelection = element(by.css('select[name="S2"]'));
    this.keywordSearchField = element(by.css('input[name="T"]'));
    this.buttonSearchCars = element(by.css('button[class="buttonSearch"]'));
    this.AudiBrand = element(by.cssContainingText('option[data-testid="S1-option-audi"]', 'Audi'));
    this.AudiModel = element(by.cssContainingText('option[data-testid="S2-option-a3"]', 'A3'));

    // or button can be covered by selector
    // element(by.buttonText('Search Cars'));


    this.LogIn = async function () {
        // false for non angular app
        await browser.waitForAngularEnabled(false);
        // UrlLogin = 'http://localhost:3000';
        await browser.get(d.searchData.UrlRoot);
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.brandSelection), 5000);
        // Waits for the URL to contain '3000'.
        await browser.wait(EC.urlContains('3000'), 5000);
        await browser.waitForAngularEnabled(false);
    };

    // Search function by Brand + model
    this.searchBy = async function (brandField, brand, modelField, model) {
        await expect(brandField.isPresent()).toBe(true);
        await brandField.click();
        await browser.wait(EC.visibilityOf(brand), 5000);
        await brand.click();
        await expect(modelField.isPresent()).toBe(true);
        await browser.wait(EC.visibilityOf(model), 5000)
        await model.click();
        await this.buttonSearchCars.click();
        await browser.sleep(3000);

    };

    // Search function by Keyword
    this.searchByKeyword = async function (brandField, brand, modelField, model, searchValue) {
        //Search Brand+Model
        await expect(brandField.isPresent()).toBe(true);
        await brandField.click();
        await browser.wait(EC.visibilityOf(brand), 5000);
        await brand.click();
        await expect(modelField.isPresent()).toBe(true);
        await browser.wait(EC.visibilityOf(model), 5000)
        await model.click();
        //filter by keyword
        await expect(this.keywordSearchField.isPresent()).toBe(true);
        await browser.sleep(3000);
        await this.keywordSearchField.sendKeys(searchValue);
        await browser.sleep(3000);
        await this.buttonSearchCars.click();

    };
};
module.exports = new PageSearchCar();
