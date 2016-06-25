Feature: Barnes and Noble Login, navigation and purchase functionality.

  @scenario1
  Scenario Outline: 1. As a valid user, user can log in to B&N, navigate to a link, and search for a product
    Given user is able to browse to the Barnes and Noble Website
    When user lands on home page "Online Bookstore: Books, NOOK ebooks, Music, Movies & Toys | Barnes & Noble"
    Then user can click on the sign in button
    And enter "<email>" as email address
    And enter "<password>" as password
    And click on login button
    When user is logged into the "Online Bookstore: Books, NOOK ebooks, Music, Movies & Toys | Barnes & Noble"
    Then user can hover over Hobbiee and Collectbables
    And user can click on Marvel Comics link
    When user lands on new page "Marvel Comics, Special Collections, Hobbies & Collectibles | Barnes & Noble"
    Then user can click on POP Marvel Deadpool Bobblehead
    When user lands on Deadpool page "POP Marvel (BOBBLE): Deadpool | 830395030524 | Item | Barnes & Noble"
    Then user can click Add to Bag button
    And user can click on View Bag button
    When user lands on Shopping Bag Page, containing text "Order Summary"
    Then user can remove Deadpool from Bag

    Examples: 
      | email             | password     |
      | axelajp@gmail.com | Watermelons1 |

  @scenario2
  Scenario Outline: 2. As a valid user, user can log in, search for a specific product via searchbar, add to bag, and checkout
    Given user is able to browse to the Barnes and Noble Website
    When user lands on home page "Online Bookstore: Books, NOOK ebooks, Music, Movies & Toys | Barnes & Noble"
    Then user can click on the sign in button
    And enter "<email>" as email address
    And enter "<password>" as password
    And click on login button
    When user is logged into the "Online Bookstore: Books, NOOK ebooks, Music, Movies & Toys | Barnes & Noble"
    Then user can click on search bar and search for The Zombie Survival Guide
    And user clicks on Zombie Survival Guide link
    When user lands on "The Zombie Survival Guide: Complete Protection from the Living Dead" page
    Then user clicks NOOKBOOK option
    And user clicks Add to Bag button
    And user clicks view bag button
    When user lands on Shopping Bag Page, containing text "Order Summary"
    Then click continue button

    Examples: 
      | email             | password     |
      | axelajp@gmail.com | Watermelons1 |
