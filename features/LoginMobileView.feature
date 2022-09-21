Feature: Hudl Login Functionality on mobile view
  
  Background: 
    Given I am on the login page on mobile

  Scenario: As a user, I can log in to view my hudl account on a mobile view
    When I login with correct credentials
    Then I should see my account on mobile

  Scenario: As a user, I am notified when I unsuccessfully sign in on a mobile view
    When I login with incorrect credentials
    Then I should still be on the log in page
    Then I should see the error message "We didn't recognize that email and/or password"
    And I should see the need help? link

  Scenario: As a user, I can navigate to need help on a mobile view
    When I click on need link
    Then I can see reset password form
  