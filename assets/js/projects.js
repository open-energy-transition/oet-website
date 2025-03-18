
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
            // category: 'consultancy', 'software development', 'training and capacity building'],
            {
              category: ['software development', 'consultancy'],
              status: 'ongoing',
              imageUrl: '',
              title: 'Interfacing Open Energy System Planning with ENTSO models and contributing to the TYNDP',
              subtitle: 'Innovation project on open-source tool for the TYNDP process',
              description: 
              'The Ten-Year Network Development Plan (TYNDP) is essential for shaping the future of European energy. \
              However, the process used by 40 system operators to align national energy strategies and investment \
              priorities is often complex and difficult to replicate.\
              This complexity can hinder collaboration, slow down the integration of new technologies, and make it \
              harder for stakeholders to make informed, data-driven decisions. This, in turn, impacts the transition \
              to a more sustainable and interconnected European energy system.\
              This innovation project, in collaboration with ENTSO-E, aims to address these challenges by developing a \
              PyPSA-based open-source toolelectricity network expansion model for scenario building and cost-benefit \
              analysis, which is fully compatible with the TYNDP workflow. This tool will make TYNDP results easily \
              reproducible and adaptable, fostering faster, more collaborative,  andmore efficient energy planning to \
              support a sustainable energy infrastructure for Europe.',
              date: '2024-09-01',
              client: 'Breakthrough Energy, Google, European Climate Foundation',
              partner: 'European Network of Transmission System Operators for Electricity (ENTSO-E)',
            },            
            {
              category: ['training and capacity building'],
              status: 'completed',
              imageUrl: 'assets/img/projects/eurelectri.jpeg',
              title: 'Comprehensive PyPSA Training Session',
              subtitle: 'Equipping energy professionals with advanced skills of open source energy modeling',
              description: 
              'In December 2024, an in-depth PyPSA training session equipped participants with vital \
              advanced energy modeling skills. The training included five sessions: basic PyPSA concepts, installation \
              tutorials, demo model building, an overview of the PyPSA ecosystem, and an introduction to PyPSA-Eur. \
              Participants learned PyPSA fundamentals, installed necessary tools like Conda and Jupyter Notebook, \
              and built a demo model through live coding. They explored ecosystem tools, datasets, and community resources, \
              and gained insights into PyPSA-Eur’s capabilities, data, and installation. Hands-on tutorials and Q&A sessions \
              ensured practical knowledge, empowering attendees to effectively use PyPSA for power system modeling.',
              date: '2024-11-12',
              partner: 'Eurelectric',
            },
            {
              category: ['consultancy'],
              status: 'completed',
              imageUrl: 'assets/img/projects/form_energy.png',
              title: 'System Benefits of Energy Storage in Germany',
              subtitle: 'Quantification of energy storage benefits in reducing carbon emissions \
              in the German electricity system',
              description: 
              'Energy storage technologies are essential in low-carbon energy systems, but there \
              is an imbalance in attention given to different types of storage. While short-duration \
              storage is increasingly popular, the system value of long-duration storage is less well studied. \
              This gap in knowledge limits the potential for fully optimizing energy systems. Multi-day energy storage, \
              in particular, offers significant untapped benefits that could contribute to a more \
              sustainable energy future.\
              This project quantifies these benefits using a validated, policy-relevant \
              energy system model focused on Germany. The model integrates a range of storage \
              solutions from short to long-duration storage, providing valuable insights for various \
              scenarios. The outcome includes a detailed report and open-source model code, which will \
              support global research and inform policy decisions about the role of different energy storage technologies.\
              The insights generated by this project will have a significant impact on the energy \
              storage sector. By showcasing the value of long-duration storage, the project will help \
              reshape energy policies, guiding future investments in storage technologies. It will also support \
              the optimization of energy systems, contributing to a more resilient, sustainable, and decarbonized \
              energy future globally.',
              date: '2024-09-22',
              partner: 'Form Energy',
            },
            {
              category: ['consultancy'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/ICCT.jpeg',
              title: 'Synthetic Fuels for Clean Transportation in the U.S.',
              subtitle: 'Assessment of the Electrofuels Supply Potential Using Grid Modeling',
              description: 
              'Electrofuels have the potential to significantly reduce greenhouse gas emissions compared to \
              petroleum, especially when produced using low-carbon, grid-connected renewable electricity. As the \
              transport sector seeks to decarbonize, these alternative fuels present a promising solution.\
              Despite their potential, the production and integration of electrofuels into existing systems require a detailed \
              understanding of renewable resource availability, cost, and electricity system dynamics. The interaction between \
              electrofuels production and other sources of electricity demand is complex but crucial to optimizing their use.\
              This research project combines an assessment of renewable resource potential and cost with advanced capacity expansion \
              modeling. It considers current grid resources, evolving electricity system needs, and interactions between \
              electrofuel production and other electricity demands, to provide a comprehensive analysis of their role in decarbonizing \
              the transport sector.\
              The findings from this research will offer valuable insights into how electrofuels can be efficiently integrated into \
              the energy system, helping policymakers and industry leaders make informed decisions about their role in achieving \
              transport sector decarbonization. This will contribute to shaping sustainable energy strategies and support global efforts \
              to reduce carbon emissions in transportation.\'
              date: '2024-09-01',
              client: 'The International Council on Clean Transportation',
            },
            {
              category: ['training and capacity building'],
              status: 'past',
              imageUrl: 'assets/img/projects/ich.jpeg',
              title: 'Advancing Hydropower Integration in Africa with PyPSA',
              subtitle: 'Equipping Energy Professionals to Lead Africa’s Renewable Energy Transition',
              description: 
              'Open Energy Transition (OET) recently collaborated with the International Centre for Hydropower (ICH) \
              to deliver a transformative workshop on Modeling the Integration of Hydropower into Modern Energy Systems \
              for Africa. Held in Nairobi, Kenya, from August 19–23, 2024, the program brought together 23 professionals \
              from Eswatini, Ghana, Kenya, Nigeria, South Africa, Tanzania, and Zambia. \
              Delegates gained hands-on experience with Python-based energy modeling tools, PyPSA, and PyPSA-Earth, \
              exploring renewable integration, hydropower systems, and uncertainty modeling through Monte Carlo simulations. \
              This initiative empowers African energy experts to drive sustainable, reliable energy transitions across the continent.',
              date: '2024-08-26',
              partner: 'The International Centre for Hydropower (ICH)',
            },
            {
              category: ['consultancy', 'software development'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/Project-Innerspace-logo.webp',
              title: 'Exploring the Geothermal Resource Potential in the U.S.',
              subtitle: 'Viability Assessment of Geothermal Using Integrated Energy Planning',
              description: 
              'Geothermal energy has vast potential to provide baseload power for the global power and heating sectors. \
              Despite this, it currently contributes only 0.4% to the United States energy mix and 0.5% globally, which \
              highlights a significant untapped opportunity.\
              While geothermal energy offers a stable, low-carbon source of power, its integration into energy systems \
              has been limited. Enhanced and hydrothermal geothermal systems can play a crucial role in diversifying \
              energy sources and supporting the transition to a more sustainable energy future.\
              This project integrates enhanced and hydrothermal geothermal systems into an open-source PyPSA-based \
              energy system model, allowing for co-optimization of investment and operation of power and thermal assets \
              at varying temperatures. These insights will be invaluable in advancing the role of geothermal energy, \
              especially for policymakers looking to achieve net-zero objectives.\
              The outcomes of this project will provide critical insights into the integration of geothermal energy \
              into modern energy systems. It will support the U.S. and global energy transition, offering guidance \
              for future investments and contributing to the promotion of geothermal energy as a key player in achieving \
              global net-zero targets.',
              date: '2024-07-01',
              partner: 'Project InnerSpace',
            },
            {
              category: ['software development'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/open-source-solvers-comparison-to-commercial-solver-Gurobi.png',
              title: 'Solver Benchmark',
              subtitle: 'Solver Benchmark for Energy System Planning Optimization Problems',
              description: 
              'Currently, there is no benchmark available to track the advancements of open-source solvers for \
              energy planning problems. This gap creates challenges for energy planners trying to evaluate and compare \
              different solvers effectively, and for solver developers trying to assess how well their solvers can \
              handle typical energy problems.\
              Open-source solvers play a crucial role in energy planning, but the lack of a transparent benchmark \
              limits their accessibility and hinders large-scale computations needed for sustainable energy transitions. \
              Energy planners face difficulties in assessing performance across various models.\
              This project develops a benchmark platform that will evaluate open-source solvers based on key metrics \
              like speed, memory consumption, and solvability across different commonly used energy planning models. \
              It will provide continuous updates and a publicly accessible website for comparison, fostering improvement \
              and innovation in the field.\
              The benchmark platform will significantly enhance the transparency of solver capabilities for energy \
              modeling, enabling more efficient and informed decision-making. By providing continuous updates and \
              facilitating comparisons, it will drive the development of more powerful and scalable solvers, accelerating \
              the transition to sustainable energy systems.',
              date: '2024-06-06',
              client: 'Breakthrough Energy',
              partner: 'Gurobi Optimization',
            },
            {
              category: ['consultancy'],
              status: 'completed',
              imageUrl: 'assets/img/projects/PyPSA-UA_Instrat_project.jpg',
              title: 'Instrat Ukraine',
              subtitle: 'Modelling Ukraine’s energy system',
              description: 
              'The Ukrainian government is committed to investing in new nuclear generation, aiming for a future energy \
              mix of 50% nuclear and 50% renewable by 2050. However, due to the ongoing Russian-Ukraine conflict, the Ukrainian \
              power sector is losing its remaining flexible coal and hydro capacities. With rising electricity prices, more \
              consumers are turning to small-scale solar for self-consumption, resulting in significant savings on their energy bills.\
              These developments are putting immense pressure on the Ukrainian power system, particularly in terms of maintaining grid \
              flexibility. As the reliance on residential PV grows, and with limited flexible generation options, the system \
              faces increasing challenges in ensuring stability and reliability over the next several years.\
              This project extends the PyPSA-Eur model to the Ukrainian energy system, and uses it to analyze long-term flexibility \
              constraints within Ukraine over the next five to seven years. By considering the inflexibility of the supply \
              side and the growing presence of residential PV, the project seeks identifiesy key bottlenecks and proposes strategies \
              for optimizing asset management and system expansion.\
              By exploring two scenarios—Conflict and Peace—the project provides critical insights to inform policy and \
              advocacy efforts, helping to build a more resilient and sustainable energy sector in Ukraine during and after \
              the current conflict. It will guide future energy strategies, ensuring that the Ukrainian grid can adapt to both current \
              challenges and long-term energy goals.\,
              date: '2024-02-01',
              partner: 'Instrat, Clean Energy Lab',
            },
            {
              category: ['consultancy', 'software development', 'training and capacity building'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog9-handshake.png',
              title: 'Collaborative Energy Modeling with System Operators',
              subtitle: 'Enhancing TransnetBW’s Model compatibility',
              description: 
              'In today’s fast-paced energy sector, there’s a growing need for faster updates, improved quality, and cost-effective \
              solutions without compromising data security.\
              By updating German TSO TransnetBW’s in-house energy planning model and making it compatible with the current \
              open-source version of the PyPSA-Eur model, the project will help to streamline updates, involve the user community \
              in enhancing quality, and reduce costs. This shift will foster improved teamwork and better overall system efficiency, \
              essential for adapting to the evolving energy landscape.\
              The project focuses on two key phase. In the first, we plan, execute and evaluate the new approach. In the second phase, \
              this is followed by in-house training to ensure smooth integration. The goal is to improve open-source energy system \
              modeling in a TSO setting, enabling faster, more cost-effective workflows that prioritize teamwork and long-term planning.\
              This update will significantly enhanceTransnetBW’s modeling process by enabling quicker, more accurate updates, reducing \
              costs, and fostering a more collaborative environment. It will also set a new standard for how energy systems are modeled \
              at theTSOs, driving efficiency and innovation while ensuring data security.\,
              date: '2023-12-06',
              partner: 'TransnetBW GmbH',
            },
            {
              category: ['training and capacity building'],
              status: 'past',
              imageUrl: 'assets/img/projects/blog7-stanford-training.jpg',
              title: 'Exclusive Stanford University Training',
              subtitle: 'Helping to create the next generation of open energy modellers and supporting the Stanford network',
              description: 
              'On November 10th, 2023, Stanford hosted an elite PyPSA training session. Led by industry \
              experts including Maximilian Parzen (CEO at OET) and Martha Maria Frystacki (Head of Energy \
              Modelling at OET), attendees honed skills in power systems analysis using tools like \
              PyPSA, Linopy, and Atlite. The training demystified open-source practices, emphasizing \
              hard vs. soft forks. It was tailored not only to boost technical acumen but also to fortify \
              the Stanford open energy planning network. Participants brought basic Python knowledge; \
              prior power system experience, though beneficial, wasn\'t mandatory. All attendees \
              received exclusive resources and software access.',
              date: '2023-11-10',
              partner: 'Stanford University and Carnegie Institution for Science',
            },
            {
              category: ['training and capacity building'],
              status: 'past',
              imageUrl: 'assets/img/projects/blog8-openmod-meets-usa.jpg',
              title: 'Openmod meets USA 2023',
              subtitle: 'Organising the largest open energy modelling conference in North America',
              description: 
              'In November 2023, the Open Energy Transition (OET) team successfully co-organized \
              the "openmod-meets-usa-2023" workshop at Stanford University. Held in \
              collaboration with Stanford\'s Bits & Watts Initiative, this event reignited the \
              passion for open energy modelling, a domain where openmod has been a pioneering \
              grassroots movement. After previous successes in Vienna and a hiatus since NREL\'s \
              2019 session in the USA, OET stepped up to fill the gap. Attendees, ranging from \
              seasoned energy experts to newcomers, were offered a platform that hosted insightful \
              sessions, engaging talks, and hands-on experiences. Highlights included lightning talks, \
              live tech demos, breakout sessions, and a networking platform unlike any other. \
              This free event not only upheld openmod\'s tradition but also showcased OET\'s \
              commitment to advancing energy planning and collaborative innovation. Link to the event: \
              https://forum.openmod.org/t/openmod-meets-usa-2023/4148#openmod-meets-usa-2023-workshop-details-1',
              date: '2023-11-13',
              partner: 'Stanford University and their Bits and Watts Initiative',
            },
            {
              category: ['consultancy', 'software development'],
              status: 'completed',
              imageUrl: 'assets/img/projects/blog6-riccardo-annandale-unsplash.jpg',
              title: 'Flattening the Energy Curve',
              subtitle: 'An assessment of efficiency measures and their impact on the European energy system',
              description: 
              'To achieve the EU’s ambitious target of a 90–95% emissions reduction by 2040, energy affordability, social and \
              household impacts, and industrial considerations must be carefully addressed. Without effective measures, the \
              transition risks creating financial and structural challenges for consumers and industries alike.\
              Energy efficiency measures play a crucial role in reducing energy demand, stabilizing prices, and ensuring \
              a just transition. However, a comprehensive evaluation is needed to determine their effectiveness in reducing \
              generation needs, managing peak demand, and influencing energy costs across different sectors.\
              Supported by the EEE consortium, this project leverages the PyPSA-Eur integrated energy system planning tool \
              to analyze the impact of various renovation scenarios, energy management strategies, and demand-side flexibility \
              measures. The study provides insights into how individual and combined efficiency measures can optimize the \
              energy system while maintaining affordability and reliability.\
              The findings will inform data-driven decision-making in energy policy and planning, helping stakeholders \
              implement the most effective strategies for emissions reduction. By offering a clear understanding of efficiency \
              measures’ benefits, this research will support a more sustainable, cost-effective, and socially equitable \
              energy transition across Europe.',
              date: '2023-09-01',
              partner: 'European Climate Foundation (ECF), European Insulation Manufacturers Association (EURIMA), European Copper Institute (ECI)',
            },
            {
              category: ['software development', 'training and capacity building'],
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
              date: '2023-08-01',
              partner: 'Centre for Environment and Energy Development (CEED)',
            },
            {
              category: ['software development', 'training and capacity building'],
              status: 'ongoing',
              imageUrl: 'assets/img/projects/blog2.jpg',
              title: 'Sustainable Hydrogen and Power-to-X ramp-up in Africa',
              subtitle: 'Exploring opportunities of green fuels in Africa',
              description: 
              'The global hydrogen economy presents a major opportunity for several African countries, offering new \
              economic prospects and advancing sustainable energy transitions. However, unlocking this potential requires \
              targeted strategies, knowledge transfer, and integrated energy system modeling to facilitate market development.\
              To successfully participate in this emerging market, African countries need robust infrastructure, policy \
              support, and strategic partnerships. Developing hydrogen and Power-to-X (PtX) value chains between Africa and \
              Europe/Germany is critical for ensuring sustainable, long-term growth in the sector. Advanced digital tools \
              and sector coupling approaches can further optimize energy planning and deployment.\
              This project focuses on strengthening the global perspective of energy research, advancing sector coupling in \
              the energy transition, and harnessing digitization to enhance energy systems. It will empower African partner \
              countries through knowledge transfer, evaluate H₂/PtX value chains, and model transformation pathways for hydrogen \
              integration across Africa, the EU, and Germany. Additionally, it develops key market-enabling measures, such as \
              criteria catalogs and financing instruments, to support hydrogen market expansion in Africa.\
              By equipping African partner countries with advanced energy system modeling capabilities and policy insights, this \
              project will facilitate a structured and sustainable hydrogen market ramp-up. It will support informed decision-making, \
               cross-border collaboration, and investment strategies, ensuring that Africa plays a crucial role in the global \
               hydrogen economy. As consultants and developers, Open Energy Transition (OET) will provide essential support in \
               software development, maintenance, and training, ensuring the long-term efficiency and usability of the developed tools.',
              date: '2023-09-01',
              partner: 'H2Global meets Africa Consortium',
            },
            {
              category: ['software development', 'training and capacity building'],
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
              date: '2023-03-01',
              partner: 'University of Zambia, Climate Compatible Growth (CCG)',
            },
            {
              category: ['consultancy', 'software development', 'training and capacity building'],
              status: 'past',
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
              date: '2023-05-01',
              partner: 'Agora Energiewende',
            },
            {
              category: 'software development',
              status: 'ongoing',
              imageUrl: 'assets/img/get_involved/tauritro-logo-small.png',
              title: 'Project Tauritron',
              subtitle: 'An user focused open-source webinterface for executing and visualizing energy system models',
              description: 'The open source project that CEO Maximilian Parzen was awarded as individual, \
              puts the human back at the center of energy planning decisions. This project will improve how people \
              interact with energy data, enable simple calculations and visualizations, promote public engagement, \
              and improve human-centered decision making. Specifically, the project aims to develop a graphical web \
              interface for the popular open-source energy system model, PyPSA, which is used in research and industry \
              worldwide. After successful development, the open-source developments can be adapted by any other tool.',
              date: '2023-03-01',
              partner: 'Prototype Fund, Federal Ministry of Education and Research Germany',
            },
            {
              category: ['software development', 'training and capacity building'],
              status: 'past',
              imageUrl: 'assets/img/projects/blog5.jpg',
              title: 'Multi-Country Electricity Transition Potential and Challenges Project',
              subtitle: 'Training and supporting modelling teams in 10 countries',
              description: 'OET joined the Multi-Country Electricity Transition Potential and Challenges Project (MCET) \
              as a model instructor for power system planning in deep decarbonization scenarios. The project aimed to \
              analyze barriers to decarbonization in individual countries and build capacity through monthly and ad-hoc \
              modeling trainings. OET provided training materials, "modeling kits," and technical assistance to modeling \
              teams for calibration, execution, and validation of decarbonization scenarios. The projects focus was on \
              delivering feasible decarbonization pathways for the electric power sector, contributing to the global \
              transition towards sustainable and low-carbon electricity systems.',
              date: '2022-09-01',
              partner: 'Environmental Defense Fund (EDF)',
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
      card.className = 'card-projects';
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
    // Add top margin to page selection buttons
    const pageButtons = paginationContainer.querySelectorAll('.page-link');
    pageButtons.forEach(function(button) {
      button.style.backgroundColor = '#E31937'; // Set the desired color
      button.style.borderColor = '#E31937';
    });
    }
  });