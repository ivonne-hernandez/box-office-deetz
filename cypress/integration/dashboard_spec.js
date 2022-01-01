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

  it('As a user, I should be able to click on the header and be navigated to the homepage', () => {
    cy.get('h1[class="headerTitle"]').click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it('As a user, when I visit the homepage I should see movie cards displayed ', () => {
    cy.get('main[class="movie-container"]').should('have.length', 1)
      .children('article[class="movie-card"]').should('have.length', 5)
      .children('img').should('have.length', 5)
      .siblings('h2').should('have.length', 5)
      .siblings('p[class="movie-card-rating"]').should('have.length', 5)
      .siblings('p[class="movie-card-release-date"]').should('have.length', 5);
  });

  it('As a user, when I visit the homepage and hit refresh, I should still see the same content that was previously displayed', () => {
    cy.reload();
    
    cy.get('main[class="movie-container"]').should('have.length', 1)
    .children('article[class="movie-card"]').should('have.length', 5)
    .children('img').should('have.length', 5)
    .siblings('h2').should('have.length', 5)
    .siblings('p[class="movie-card-rating"]').should('have.length', 5)
    .siblings('p[class="movie-card-release-date"]').should('have.length', 5);
  });

  it('As a user, I should be able to click on a movie poster and be navigated to the movieDetails page which contains the movie title, poster, backdrop, movie details, favorite and back buttons', () => {
    cy.intercept('GET', '/api/v2/movies/337401', {
      fixture: 'sampleMovie.json'
    });
      
    cy.get('article[id=337401]')
      .click()
      .url().should('eq', 'http://localhost:3000/337401')
      .get('div[class="movie-details-title"]').contains("Mulan")
      .get('img[class="movie-details-poster"]').should('have.length', 1)
      .get('img[class="movie-details-backdrop-img"]').should('have.length', 1)
      .get('div[class="movie-content"]').contains("Mulan")
      .get('img[class="favorite-button"]').should('have.length', 1)
      .get('button[class="close-button"]').should('have.length', 1)
  });

  it('As a user, I should be able to click the Back button in the Movie Details page to return to the Home page', () => {
    cy.visit('http://localhost:3000/337401')
      .get('button[class="close-button"]')
      .click()
      .url().should('eq','http://localhost:3000/');
  });

  it('As a user, when I click on a movie poster and go back, forward or refresh using the browser buttons, I will be navigated to the previously selected path', () => {
    cy.get('article[id=337401]')
      .click()
      .url().should('eq', 'http://localhost:3000/337401')
      .go('back')
      .url().should('eq', 'http://localhost:3000/')
      .go('forward')
      .url().should('eq', 'http://localhost:3000/337401')
      .reload().url().should('eq', 'http://localhost:3000/337401');
  });

  it('As a user, when I visit the homepage and click on the star of a movie card, I should see that a previously white star is now orange and vice versa', () => {
    cy.get('article[id=337401]')
    .children('div[class="star-container"]')
    .children('img[class="favorite-button"]').should('have.class', "favorite-button")
    .click();

    cy.get('article[id=337401]')
    .children('div[class="star-container"]')
    .children('img[class="unfavorite-button"]').should('have.class', "unfavorite-button")
    .click();

    cy.get('article[id=337401]')
    .children('div[class="star-container"]')
    .children('img[class="favorite-button"]').should('have.class', "favorite-button");
 
  });

  it('As a user, if I haven\'t favorited any movies, when I click the Favorite Movies link I will be navigated to the favorites page where I will see a message that tells me to start favoriting movies and the Favorite Movies link is now a Home link', () => {
    cy.url().should('eq', "http://localhost:3000/")
      .get('a[class="favorite-movies-link"]').contains("Favorite Movies")
      .click()
      .url().should('eq', 'http://localhost:3000/favorites')
      .get('div[class="no-favorites"]').children().should('have.length', 3);

    cy.get('a[class="home-link"]').contains("Home")
      .click()
      .url().should('eq', 'http://localhost:3000/');
  });

  it('As a user, when I favorite a movie on the homepage and click on the Favorite Movies link, I will be navigated to the favorites page and see the favorited movie displayed.', () => {
    cy.get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]').should('have.class', "favorite-button").click()
    .should('have.class', "unfavorite-button")
    .get('a[class="favorite-movies-link"]').contains("Favorite Movies").click()
    .get('main[class="movie-container"]').should('have.length', 1)
    .get('article[id=337401]')
    .children('div[class="star-container"]')
    .children('img[class="unfavorite-button"]').should('have.class', "unfavorite-button")
  });

  it('As a user, I should be able to visit the Favorite Movies page and unfavorite a movie card which will remove the unfavorited movie from the Favorite Movies page as well as the homepage.', () => {
    cy.intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: ['337401']
      }
    })
    
    cy.get('article[id=337401]')
    .children('div')
    .children('img[class="favorite-button"]').should('have.class', "favorite-button").click()
    .should('have.class', "unfavorite-button")

    .get('div[class="header"]')
    .contains('Favorite Movies')
    .click()
    
    .get('main[class="movie-container"]')
    .get('article[id=337401]')
    .children('div')
    .children('img[class="unfavorite-button"]')
    .click()
    .intercept('GET', '/api/v1/favorite-movies', {
      body: {
        faves: []
      }
    })
    .get('div[class="no-favorites"]').contains("icon on a Movie to add it to your Favorites list.")

    cy.visit('http://localhost:3000/')
      .get('article[id=337401]')
      .children('div')
      .children('img[class="favorite-button"]').should('have.class', "favorite-button")
  });
  
  it.only('Should be able to unfavorite a movie from the movie details page, return to the homepage, and see that the movie is no longer favorited.', () => {
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