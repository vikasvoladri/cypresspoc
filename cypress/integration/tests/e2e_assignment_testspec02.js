import * as loginPage from '../../pages/LoginPage.js';
import * as homePage from '../../pages/HomePage.js';
import * as categories from '../../pages/CategoriesPage.js';
import * as cartItem from '../../pages/AddItemPage.js';
import * as checkItem from '../../pages/CartItemPage.js';
import * as placeOrder from '../../pages/PlaceOrderPage.js';


var testData;

describe('Demoblaze Testing', () => {

    before(() => {
        cy.fixture('Testdata.json').then(data => {
            testData = data;
        })
    })

    it('launch and login to application', function () {
        loginPage.launchSite(`${Cypress.config('app_url')}`);
        loginPage.loginToApplication(testData.credentials.username, testData.credentials.password);
    });

    it('verify that login successful', function () {
        homePage.verifyThatExpectedUserIsDisplayed();
    })

    it('open laptops page and click next page', () => {
        categories.verifyThatLaptopsLinkIsDisplayed();
        categories.clickOnLaptopsButton();
        categories.clickOnNextButton();
        categories.verifyThatNextButtonIsNotDisplayed();
    })

    it("add one item to cart", () => {
        cartItem.selectTheItem();
        cartItem.verifyTheItem();
        cartItem.clickAddToCart();
    })

    it("verify that added item is present in cart", () => {
        checkItem.CheckItemInCart();
    })

    it("placing an order", () => {
        placeOrder.clickPlaceOrder();
        placeOrder.enterTheDetails();
        placeOrder.clickPurchase();
        placeOrder.verifyConfirmationTextIsDisplayed();
        placeOrder.clickOkButtonOnConfirmationPopup();
        categories.verifyThatLaptopsLinkIsDisplayed();
    })

})