describe('Box Office Deetz Test', () => {

    beforeEach(() => {
        cy.intercept('GET', '/api/v2/movies', 
        { fixture: 'allMovies.json' })
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

    // user flow we need to test:
    // test the ability to load a movie details page 
    // -- cy.intercept write mock response for sampleMovie - use sampleMovie fixture
    // then visit the URL for that particular sampleMovie
    // verify that the child elements loaded successfully with the
    // right values for that particular movie
    it('Should be able to load a movieDetails page', () => {
      cy.get('article[id=337401]')
        .click()
        .intercept('GET', '/api/v2/movies/337401', { fixture:'sampleMovie.json' })
        .get('div[class="modal"]')
        .contains("Mulan")
    })

    // user flow:
    // we want to be able to test that FROM a movie detail page, we can
    // click CLOSE and return to the main page. 
    it('Should be able to click the close button in the Movie Details page and return to the Home page', () => {
      cy.visit('http://localhost:3000/337401')
        .get('button[class="movie-details-close-button"]')
        .click()
        .url('http://localhost:3000')
    })

    // user flow: 
    // we want to test that a user can successfully use the back and forward
    // buttons in their browser to navigate various paths
    it('Should be able to click on the back and forward buttons in the browser to navigate to previously selected paths', () => {
      cy.visit('http://localhost:3000/')
      .get('article[id=337401]')
      .click()
      .url('http://localhost:3000/337401')
      .go('back')
      .url('http://localhost:3000')
      .go('forward')
      .url('http://localhost:3000/337401')
    })

    // user flow:
    // we want to be able to test that if a user enters a particular movie
    // path/URL that they load onto the page correctly. 
    it('Should be able to load the correct movie details page given a specific URL', () => {
      cy.visit('http://localhost:3000/337401')
        .get('div[class="modal-backdrop-img"]')
        .get('img[alt="Mulan poster"]')
        .get('div[class="modal-title"]')
        .get('p[id="average-rating"]')
        // .get('h3[id="movie-title"]')
        // .contains("Mulan")

    })

    // user flow:
    // we want to be able to test that the user can REFRESH the page and 
    // still see the same content on both the Home path 
    //and the details paths
    it('Should be able to load the home page when the user hits refresh', () => {
      cy.reload()
        .get('div[class="header"]')
        .get('img')
        .get('h1[class="headerTitle"]')
        .contains('Box Office Deetz')
        .get('main[class="movieContainer"]')
        .children('article[class="movieCard"]')
        .children('img')
        .siblings('h2')
        .siblings('p[class="movieCardRating"]')
        .siblings('p[class="movieCardReleaseDate"]')
    })
    // 

    it('Should be able to load the movie details page when the user hits refresh', () => {
      cy.visit('http://localhost:3000/337401')
        .reload()
        .get('div[class="modal-backdrop-img"]')
        .get('img[alt="Mulan poster"]')
        .get('div[class="modal-title"]')
        .get('p[id="average-rating"]')
    })

});