describe('Box Office Deetz Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Should contain the name of the application', () => {
        cy.contains('Box Office Deetz')
    });

    it('should be able to display cards on the dashboard representing each movie in the database', () => {
        cy.get('article[class="movieCard"]')
    })

});