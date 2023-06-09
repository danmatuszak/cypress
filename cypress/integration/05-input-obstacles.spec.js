/// <reference types="cypress" />

describe('Input obstacles', () => {
  beforeEach(() => {
    cy.visit('/obstacle-course');
  });

  it('should input text into the input field', () => {
    const thought = 'Ravioli are a form of pop tart.';

    cy.get('[data-test="text-input"]').type(thought);
    cy.get('[data-test="text-result"]').contains(thought);
  });

  it('should control a select input', () => {
    cy.get('[data-test="select-input"]').select('Thor');
    cy.get('[data-test="select-result"]').contains('Thor');
  });

  it('should find and control a checkbox input', () => {
    cy.get('[data-test="checkbox-result"]').contains('(None)');
    cy.get('[data-test="checkbox-tomato"]').check();
    cy.get('[data-test="checkbox-sardines"]').check();
    cy.get('[data-test="checkbox-result"]').contains('Tomato, Sardines');
  });

  it('should find and control a radio input', () => {
    cy.get('[data-test="radio-ringo"]').check();
    cy.get('[data-test="radio-result"]').contains('Ringo');
  });

  it('should find and control a color input', () => {
    cy.get('[data-test="color-input"]').invoke('val', '#abcdef').trigger('input');
    cy.get('[data-test="color-result"]').contains('#abcdef');
  });

  xit('should find and control a date input', () => {
    // we want to test the downstream effects of the date change
    // bc we can assume the chromium team/browser team has tested
    // the native date component
    cy.get('[data-test="date-input"]').invoke('val', '2023-06-09').trigger('input')
    cy.get('[data-test="date-result"]').should('eq', '2023-06-09');
  });

  it('should find and control a range input', () => {
    cy.get('[data-test="range-input"]').invoke('val', '6').trigger('input');
    cy.get('[data-test="range-result"]').contains('6');
  });

  it('should find and control a file input', () => {
    //there is a plugin called attach-file we could add on
    // fallbacks to text input for browsers that dont support
    cy.get('[data-test="file-input"]');
    cy.get('[data-test="file-result"]');
  });
});
