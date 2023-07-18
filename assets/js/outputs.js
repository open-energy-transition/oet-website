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
            category: 'Random',
            title: 'Project Tauritron. An user focused open-source webinterface for executing and visualizing energy system models',
            date: '03/2023',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_sustainableenergy-opensource-opendata-activity-7079345524318855168-mLgy?utm_source=share&utm_medium=member_desktop'
          },
          {
            category: 'blog',
            title: 'Project Tauritron. An user focused open-source webinterface for executing and visualizing energy system models',
            date: '03/2023',
            author: 'Max Parzen',
            source: 'https://www.linkedin.com/posts/maximilian-parzen-b047a1126_sustainableenergy-opensource-opendata-activity-7079345524318855168-mLgy?utm_source=share&utm_medium=member_desktop'
          },
          // Add more cards here
        ];
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
