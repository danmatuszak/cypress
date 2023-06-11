/// <reference types="cypress" />

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  })

  it('should have a form', () => {
    cy.get('form').should('exist')
  });

  it('should have the words "Add Item"', () => {
    cy.contains('Add Item');
  })

  it('should put stuff in an input field', () => {
    cy.get('[data-test="new-item-input"]').type('Good attitude')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Add stuff', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-test="new-item-input"]').clear();
    cy.get('[data-test="new-item-input"]').type('Stuff');
    cy.get('[data-test="add-item"]').click();
    cy.get('#item-6').check();
    cy.get('[data-test="items-packed"] > ul.s-vF8tIk32PFgu > :nth-child(2) > label.s-vF8tIk32PFgu').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
});
