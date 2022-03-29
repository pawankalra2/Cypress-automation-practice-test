export default class commonMenuPage {

  constructor() {
    //  super()
  }
  elementProductPrice = "div.right-block > div.content_price > span.price.product-price"
  elementProductName = "div > div.right-block > h5 > a"
  elementProductInstock = "#center_column > ul > li:nth-child(n) > div > div.right-block > span > span"
  elementWomenSubMenu = "#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(n) > a"
  elementWomenTopsSubMenu = '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(n) > a';
  elementWomenDressesSubMenu = '#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(2) > ul > li:nth-child(n) > a'
  elementDressesSubMenu = '#block_top_menu > ul > li:nth-child(2) > ul > li:nth-child(n)'
  elementTextImage = '#center_column > div.content_scene_cat > div > div > span'
  elementLoadingImage = '#center_column > ul > p > img'
  clickTitle(title) {
    if (title == "Casual Dresses" || title == "T-shirts") {
      return cy.get("[title='" + title + "']").last().click({ force: true })
    } else {
      return cy.get("[title='" + title + "']").first().click({ force: true })
    }
  }
  howerTitle(title) {
    return cy.get("[title='" + title + "']").realHover('mouse')
  }
  clicksortdropDown(option) {
    return cy.get("#selectProductSort", { timeout: 10000 }).should('be.enabled').select(option, { force: true })

  }
}