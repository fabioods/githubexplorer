describe('Contains elements', () => {
  it('should contain header of page', () => {
    //Arrange - setup initial
    //visit a page
    // query for an element
    cy.visit('http://localhost:3000/')
    //Act - take an action
    cy.get('h1').should('contain', 'Explore repositórios no Github')
  });

  it('should add a new item to the list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[type=text]').type('fabioods/githubexplorer').then(() => {
      cy.get('button').click()
    })
    cy.get('input[type=text]').type('fabioods/Redux').then(() => {
      cy.get('button').click()
    })
    cy.get('input[type=text]').type('fabioods/videosPage').then(() => {
      cy.get('button').click()
    })
    cy.get('a').should('contain', 'fabioods/githubexplorer')
    cy.get('a').should('contain', 'fabioods/Redux')
    cy.get('a').should('contain', 'fabioods/videosPage')
  })

  it('should click into an item in the list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[type=text]').type('fabioods/githubexplorer')
    cy.get('button').click().then(() => {
      cy.get('a').should('contain', 'fabioods/githubexplorer')
    })
  })
});
