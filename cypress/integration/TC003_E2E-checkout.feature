Feature: Automate End to End Buy Order and Checkout functionality.

    I want to log into my account
    I want to select product
    I want to add to cart
    I want to make payment
    I want to complete payment


    @checkout @e2e
    Scenario: Login to Automation Practice site
        Given the user open the login page
        When the user type in username password
        And the user clicks on Sign in button
        Then "Pawan Kalra" should be shown
    @checkout @e2e
    Scenario Outline: User selects a product
        Given User is on product page
        When the user selects quantity "<quantity>"
        And the user selects size "<size>"
        And the user selects color "<color>"
        And the user add to cart
        Then the user should see selected item "<product>"
        Examples:
            | product                     | quantity | size | color |
            | Faded Short Sleeve T-shirts | 2        | M    | blue  |
    @checkout @e2e
    Scenario: Checkout with payment
        Given the user sets delivery details
            | name        | address       |
            | Pawan Kalra | United States |
        When the user make a payment
        Then the user should complete order and see confirmation page
