export default class loginPage {

  constructor() {

  }

  elementEmailText = "#email"
  elementPasswordText = "#passwd"
  elementSignin = "#SubmitLogin"

  signin() {
    cy.get(this.elementSignin)
      .should("be.visible")
      .contains("Sign in")
      .click();

  }

}