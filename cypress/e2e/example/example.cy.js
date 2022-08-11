describe('Contains elements', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', '**/repos/fabioods/githubexplorer',
      { fixture: 'fabioods.githubexplorer.json' }).as('getGithubExplorer')
    cy.intercept('GET', '**/repos/fabioods/Redux',
      { fixture: 'fabioods.Redux.json' }).as('getRedux')
    cy.intercept('GET', '**/repos/fabioods/videosPage',
      { fixture: 'fabioods.videosPage.json' }).as('getvideosPage')
  })
  it('should contain header of page', () => {
    //Arrange - setup initial
    //visit a page
    // query for an element
    cy.visit('http://localhost:3000/')
    //Act - take an action
    cy.get('h1').should('contain', 'Explore repositórios no Github')
  });

  it('should add a new item to the list', () => {
    cy.get('input[type=text]').type('fabioods/githubexplorer')
      .should('have.value', 'fabioods/githubexplorer')
    cy.get('button').click()
    cy.get('a').should('contain', 'fabioods/githubexplorer')
    cy.get('input[type=text]').type('fabioods/Redux')
      .should('have.value', 'fabioods/Redux')
    cy.get('button').click()
    cy.get('a').should('contain', 'fabioods/Redux')
    cy.get('input[type=text]').type('fabioods/videosPage')
      .should('have.value', 'fabioods/videosPage')
    cy.get('button').click()
    cy.get('a').should('contain', 'fabioods/videosPage')
  })

  it('should intercept request to github', () => {
    cy.get('input[type=text]').type('fabioods/githubexplorer')
      .should('have.value', 'fabioods/githubexplorer')
    cy.get('button').click()
    cy.get('a').should('contain', 'fabioods/githubexplorer')
  })

  it('should click into an item in the list', () => {
    cy.get('input[type=text]').type('fabioods/githubexplorer')
      .should('have.value', 'fabioods/githubexplorer')
    cy.get('button').click()
    cy.get('a').should('contain', 'fabioods/githubexplorer')
    cy.get('input[type=text]').type('fabioods/Redux')
      .should('have.value', 'fabioods/Redux')
    cy.get('button').click()
    cy.get('a').should('contain', 'fabioods/Redux')
    cy.get('a').first().click().then(() => {
      cy.url().should('include', 'fabioods/githubexplorer')
    })
    cy.get('strong').should('contain', 'fabioods/githubexplorer')
  })
});
