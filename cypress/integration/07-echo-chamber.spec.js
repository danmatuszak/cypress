/// <reference types="cypress" />

describe('Initial Page', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber');
  });

  it('should have the title of the application in the header', () => {
    cy.get('[data-test="application-title"]').should('contain', 'Echo Chamber');
  });

  it('should have the title of the application in the window', () => {
    cy.title().should('contains', 'Echo Chamber')
  });

  it('should navigate to "/sign-in" when you click the "Sign In" button', () => {
    cy.get('[data-test="sign-in"]').click()
    cy.location('pathname').should('equal', '/echo-chamber/sign-in')
  });

  it('should navigate to "/sign-up" when you click the "Sign Up" button', () => {
    cy.get('[data-test="sign-up"]').click()
    cy.location('pathname').should('equal', '/echo-chamber/sign-up')
  });
});

describe('Sign Up', () => {
  beforeEach(() => {
    cy.visit('/echo-chamber/sign-up');
    cy.get('[data-test="sign-up-submit"]').as('submit')
  });

  it('should require an email', () => {
    cy.get('@submit').click()
    // if pop up, this should be pseudo element
    // cy.get('[data-test="sign-up-email"]:invalid')
    //   .invoke('prop', 'validationMessage')
    //   .should('contain', 'Please fill out this field')

    // another way
    cy.get('[data-test="sign-up-email"]:invalid')
      .invoke('prop', 'validity')
      .its('valueMissing')
      .should('be.true')
  });

  it('should require that the email actually be an email address', () => {});

  it('should require a password when the email is present', () => {
    cy.get('[data-test="sign-up-email"]').type('test@test.com{enter}');

    cy.get('[data-test="sign-up-password"]:invalid')
      .invoke('prop', 'validationMessage')
      .should('contain', 'Please fill out this field.')
  });
});
