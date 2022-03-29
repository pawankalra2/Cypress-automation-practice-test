Given("the user sets delivery details", (datatable) => {
  datatable.hashes().forEach((username) => {
    cy.visit("http://automationpractice.com/index.php?controller=order&step=1");
    cy.get("#address_delivery > li.address_firstname.address_lastname").should(
      "contain.text",
      username.name
    );
    cy.get("#address_delivery > li.address_country_name").should(
      "contain.text",
      username.address
    );

    cy.get(".cart_navigation > .button > span").click();
    cy.get('.checker [type="checkbox"]')
      .not("[disabled]")
      .check()
      .should("be.checked");
    cy.get(".cart_navigation > .button > span").click();
  });
});
When("the user make a payment", () => {
  cy.get(".bankwire").should("be.visible");
  cy.get(".cheque").should("be.visible");
  cy.get(".bankwire").should("be.visible").click();
  cy.get(".box").should("be.visible");
  cy.get("#cart_navigation > .button > span").click();
});
Then("the user should complete order and see confirmation page", () => {

  cy.get('#center_column > div').should("be.visible")
  cy.get('#center_column > div > p > strong').should("be.visible")
  cy.get('#center_column > div > p > strong').should("contain.text", "Your order on My Store is complete.")
});
