describe('Box Office Deetz Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('the header should contain the name of the application and the clapper logo image', () => {
        cy.get('div[class="header"]')
        .get('img')
        .get('h1[class="headerTitle"]')
        .contains('Box Office Deetz')
    });

    it('should have a container component for all movie cards', () => {
        cy.get('main[class="movieContainer"]')
        .children('article[class="movieCard"]')
    })


    it('should be able to display cards on the dashboard representing each movie in the database', () => {
        cy.get('article[class="movieCard"]')
    })

    // it('should be able to click on a given card and view its details', () => {
    //     cy.get('article[key="337401"]')
    // })

    //


});