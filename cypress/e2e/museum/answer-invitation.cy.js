describe('Answer the invitation to wedding', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
    cy.get('.v-card-actions > .v-btn > .v-btn__content').click()
    cy.wait(100).scrollTo('bottom')
  })

  it('See page render', () => {
    // assert the page in render success
    cy.get('.v-responsive__content > .v-card > .v-card-text').should('be.visible') // main text
    cy.get(':nth-child(1) > .v-responsive > .v-responsive__content').should('be.visible') // main photo
    cy.get('.py-10 > .text-h4').should('be.visible')
    cy.get('.py-10 > .v-card').should('be.visible')
    cy.get('.py-10 > .text-h5').should('be.visible')
    cy.get('.pa-10').should('be.visible')
    cy.get(':nth-child(5) > .v-responsive > .v-responsive__content', { timeout: 5000 }).should('be.visible')
    cy.get(':nth-child(6) > .v-card-text', { timeout: 5000 }).should('be.visible')

    cy.get(':nth-child(7) > .v-card-text', { timeout: 5000 }).should('be.visible')
    cy.get(':nth-child(7) > .v-card', { timeout: 5000 }).should('be.visible')
    cy.get('iframe').should('be.visible')
    cy.get('.mt-10 > .v-card > .v-card-text').should('be.visible')
    cy.get('#app > :nth-child(1) > :nth-child(10)', { timeout: 5000 }).should('be.visible')
    cy.get('.bg-').should('be.visible')
    cy.get('.py-2').should('be.visible')

    cy.wait(200)
    cy.get(':nth-child(10) > .v-btn > .v-btn__content')
      .should('be.visible')
      .scrollIntoView()
      .click()
  })

  it('answer the invitation', () => {
    cy.get(':nth-child(10) > .v-btn > .v-btn__content')
      .should('be.visible')
      .scrollIntoView()
      .click()

    cy.get("[data-cy=answer-invitation]").should('be.disabled')
    cy.get("[data-cy=form-to-answer]").should('be.visible')
    cy.get("[data-cy=input-first-name]").type('pablo')
    cy.get("[data-cy=input-second-name]").type('daniel')
    cy.get("[data-cy=input-first-last-name]").type('mendez')
    cy.get("[data-cy=input-second-last-name]").type('castillo')
    cy.get("[data-cy=selector-answer]").click()
    cy.contains('Asistiremos').click()

    cy.get("[data-cy=answer-invitation]")
      .should('be.enabled')
      .click()
    
    cy.get('.v-snackbar__wrapper').should('be.visible')
    // assert redirection
    // assert layout behind
    // assert dialog with response
  })
})

// add behavior input must show a validation error if not type a name
// add behvior only need to answer to input to see if exists the guest
// add behavior guest doesnt exists in DB

// test cases
// add a new guest
// update guest
// remove guest
// see guests that answer the invitation
  // assert positive answers and negative