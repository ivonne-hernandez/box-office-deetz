describe('Box Office Deetz Test', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/v2/movies', {
          fixture: 'allMovies.json'
      })
      cy.visit('http://localhost:3000');
    });

    it('the header should contain the name of the application', () => {
      cy.get('div[class="header"]')
        .get('h1[class="headerTitle"]')
        .contains('Box Office Deetz')
    });

    it('should have a container component for all movie cards', () => {
      cy.get('main[class="movie-container"]')
        .children('article[class="movie-card"]')
        .children('img')
        .siblings('h2')
        .siblings('p[class="movieCardRating"]')
        .siblings('p[class="movieCardReleaseDate"]')
    });

    it('Should be able to load a movieDetails page', () => {
      cy.get('article[id=337401]')
        .click()
        .intercept('GET', '/api/v2/movies/337401', {
            fixture: 'sampleMovie.json'
        })
        .get('div[class="modal"]')
        .contains("Mulan")
    });

    it('Should be able to click the close button in the Movie Details page and return to the Home page', () => {
      cy.visit('http://localhost:3000/337401')
        .get('button[class="movie-details-close-button"]')
        .click()
        .url('http://localhost:3000')
    });

    it('Should be able to click on the back and forward buttons in the browser to navigate to previously selected paths', () => {
      cy.visit('http://localhost:3000/')
        .get('article[id=337401]')
        .click()
        .url('http://localhost:3000/337401')
        .go('back')
        .url('http://localhost:3000')
        .go('forward')
        .url('http://localhost:3000/337401')
    });

    it('Should be able to load the correct movie details page given a specific URL', () => {
      cy.visit('http://localhost:3000/337401')
        .get('div[class="modal-backdrop-img"]')
        .get('img[alt="Mulan poster"]')
        .get('div[class="modal-title"]')
        .get('p[id="average-rating"]')
    });

    it('Should be able to load the home page when the user hits refresh', () => {
      cy.reload()
        .get('div[class="header"]')
        .get('img')
        .get('h1[class="headerTitle"]')
        .contains('Box Office Deetz')
        .get('main[class="movieContainer"]')
        .children('article[class="movieCard"]')
        .children('img[alt="Mulan poster"]')
        .siblings('h2')
        .siblings('p[class="movieCardRating"]')
        .siblings('p[class="movieCardReleaseDate"]')
    });

    it('Should be able to load the movie details page when the user hits refresh', () => {
      cy.visit('http://localhost:3000/337401')
        .reload()
        .get('div[alt="Mulan backdrop img"]')
        .get('img[alt="Mulan poster"]')
        .get('div[class="modal-title"]')
        .contains('Mulan')
        .get('p[id="average-rating"]')
    });
});