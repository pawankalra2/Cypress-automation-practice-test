import commonMenuPage from '../../pageObject/commonMenu-po';
/// <reference types="cypress-xpath" />

const commonmenupage = new commonMenuPage();
beforeEach(function () {
  cy.visit("/");
});

Then("User clicks on {string} and should see all {string} clothes", (title) => {
  commonmenupage.clickTitle(title)
  cy.get(commonmenupage.elementTextImage).should('contain.text', title)
});

When("User clicks on product Sorting drop down and select {string}", (option) => {
  commonmenupage.clicksortdropDown(option)
  cy.get(commonmenupage.elementLoadingImage, { timeout: 12000 }).should('not.exist')

});

Then("User checks products are sorted by lowest price first", () => {
  cy.get(commonmenupage.elementProductPrice).should('have.length.gt', 1)
    .then(($items) => {
      const text = Cypress._.map($items, (p) => p.innerText)
      const justdigits = (str) => str.replace(/[^0-9.]/g, '')
      const numbers = text.map(justdigits, (almostnumbers) => almostnumbers.parseFloat)
      const sorted = Cypress._.sortBy(numbers)
      expect(sorted).to.deep.equal(numbers)

    });
});

Then("User checks products are sorted by highest price first", () => {
  cy.get(commonmenupage.elementProductPrice).should('have.length.gt', 1)
    .then(($items) => {
      const text = Cypress._.map($items, (p) => p.innerText)
      const justdigits = (str) => str.replace(/[^0-9.]/g, '')
      const almostnumbers = text.map(justdigits, (numbers) => numbers.parseFloat)
      cy.log(almostnumbers.join(', '))
      expect(almostnumbers).to.be.sorted({ descending: true })

    });

});

Given("User checks products are sorted by name A to Z", () => {
  cy.get(commonmenupage.elementProductName).should('have.length.gt', 1)
    .then(($items) => {
      let text = Cypress._.map($items, (p) => p.innerText)
      cy.log(text.join(', '))
      expect(text).to.be.ascending

    });
});
Then("User checks products are sorted by name Z to A", () => {
  cy.get(commonmenupage.elementProductName).should('have.length.gt', 1)
    .then(($items) => {
      let text = Cypress._.map($items, (p) => p.innerText)
      let textreverse = Cypress._.map($items, (p) => p.innerText)
      cy.log(text.join(', '))
      let descsorted = textreverse.reverse()
      expect(text).to.deep.equal(descsorted)

    });

});
Then("User checks only In stock product are displayed", () => {
  cy.get(commonmenupage.elementProductInstock).each(($el) => {
    expect($el.text()).to.contain("In stock")
  });
});

