
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
              category: ['software development', 'support and training'],
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
              category: ['software development', 'support and training'],
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
              category: ['software development', 'support and training'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog3.jpg',
              title: 'Energy System Chef Zambia',
              subtitle: 'The energy system implications of transitions to clean cooking in Zambia',
              description: 'The Energy System Chef Zambia project explores the energy system implications \
              of mass e-cooking adoption. It aims to develop implementation scenarios and a tangible roadmap \
              for a just energy transition in Zambia. With 90% of the population lacking clean cooking access, \
              this research is crucial. It analyzes the wider energy system implications of clean cooking, \
              models alternative clean cooking fuel solutions, reviews carbon financing strategies, and assesses \
              livelihood implications. Stakeholder engagement includes relevant Zambian ministries, USAID, ZESCO, \
              and the Modern Energy Cooking Services Programme. Open Energy Transition (OET) provides essential \
              software support, capacity building, and maintenance. OETs expertise ensures successful \
              implementation of project objectives and efficient functioning of developed software tools. \
              This project contributes to Zambias clean cooking transition and promotes a sustainable and just energy system.',
              date: '03/2023',
              partner: 'University of Zambia, Climate Compatible Growth (CCG)',
            },
            {
              category: ['consultancy', 'software development', 'support and training'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog4.jpg',
              title: 'Energy Transition Kazakhstan',
              subtitle: 'Exploring more ambitious energy transition pathways for Kazakhstan',
              description: 'Agora Energiewende has commissioned OET to model the Kazakh power system, focusing on \
              significant increases in solar and wind energy generation beyond the official mid-term goal of 15% \
              renewable energy share by 2030. The project includes the incorporation of transmission system \
              infrastructure in the energy planning study. OET will validate the model, conduct workflow tests, \
              and perform model runs to assess the impacts of higher variable generation. The results will be \
              visualized for better understanding. The project also involves documenting the methodology and \
              conducting a technical review. Through this project, OET aims to provide insights into surpassing \
              renewable energy targets, supporting decision-making, and facilitating the transition to a more \
              sustainable energy sector in Kazakhstan.',
              date: '05/2023',
              partner: 'Agora Energiewende',
            },
            {
              category: 'software development',
              status: 'ongoing',
              imageUrl: 'assets/img/get_involved/tauritro-logo-small.png',
              title: 'Project Tauritron',
              subtitle: 'An user focused open-source webinterface for executing and visualizing energy system models',
              description: 'The open source project that our CEO Maximilian Parzen was awarded as individual, \
              puts the human back at the center of energy planning decisions. This project will improve how people \
              interact with energy data, enable simple calculations and visualizations, promote public engagement, \
              and improve human-centered decision making. Specifically, the project aims to develop a graphical web \
              interface for the popular open-source energy system model, PyPSA, which is used in research and industry \
              worldwide. After successful development, the open-source developments can be adapted by any other tool.',
              date: '03/2023',
              partner: 'Prototype Fund, Federal Ministry of Education and Research Germany',
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
        const { imageUrl, title, subtitle, description, category, date, status, partner } = card;
        const cardElement = createCard(imageUrl, title, subtitle, description, category, date, status, partner);
        cardContainer.appendChild(cardElement);
      });
    
      // Render the pagination buttons
      renderPagination(totalPages);
    }
    
    function createCard(imageUrl, title, subtitle, description, category, date, status, partner) {
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
          <p class="card-text-custom"><small class="text-muted"><strong>Service:</strong> ${category}</small></p>
          <p class="card-text-custom"><small class="text-muted"><strong>Start:</strong> ${date}</small></p>
          <p class="card-text-custom"><small class="text-muted"><strong>Status:</strong> ${status}</small></p>
          <p class="card-text-custom"><small class="text-muted"><strong>Partner:</strong> ${partner}</small></p>
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