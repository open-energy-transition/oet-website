document.addEventListener('DOMContentLoaded', function() {
  const categoryFilter = document.getElementById('categoryFilter');
  const cardsPerPageSelect = document.getElementById('cardsPerPage');
  const cardContainer = document.getElementById('cardContainer');
  const paginationContainer = document.getElementById('pagination');

  let cards = []; // Array to store the card elements
  let currentPage = 1;
  let cardsPerPage = parseInt(cardsPerPageSelect.value);

  // Handle filter form submission
  categoryFilter.addEventListener('change', handleFilterFormSubmit);
  cardsPerPageSelect.addEventListener('change', handleCardsPerPageChange);
  
  // Simulate card data retrieval
  // Replace this with actual card data fetching from an API or other data source
  fetchCardData().then(function(cardData) {
    cards = cardData;
    renderCards();
  });

  function fetchCardData() {
    // Simulated asynchronous card data fetching
    return new Promise(function(resolve) {
      setTimeout(function() {
        const cardData = [
          // Card data goes here
          // Example:
          {
            category: ['software', 'research', 'blog'],
            title: 'Milestone achieved. PyPSA-Earth supports now 193 UN countries.',
            date: '2023-11-08',
            author: 'Davide Fioriti',
            source: 'https://www.linkedin.com/feed/update/urn:li:activity:7127990725647949825'
          },
          {
            category: ['software', 'research', 'blog'],
            title: 'A delegation from OET is touring 5 weeks through US meeting with leading energy system modelers and researchers.',
            date: '2023-11-02',
            author: 'Martha Frysztacki',
            source: 'https://www.linkedin.com/feed/update/urn:li:activity:7125775233411604482'
          },
          {
            category: ['research','blog'],
            title: 'We can model how carbon aware computing impacts hyperscaler energy needs through to 2030.',
            date: '2023-10-23',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/feed/update/urn:li:activity:7121135588472180736'
          },
          {
            category: ['software', 'research', 'blog'],
            title: 'OET team wins prestigious Young Innovator grant from German government! - The goal closing the gap to better energy planning.',
            date: '2023-10-09',
            author: 'Open Energy Transition',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_younginnovators-activity-7117062450696306690-irpu'
          },
          {
            category: ['research', 'blog'],
            title: 'OET speak at the prestigious Decision Intelligence Summit organised by Gurobi next to other optimization champs!',
            date: '2023-10-03',
            author: 'Open Energy Transition',
            source: 'https://www.linkedin.com/feed/update/urn:li:activity:7114914678387924993'
          },
          {
            category: ['research', 'blog'],
            title: 'OET is organiser of leading open energy modelling workshop (openmod) at Stanford University.',
            date: '2023-09-15',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_openmod-stanford-energymodelling-activity-7109522822145683456-xvyg'
          },
          {
            category: ['research', 'blog'],
            title: 'Empowering Europe\'s Energy Transition: OET starts new energy project assessing the impact of peak demand reduction measures on the European energy system.',
            date: '2023-08-27',
            author: 'Max Parzen',
            source: 'https://openenergytransition.org/projects.html'
          },
          {
            category: ['blog'],
            title: 'Finally! OET just shared its "Theory of Change"',
            date: '2023-07-21',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_opensource-openenergymodelling-opendata-activity-7088126997880520704-x1n2'
          },
          {
            category: ['research', 'blog'],
            title: 'New PyPSA study explores the EU requirements for hydrogen and power grid expansion for a 100% renewable energy system.',
            date: '2023-07-13',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_freethemodels-openmod-macroenergysystems-activity-7085144000264814592-gOfq'
          },
          {
            category: 'blog',
            title: 'OET CEO starts on "Project Tauritron" - an user focused open-source webinterface for executing and visualizing energy system models',
            date: '2023-03-01',
            author: 'Max Parzen',
            source: 'https://prototypefund.de/en/project/tauritron/'
          },
          {
            category: ['software'],
            title: 'Quadratic programming extension in Linopy + PyPSA and new release of global energy system model PyPSA-Earth',
            date: '2023-07-12',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_freethemodels-opensource-activity-7083387305775751168-VJAD'
          },
          {
            category: ['blog'],
            title: 'Out of stealth mode - Launch post Open Energy Transition',
            date: '2023-06-28',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_sustainableenergy-opensource-opendata-activity-7079345524318855168-mLgy'
          },
          {
            category: ['blog'],
            title: 'Canadas Energy Regulator uses open-source tool PyPSA for their outlook modelling for net-zero by 2050',
            date: '2023-06-25',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_opensource-open-reproduced-activity-7077610234768150529-qyEE'
          },
          {
            category: ['blog'],
            title: 'EU Commission JRC recommends open-source (#PyPSA) for assessing candidate hydrogen projects',
            date: '2023-06-19',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_pypsa-projectdevelopers-opensource-activity-7070326922181791745-8Os3'
          },
          {
            category: ['media'],
            title: 'Start-up. Max Parzen hilft indischem Staat',
            date: '2023-05-21',
            author: 'Elmar Schatz',
            source: 'https://www.kurier.de/inhalt.start-up-max-parzen-hilft-indischem-staat.b2a38b0c-1c08-4b6d-9599-24cc997470f4.html'
          },     
          {
            category: ['media'],
            title: 'Centre for Environment and Energy Development enters into an agreement with Open Energy Transition',
            date: '2023-05-22',
            author: 'Animesh Bisoee',
            source: 'https://www.telegraphindia.com/jharkhand/centre-for-environment-and-energy-development-enters-into-an-agreement-with-open-energy-transition/cid/1938632'
          },
          {
            category: ['blog', 'research'],
            title: 'OET team releases the the worlds first peer-reviewed, open, global-coverage electricity model generator using high-resolution open data, open source and an open community',
            date: '2023-04-10',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_pypsa-earth-a-new-global-open-energy-system-activity-7054458292261011456-PrvN'
          },
          {
            category: ['blog', 'research', 'software'],
            title: 'On Hackernews. Parzen et al. open solver funding proposal on Hackernews about optimization solvers: missing link for fully open-source energy system modeling',
            date: '2022-01-10',
            author: 'eisa01',
            source: 'https://news.ycombinator.com/item?id=31214239'
          }, 
          {
            category: ['blog', 'research', 'software'],
            title: 'E.U.: Climate-Proof Grids Require More Transparency  “Black box” U.S. energy planning hinders renewable energy development',
            date: '2023-06-27',
            author: 'Peter Fairley',
            source: 'https://spectrum.ieee.org/power-grid-transparency-eu-us'
          },     
          {
            category: ['blog'],
            title: 'Free Software, More Voices, Better Plans How future-ready, zero-cost grid models are democratizing grid planning',
            date: '2022-12-12',
            author: 'Aaron Schwartz',
            source: 'https://rmi.org/free-software-more-voices-better-plans/'
          },
          {
            category: ['media'],
            title: 'Open-source optimization tool for energy systems offers global coverage',
            date: '2023-05-17',
            author: 'Emiliano Bellini',
            source: 'https://www.pv-magazine.com/2023/05/17/open-source-optimization-tool-for-energy-systems-offers-global-coverage/'
          },
          {
            category: ['media'],
            title: 'PyPSA-Earth: a new open-source global energy system model',
            date: '2023-05-19',
            author: 'Jonathan Spencer Jones',
            source: 'https://www.smart-energy.com/industry-sectors/energy-grid-management/pypsa-earth-a-new-open-source-global-energy-system-model/'
          },
          // Add more cards here
        ];
        // Sort cards by date in descending order (most recent on top)
        cardData.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        resolve(cardData);
      }, 1000);
    });
  }

  function renderCards() {
    const selectedCategory = categoryFilter.value;
  
    // Filter the cards based on the selected category
    const filteredCards = cards.filter(function(card) {
      return (
        (selectedCategory === 'all' || card.category.includes(selectedCategory))
      );
    });
  
    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  
    // Update the current page if it exceeds the total number of pages
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }
  
    // Calculate the start and end indices of the cards to be displayed on the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    let endIndex = startIndex + cardsPerPage;
  
    if (cardsPerPage === "all") {
      endIndex = filteredCards.length; // Show all cards
    } else {
      endIndex = startIndex + parseInt(cardsPerPage);
    
      // Adjust the end index if it exceeds the total number of cards
      if (endIndex > filteredCards.length) {
        endIndex = filteredCards.length;
      }
    }
  
    // Get the subset of cards to be displayed on the current page
    const cardsForPage = filteredCards.slice(startIndex, endIndex);
  
    // Clear the card container
    cardContainer.innerHTML = '';
  
    // Render the cards for the current page
    cardsForPage.forEach(function(card, index) {
      const { title, category, date, author, source} = card;
      const cardElement = createCard(startIndex + index + 1,  title, category, date, author, source);
      cardContainer.appendChild(cardElement);
    });
  
    // Render the pagination buttons
    renderPagination(totalPages);
  }
  
  function createCard(index, title, category, date, author, source) {
    const cardCol = document.createElement('div');
    cardCol.className = 'col-md-12';

    const card = document.createElement('div');
    card.className = 'card-outputs';
    card.innerHTML = `
    <div class="card-body">
      <h6 class="output-card-title"><a href="${source}">${index}. ${title}</a></h6>
      <div class="card-text-custom">
        <span class="badge bg-secondary first-output-badge">${category}</span>
        <span class="badge bg-secondary output-badge">at ${date}</span>
        <span class="badge bg-secondary output-badge">by ${author}</span>
        <span class="badge bg-secondary output-badge"><a href="${source}" target="_blank" style="color: #ffffff;">${getSourceDomain(source)}</a></span>
      </div>
    </div>
    `;
    cardCol.appendChild(card);
    return cardCol;
  }

  function getSourceDomain(url) {
    const parser = document.createElement('a');
    parser.href = url;
    return parser.hostname;
  }

  function handleFilterFormSubmit(event) {
    event.preventDefault();
    currentPage = 1;
    cardsPerPage = parseInt(cardsPerPageSelect.value);
    renderCards();
  }

  function handleCardsPerPageChange() {
    currentPage = 1;
    cardsPerPage = cardsPerPageSelect.value === "all" ? "all" : parseInt(cardsPerPageSelect.value);
    renderCards();
  }

  function renderPagination(totalPages) {
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('li');
      pageButton.className = 'page-item';
      const link = document.createElement('a');
      link.className = 'page-link';
      link.href = '#';
      link.textContent = i;
      if (i === currentPage) {
        pageButton.classList.add('active');
      }

      link.addEventListener('click', function() {
        currentPage = i;
        renderCards();
      });

      pageButton.appendChild(link);
      paginationContainer.appendChild(pageButton);
    }
    // Add top margin to page selection buttons
    const pageButtons = paginationContainer.querySelectorAll('.page-link');
    pageButtons.forEach(function(button) {
      button.style.marginTop = '1rem'; // Adjust the margin value as needed
      button.style.backgroundColor = '#E31937'; // Set the desired color
      button.style.borderColor = '#E31937';
    });
  }
});
