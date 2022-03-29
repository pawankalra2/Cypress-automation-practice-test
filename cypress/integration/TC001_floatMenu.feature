Feature: Test Float Menu interaction on website.

  I want to log into my account
  I want to click on Float Menu WOMEN and validate all options
  I want to click on Float Menu DRESSES and validate all options
  I want to click on Float Menu T-SHIRTS and validate all options


  @floatMenu
  Scenario: User hower over "WOMEN" Float menu and validate all fields
    Given User is on product page and hover on "Women" button
    Then User validates submenu under WOMEN is "TOPS" and "DRESSES"
    And User verify all options under TOPS is "T-SHIRTS" and "BLOUSES"
    And User verify all options under DRESSES is "CASUAL DRESSES" and "EVENING DRESSES" and "SUMMER DRESSES"
    Then User clicks on "Tops" and should see all "TOPS"

  Scenario: User hower over "DRESSES" Float menu and validate all fields
    Given User is on product page and hover on "Dresses" button
    Then User verify all options under DRESSES
    Then User clicks on "Casual Dresses" and should see all "Casual Dresses"

  Scenario: User hower over "T-SHIRTS" Float menu and click
    Given User is on product page and hover on "T-shirts" button
    Then User clicks on "T-shirts" and should see all "T-shirts"
