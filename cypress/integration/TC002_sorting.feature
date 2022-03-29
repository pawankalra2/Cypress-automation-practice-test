Feature: Test Sort Funtionality on website.

    I want to click on Women Menu
    I want to test various sorting options

    @sorting
    Scenario: User sorts by "Price: Lowest first" and validate results
        Given User clicks on "Women" and should see all "Women" clothes
        When User clicks on product Sorting drop down and select "Price: Lowest first"
        Then User checks products are sorted by lowest price first

    Scenario: User sorts by "Price: Highest first" and validate results
        Given User clicks on "Women" and should see all "Women" clothes
        When User clicks on product Sorting drop down and select "Price: Highest first"
        Then User checks products are sorted by highest price first

    Scenario: User sorts by "Product Name: A to Z" and validate results
        Given User clicks on "Women" and should see all "Women" clothes
        When User clicks on product Sorting drop down and select "Product Name: A to Z"
        Then User checks products are sorted by name A to Z

    Scenario: User sorts by "Product Name: Z to A" and validate results
        Given User clicks on "Women" and should see all "Women" clothes
        Given User clicks on product Sorting drop down and select "Product Name: Z to A"
        Then User checks products are sorted by name Z to A

    Scenario: User sorts by "In stock" and validate results
        Given User clicks on "Dresses" and should see all "Dresses" clothes
        Given User clicks on product Sorting drop down and select "In stock"
        Then User checks only In stock product are displayed