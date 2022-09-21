Feature: Hudl Login Functionality

  Scenario: As a user, I can log in to view my hudl account
    Given I am on the login page
    When I login with correct credentials
    Then I should see my account

  Scenario: As a user, I can log in to view my hudl account on a mobile view
    Given I am on the login page on mobile
    When I login with correct credentials
    Then I should see my account on mobile
 
  Scenario:As a user, I am notified when I unsuccessfully sign in
    Given I am on the login page
    When I login with incorrect credentials
    Then I should still be on the log in page
    And I should see the error message "We didn't recognize that email and/or password"
    And I should see the need help? link

  Scenario: As a user, I am notified when I unsuccessfully sign in with incorrect email
    Given I am on the login page
    When I login without an email
    Then I should see the error message "We didn't recognize that email and/or password"
    And I should see the need help? link

  Scenario: As a user, I am notified when I unsuccessfully sign in with incorrect password
    Given I am on the login page
    When I login without a password
    Then I should see the error message "We didn't recognize that email and/or password"
    And I should see the need help? link
  
  Scenario: As a user, I am notified when I unsuccessfully sign in on a mobile view
    Given I am on the login page on mobile
    When I login with incorrect credentials
    Then I should still be on the log in page
    Then I should see the error message "We didn't recognize that email and/or password"
    And I should see the need help? link

  Scenario: As a user, I can navigate to need help
    Given I am on the login page
    When I click on need link
    Then I can see reset password form

  Scenario: As a user on mobile, I can navigate to need help
    Given I am on the login page on mobile
    When I click on need link
    Then I can see reset password form

  Scenario: As a user, I can log in and my log in is remembered
    Given I am on the login page
    When I select remember me
    And I login with correct credentials
    Then I should see my account
    And I should be remembered

  # Scenario: As a user, I can successfully log out
  #   Given I am on the login page
  #   And I login with correct credentials
  #   And I can see my account
  #   When I logout
  #   And I navigate to my account page
  #   Then I am redirected to log in page

  # Scenario: As a user, I can navigate to the homepage
  #   Given I am on the login page
  #   When I click on the back arrow
  #   Then I am navigated to the homepage

  # Scenario: As a user, I can navigate to the signup page
  #   Given I am on the login page
  #   When I click on the signup
  #   Then I am navigated to the sign up page

  # Scenario: As a user, I can reset my password
  #   Given I am on the login page
  #   When I click on need link
  #   And I enter my email
  #   Then I can see reset password email sent message
    
  # Scenario: As an organization, I can log in to view my organization hudl account
  #   Given I am on the login page
  #   When I click on organization log in
  #   And I login with correct organization credentials
  #   Then I should see my organization account
  