import commonMenuPage from '../../pageObject/commonMenu-po';

const commonmenupage = new commonMenuPage();
beforeEach(function () {
  cy.visit("/");
});
Given("User is on product page and hover on {string} button", (menu) => {

  cy.get(commonmenupage.howerTitle(menu))
});

Then("User validates submenu under WOMEN is {string} and {string}", (menu1, menu2) => {
  cy.get(commonmenupage.elementWomenSubMenu).should('have.length', 2).then(($div) => {
    // access the native DOM element
    expect($div.get(0).innerText.toUpperCase()).to.eq(menu1)
    expect($div.get(1).innerText.toUpperCase()).to.eq(menu2)
  });
});
And("User verify all options under TOPS is {string} and {string}", (menu1, menu2) => {

  cy.get(commonmenupage.elementWomenTopsSubMenu).should('have.length', 2).then(($div) => {
    expect($div.get(0).innerText.toUpperCase()).to.eq(menu1)
    expect($div.get(1).innerText.toUpperCase()).to.eq(menu2)
  });
});

And("User verify all options under DRESSES is {string} and {string} and {string}", (menu1, menu2, menu3) => {
  cy.get(commonmenupage.elementWomenDressesSubMenu).should('have.length', 3).then(($div) => {
    expect($div.get(0).innerText.toUpperCase()).to.eq('CASUAL DRESSES')
    expect($div.get(1).innerText.toUpperCase()).to.eq('EVENING DRESSES')
    expect($div.get(2).innerText.toUpperCase()).to.eq('SUMMER DRESSES')
  });
});

Then("User verify all options under DRESSES", () => {
  cy.get(commonmenupage.elementDressesSubMenu).should('have.length', 3).then(($div) => {
    expect($div.get(0).innerText.toUpperCase()).to.eq('CASUAL DRESSES')
    expect($div.get(1).innerText.toUpperCase()).to.eq('EVENING DRESSES')
    expect($div.get(2).innerText.toUpperCase()).to.eq('SUMMER DRESSES')
  });
});

Then("User clicks on {string} and should see all {string}", (title) => {
  commonmenupage.clickTitle(title)
  cy.get(commonmenupage.elementTextImage).should('contain.text', title)
});