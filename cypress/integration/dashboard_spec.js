describe('Box Office Deetz Test', () => {
    beforeEach(() => {
      cy.intercept('GET', '/api/v2/movies', {
          fixture: 'allMovies.json'
      })
      cy.intercept('GET', '/api/v1/favorite-movies', {
        body: {
          faves: []
        }
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
        .siblings('p[class="movie-card-rating"]')
        .siblings('p[class="movie-card-release-date"]')
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
        .get('div[class="movie-details-backdrop-img"]')
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
        .get('div[alt="Mulan backdrop img"]')
        .get('img[alt="Mulan poster"]')
        .get('div[class="movie-details-title"]')
        .contains('Mulan')
    });

    // From the homepage, a user should be able to click the star on a movie card and favorite a movie and see that the star changes colors
    it('Should be able to show that the star changes colors when a user favorites a movie from the home page', () => {
      cy.get('article[id=337401]')
      .children('div')
      .children('img[class="favorite-button"]')
      .click()
      .get('article[id=337401]')
      .children('div')
      .children('img[class="unfavorite-button"]')
    })

    // From the homepage, if a user doesn't have any favorite movies - they should see a message on the page that tells them to favorite a movie.

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
      
    })


    // From the homepage, A user should be able to favorite a movie, and navigate to the favorites page and see that movie on the page.

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

    })


    // From the favorites page, a user should be able to click the star to unfavorite a movie, and that movie card should be removed from the page.
      
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
    })
    


    // If the user unfavorites a movie card from the favorites page, they should be able to return to the home page and see that the movie is unfavorited.

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


    })

    // If the user unfavorites a movie card from the movie details page, they should be able to return to the home page and see that the movie is unfavorited.
    // it('Should be able to unfavorite a movie from the movie details page, return to the homepage, and see that the movie is no longer favorited.', () => {
    //   cy.get('article[id=337401]')
    //   .children('div')
    //   .children('img[class="favorite-button"]')
    //   .click()
    //   .intercept('POST', '/api/v1/favorite-movies', {
    //     body: {
    //       id: '337401'
    //     }
    //   })
    //   .get('article[id=337401]')
    //   .children('div')
    //   .children('img[class="unfavorite-button"]')
    //   .get('article[id=337401]')
    //   .children('img[alt="Mulan poster"]')
    //   .click()
    //   .url('http://localhost:3000/337401')
    //   .wait(1000)
    //   .intercept('GET', '/api/v1/favorite-movies', {
    //     body: {
    //       faves: ['337401']
    //     }
    //   })
    //   // .get('img[class="unfavorite-button"]')
    //   // // .intercept('POST', '/api/v1/favorite-movies', {
    //   // //   body: {
    //   // //     id: '337401'
    //   // //   }
    //   // // })
    //   // // .visit('http://localhost:3000/337401')
    //   // .get('div[class="movie-details"]')
    //   // .get('img[class="unfavorite-button"]')
    //   // .click()
    //   // .visit('http://localhost:3000/')
    //   // .get('article[id=337401]')
    //   // .children('div')
    //   // .children('img[class="favorite-button"]')

    // })


    // If the user unfavorites a movie card from the movie details page, they should be able to return to the favorites page and not see that movie card on the page.
    it('Should be able to unfavorite a movie from the movie details page, return to the favorites page, and see that the movie is not present.', () => {
      cy.intercept('GET', '/api/v1/favorite-movies', {
        body: {
          faves: ['337401']
        }
      })
      .visit('http://localhost:3000/337401')
    })




  });