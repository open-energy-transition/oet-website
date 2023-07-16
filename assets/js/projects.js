
document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('categoryFilter');
    const statusFilter = document.getElementById('statusFilter');
    const cardsPerPageSelect = document.getElementById('cardsPerPage');
    const cardContainer = document.getElementById('cardContainer');
    const paginationContainer = document.getElementById('pagination');

    let cards = []; // Array to store the card elements
    let currentPage = 1;
    let cardsPerPage = parseInt(cardsPerPageSelect.value);

    // Handle filter form submission
    categoryFilter.addEventListener('change', handleFilterFormSubmit);
    statusFilter.addEventListener('change', handleFilterFormSubmit);
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
              category: ['study/consultation', 'software development', 'support and training'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog1.jpg',
              title: 'Coal-exit modelling in Jharkhand, India',
              subtitle: 'Supporting the most important coal exit on Earth!',
              description: 
              'The Centre for Environment and Energy Development (CEED) has partnered \
              with Open Energy Transition (OET) to support energy transition in Jharkhand. \
              The collaboration aims to conduct cutting-edge research to enhance energy security \
              and low-carbon development in the state. CEED, which serves as a technical partner \
              to Jharkhands sustainable just transition task force, will utilize OETs open-source \
              energy modeling and renewable resource potential mapping to drive the energy \
              transition process. The partnership will enable the development of a bottom-up \
              energy model for Jharkhand, focusing on simulation and analysis of long-term energy \
              scenarios at the sub-national level. The collaboration will facilitate collaborative \
              energy system analyses, create an open repository for an energy database, and support \
              the state governments initiatives on energy transition. OETs expertise and open \
              technology solutions will contribute to informed decision-making and efficient \
              planning for a low-carbon future.',
              date: '08/2023',
              partner: 'Centre for Environment and Energy Development (CEED)',
            },
            {
              category: ['study/consultation', 'software development', 'support and training'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog2.jpg',
              title: 'Sustainable Hydrogen and Power-to-X ramp-up in Africa',
              subtitle: 'Exploring opportunities of green fuels in Africa',
              description: 'The project focuses on strengthening the global perspective of \
              energy research, implementing sector coupling in the energy transition, and \
              harnessing the potential of digitization for the energy transition. The objectives \
              of the project include empowering African partner countries to participate in the \
              global hydrogen economy through knowledge transfer, evaluating specific H2/PtX value \
              chains between Africa and Europe/Germany, calculating transformation pathways and \
              potentials in the EU/Germany/Africa through integrated energy system modeling, and \
              developing measures to promote the market ramp-up of hydrogen in Africa, including \
              criteria catalogs, financing instruments, and more. Open Energy Transition (OET) plays \
              a crucial role in the project by providing support in software development, maintenance, \
              and training. OETs expertise in these areas contributes to the successful implementation \
              of the projects objectives and ensures the efficient functioning of the developed software \
              tools throughout the project duration.',
              date: '09/2023',
              partner: 'H2Global meets Africa Consortium',
            },
            {
              category: 'category1',
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog3.jpg',
              title: 'Title 1',
              subtitle: 'Subtitle 1',
              description: 'Description 1',
              date: 'Date 1'
            },
            {
              category: 'category1',
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog4.jpg',
              title: 'Title 1',
              subtitle: 'Subtitle 1',
              description: 'Description 1',
              date: 'Date 1'
            },
            {
              category: 'category1',
              status: 'past',
              imageUrl: 'assets/img/projects/blog5.jpg',
              title: 'Title 1',
              subtitle: 'Subtitle 1',
              description: 'Description 1',
              date: 'Date 1'
            },
            {
              category: 'category1',
              status: 'past',
              imageUrl: 'image1.jpg',
              title: 'Title 1',
              subtitle: 'Subtitle 1',
              description: 'Description 1',
              date: 'Date 1'
            },
            {
              category: 'category1',
              status: 'past',
              imageUrl: 'image1.jpg',
              title: 'Title 1',
              subtitle: 'Subtitle 1',
              description: 'Description 1',
              date: 'Date 1'
            },
            {
              category: 'category1',
              status: 'past',
              imageUrl: 'image1.jpg',
              title: 'Title 1',
              subtitle: 'Subtitle 1',
              description: 'Description 1',
              date: 'Date 1'
            },
            {
              category: 'category2',
              status: 'ongoing',
              imageUrl: 'image1.jpg',
              title: 'Title 1',
              subtitle: 'Subtitle 1',
              description: 'Description 1',
              date: 'Date 1'
            },
            // Add more cards here
          ];
          resolve(cardData);
        }, 1000);
      });
    }

    function renderCards() {
      const selectedCategory = categoryFilter.value;
      const selectedStatus = statusFilter.value;
    
      // Filter the cards based on the selected category and status
      const filteredCards = cards.filter(function(card) {
        return (
          (selectedCategory === 'all' || card.category.includes(selectedCategory)) &&
          (selectedStatus === 'all' || card.status === selectedStatus)
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
      cardsForPage.forEach(function(card) {
        const { imageUrl, title, subtitle, description, date, partner } = card;
        const cardElement = createCard(imageUrl, title, subtitle, description, date, partner);
        cardContainer.appendChild(cardElement);
      });
    
      // Render the pagination buttons
      renderPagination(totalPages);
    }
    
    function createCard(imageUrl, title, subtitle, description, date, partner) {
      const cardCol = document.createElement('div');
      cardCol.className = 'col-md-4';

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-img-container">
          <img src="${imageUrl}" class="card-img" alt="Card Image">
        </div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${subtitle}</h6>
          <p class="card-text">${truncateDescription(description)}</p>
          <p class="card-text"><small class="text-muted">Start date: ${date}</small></p>
          <p class="card-text"><small class="text-muted">Partner: ${partner}</small></p>
        </div>
      `;

      const descriptionElement = card.querySelector('.card-text');
      const readMoreButton = document.createElement('button');
      readMoreButton.className = 'btn btn-link';
      readMoreButton.textContent = 'Read More';
      readMoreButton.addEventListener('click', function() {
        // Expand the description to full length
        descriptionElement.textContent = description;
        // Remove the "Read More" button
        card.querySelector('.btn-link').remove();
      });
    
      if (description.length > 100) {
        // Truncate the description and add "Read More" button
        descriptionElement.textContent = truncateDescription(description, 100);
        descriptionElement.appendChild(readMoreButton);
      }

      cardCol.appendChild(card);
      return cardCol;
    }

    function truncateDescription(description, maxLength) {
      const truncated = description.slice(0, maxLength);
      return truncated + (description.length > maxLength ? '...' : '');
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
    }
  });