describe('Box Office Deetz Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/v2/movies', {
        fixture: 'allMovies.json'
    });
    
    cy.intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: ["337401"]
      }
    });

    cy.visit('http://localhost:3000');
  });

  it('As a user, I should be able to visit the homepage and see the header', () => {
    cy.get('h1[class="headerTitle"]')
      .contains('Box Office Deetz')
  });

  it('As a user, I should be able to click on the header and be navigated to the homepage', () => {
    cy.get('h1[class="headerTitle"]').click()
    cy.url().should('eq', 'http://localhost:3000/')
  });

  it('As a user, when I visit the homepage I should see movie cards displayed ', () => {
    cy.get('main[class="movie-container"]')
      .children('article[class="movie-card"]').should('have.length', 5)
      .children('img').should('have.length', 5)
      .siblings('h2').should('have.length', 5)
      .siblings('p[class="movie-card-rating"]').should('have.length', 5)
      .siblings('p[class="movie-card-release-date"]').should('have.length', 5)
  });

  it('Should be able to load a movieDetails page', () => {
    cy.get('article[id=337401]')
      .click()
      .intercept('GET', '/api/v2/movies/337401', {
          fixture: 'sampleMovie.json'
      })
      .get('article[class="movie-details-window"]')
      .get('div[class="movie-content"]')
      .contains("Mulan")
  });

  it('Should be able to click the close button in the Movie Details page and return to the Home page', () => {
    cy.visit('http://localhost:3000/337401')
      .get('button[class="close-button"]')
      .click()
      .url('http://localhost:3000')
  });

  it('Should be able to click on the back and forward buttons in the browser to navigate to previously selected paths', () => {
    cy.get('article[id=337401]')
      .click()
      .url('http://localhost:3000/337401')
      .go('back')
      .url('http://localhost:3000')
      .go('forward')
      .url('http://localhost:3000/337401')
  });

  it('Should be able to load the correct movie details page given a specific URL', () => {
    cy.visit('http://localhost:3000/337401')
      .get('img[class="movie-details-backdrop-img"]')
      .get('img[alt="Mulan poster"]')
      .get('div[class="movie-details-title"]')
      .contains('Mulan')
  });

  it('Should be able to load the home page when the user hits refresh', () => {
    cy.reload()
      .get('div[class="header"]')
      .get('img')
      .get('h1[class="headerTitle"]')
      .contains('Box Office Deetz')
      .get('main[class="movie-container"]')
      .children('article[class="movie-card"]')
      .children('img[alt="Mulan poster"]')
      .siblings('h2')
      .siblings('p[class="movie-card-rating"]')
      .siblings('p[class="movie-card-release-date"]')
  });

  it('Should be able to load the movie details page when the user hits refresh', () => {
    cy.visit('http://localhost:3000/337401')
      .reload()
      .get('img[alt="Mulan backdrop img"]')
      .get('img[alt="Mulan poster"]')
      .get('div[class="movie-details-title"]')
      .contains('Mulan')
  });

  it('Should be able to show that the star changes colors when a user favorites a movie from the home page', () => {
    cy.get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]')
    .click()
    .get('article[id=337401]')
    .children('div')
    .children('img[class="unfavorite-button"]')
  });

  it('Should be able to show a message on the favorites page if the user does not have any favorited movies', () => {
    cy.intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: []
      }
    })
    .get('div[class="header"]')
    .contains('Favorite Movies')
    .click()
    .intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: []
      }
    })
    .url('http://localhost:3000/favorites')
    .get('div[class="no-favorites"]')
    
  });

  it('Should be able to favorite a movie on the homepage and navigate to the favorites page and see the movie that was favorited.', () => {
    cy.get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]')
    .click()
    .intercept('POST', '/api/v1/favorite-movies', {
      body: {
        id: '337401'
      }
    })
    .intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: ['337401']
      }
    })
    .get('div[class="header"]')
    .contains('Favorite Movies')
    .click()
    .get('main[class="movie-container fave-movie-container"]')
    .get('article[id=337401]')

  });

  it('Should be able to visit the favorites page, unfavorite a movie card, and that movie card should no longer be present on the page.', () => {
    cy.get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]')
    .click()
    .get('div[class="header"]')
    .contains('Favorite Movies')
    .click()
    .intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: ['337401']
      }
    })
    .get('main[class="movie-container fave-movie-container"]')
    .get('article[id=337401]')
    .children('div')
    .children('img[class="unfavorite-button"]')
    .click()
    .intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: []
      }
    })
    .get('div[class="no-favorites"]')
  });
  
  it('Should be able to unfavorite a movie from the favorites page, return to the homepage, and see that the movie is no longer favorited.', () => {
    cy.get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]')
    .click()
    .intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: ['337401']
      }
    })
    .get('div[class="header"]')
    .contains('Favorite Movies')
    .click()
    .get('article[id=337401]')
    .children('div')
    .children('img[class="unfavorite-button"]')
    .click()
    .get('div[class="header"]')
    .contains('Home')
    .click()
    .get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]')


  });

  it('Should be able to unfavorite a movie from the movie details page, return to the homepage, and see that the movie is no longer favorited.', () => {
    cy.intercept('POST', '/api/v1/favorite-movies', {
      body: {
        id: '337401'
      }
    })

    cy.get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]')
    .click()
    .get('article[id=337401]')
    .children('img[alt="Mulan poster"]')

    .click()
    .visit('http://localhost:3000/337401')
    .intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: ['337401']
      }
    })
    .get('img[class="favorite-button"]')

    // cy.get('article[id=337401]')
    // .children('div')
    // .children('img[class="favorite-button"]')
    
    
    // cy.intercept('POST', '/api/v1/favorite-movies', {
    //   body: {
    //     id: '337401'
    //   }
    // });
    // .click()
    
    // cy.visit('http://localhost:3000/337401')
      // .get('img[class="favorite-button"]')
      // .click()
  });

  it('Should be able to unfavorite a movie from the movie details page, return to the favorites page, and see that the movie is not present.', () => {
    cy.intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: ['337401']
      }
    })
    .visit('http://localhost:3000/337401')
    .get('img[class="favorite-button"]')
    .click()
    .get('img[class="unfavorite-button"]')
    .click()
    .visit('http://localhost:3000/favorites')
    .contains('add it to your Favorites list')
  });  

  });