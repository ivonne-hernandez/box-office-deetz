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
        .children('img')
        .siblings('h2')
        .siblings('p[class="movieCardRating"]')
        .siblings('p[class="movieCardReleaseDate"]')
    })


    // it('should be able to fill the movie card container based on a successful network request', () => {
    //     cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
    //         statusCode: 200,
    //         body: {
    //             movies: 
    //         }
    //     })
    // })

    // it('should be able to click on a given card and view its details', () => {
    //     cy.get('article[key="337401"]')
    // })

    //


});