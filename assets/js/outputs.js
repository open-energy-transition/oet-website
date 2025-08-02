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
            category: ["data"],
            title: "<em>Awesome Grid Model Data</em> is an open licensed, curated catalogue of electricity grid model datasets",
            date: "2025-07-10",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7348984399469686785",
          },
          {
            category: ["study"],
            title: "Daniel Ruedt (OET) presents the current status of the OpenTYNDP project at the 3rd PyPSA User Meeting",
            date: "2025-07-02",
            author: "Lukas Trippe",
            source: "https://forum.openmod.org/t/3rd-pypsa-user-meeting-on-july-2-2025-10-am-12-30-pm-cest/5281",
          },
          {
            category: ["conference"],
            title: "Open Energy Transition at the Energy Innovation Summit 2025 conducting a training session on PyPSA and two keynotes",
            date: "2025-07-01",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7345847897940226048",
          },
          {
            category: ["software"],
            title: "Open Energy Benchmark is a open-source, interactive, and reproducible platform to compare five open-source and commercial LP/MILP solvers",
            date: "2025-06-24",
            author: "Open Energy Transition",
            source: "https://openenergybenchmark.org/",
          },
          {
            category: ["conference"],
            title: "Maximilian Parzen and Harry van der Weijde (OET) at IRENA Innovation Week in Bonn",
            date: "2025-06-16",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7340304582977183745",
          },
          {
            category: ["conference"],
            title: "The team participating in the Energy Innovation Summit co-hosted with Gurobi Optimization",
            date: "2025-06-13",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7339212158490046465",
          },
          {
            category: ["conference"],
            title: "Martha (OET) spoke at the OSEAS conference in the workshop <em>Advancing Mission 300 with Open Source</em>.",
            date: "2025-06-11",
            author: "Open Source in Energy Access Symposium",
            source: "https://www.oseas.org/speakers",
          },
          {
            category: ["conference"],
            title: "David Diaz Ramos (OET) was at the launch of the Global Coalition for Energy Planning (GCEP) at the Latin America Energy Planning Summit in Brazil",
            date: "2025-06-11",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7338490267651497986",
          },
          {
            category: ["training"],
            title: "Hands-on <em>Modelling Regional Power Markets course</em> with open-source tools in Johannesburg",
            date: "2025-06-04",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7335969629426626560",
          },
          {
            category: ["conferencec", "research"],
            title: "Martha Frysztacki (OET) and Dimitar Kolichev (Eurima) present the study <em>Flattening the peak demand curve through efficient buildings</em> at C4E Forum",
            date: "2025-05-22",
            author: "Eurima (European Insulation Manufacturers Association)",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7328813526263791617",
          },
          {
            category: ["study", "software"],
            title: "Report <em>The Role of Energy Storage in Germany</em> on multi-day storage solutions in collaboration with Form Energy",
            date: "2025-05-08",
            author: "Open Energy Transition",
            source: "https://zenodo.org/records/15323663",
          },
          {
            category: ["software"],
            title: "Launch of demo version of PowerNetZero",
            date: "2025-05-07",
            author: "Open Energy Transition",
            source: "https://powernetzero.org/",
          },
          {
            category: ["webinar"],
            title: "Tobias Augspurger (OET) is speaking at Join Centre for Net Zero's (Octopus Energy) upcoming webinar on <em>Decarbonising Global Energy Systems</em>",
            date: "2025-04-15",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7317878706432098304",
          },
           {
            category: ["energy", "anniversary"],
            title: "Celebrating Open Energy Transition's 2nd anniversary: Key achievements and growth",
            date: "2024-04-10",
            author: "Maximilian Parzen",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7316115056146984960",
          },
          {
            category: ["study"],
            title: "OET is collaborating with the EU Agency for the Cooperation of Energy Regulators (ACER) on developing a tool for flexibility assessments.",
            date: "2024-04-09",
            author: "Open Energy Transition",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7315629576150310932",
          },
          {
            category: ["training"],
            title: "Open Energy Transition is delivering a course on Power System Flexible Operation at University of Cape Town.",
            date: "2025-03-06",
            author: "Priyesh Gosai",
            source: "https://www.linkedin.com/feed/update/urn:li:activity:7303325326560944129",
          },
          {
            category: ["conference"],
            title: "OET is co-hosting Energy Innovation Summit, Berlin, 2025",
            date: "2025-03-05",
            author: "Gurobi Optimization",
            source: "https://www.gurobi.com/microsite/2025-energy-innovation-summit/",
          },
          {
            category: ["policy brief"],
            title: "New policy brief from OET - <em>Free the models: How open energy system modelling unlocks the energy transition</em>",
            date: "2025-03-05",
            author: "Open Energy Transition",
            source: "https://zenodo.org/records/15006926",
          },
           {
            category: ["webinar"],
            title: "Webinar: Interoperability in Integrated Energy System Planning: Hype or Real Value?",
            date: "2025-02-24",
            author: "Open Energy Transition",
            source: "https://www.youtube.com/watch?v=vhKxLMLZdSs",
          },
           {
            category: ["study"],
            title: "ENTSO-E collaborates with OET on open-source tools for energy planning",
            date: "2025-02-18",
            author: "European Network of Transmission System Operators for Electricity (ENTSO-E)",
            source: "https://www.linkedin.com/posts/entso-e_energytransition-opensource-innovation-activity-7293296246813851649-2ynL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAVQ2RoBXzOE8KqS8FR7jSQHNtOlOApbDgA",
          },
          {
            category: ["study", "report"],
            title: "Report on PyPSA-UA (built on the PyPSA-Eur framework with simulatation of the Ukrainian power grid from the present to 2030.",
            date: "2024-11-26",
            author: "Fundacja Instrat and Clean Energy Lab (CEL)",
            source: "https://instrat.pl/en/ukraine-against-darkness/",
          },
          {
            category: ["study", "media"],
            title: "<em>Climbing Europe's Energy Demand Peak</em> - Article based on campaign Your Home Our Future",
            date: "2024-10-16",
            author: "Dimitar Kolichev, Eurima (European Insulation Manufacturers Association)",
            source: "https://www.euractiv.com/section/eet/opinion/climbing-europes-energy-demand-peak/",
          },
          {
            category: ["study", "media"],
            title: "Efficient buildings offer significant peak demand cuts, making energy transition affordable - study",
            date: "2024-10-15",
            author: "European Council for Energy Efficient Economy",
            source: "https://www.eceee.org/all-news/news/news-2024/efficient-buildings-offer-significant-peak-demand-cuts-making-energy-transition-affordable-study/",
          },
          {
            category: ["study", "media"],
            title: "Report “Flattening the Peak Demand” published on campaign website Your Home Our Future. Campaign was a collaboration with Eurima and International Copper Association Europe, supported by the European Climate Foundation",
            date: "2024-10-01",
            author: "Eurima (European Insulation Manufacturers Association), International Copper Association",
            source: "https://www.yourhomeourfuture.eu/resources/",
          },
          {
            category: ["software", "research"],
            title: "Methodology for Flexibility Needs Assessments Workshop: Max Parzen presents <em>Open energy planning for better flexibility needs assessment</em>.",
            date: "2024-09-24",
            author: "Energy Storage Coalition",
            source: "https://energystoragecoalition.eu/worskhop-on-methodology-for-flexibility-needs-assessments/",
            },  
          { 
            category: ["'summit", "innovation"],
            title:"Open Energy Transition is announced as co-hosting Energy Innovation Summit, Berlin, 2025.",
            date: "2025-03-05",
            author: 'Gurobi Optimization',
            source:
              'https://www.gurobi.com/microsite/2025-energy-innovation-summit/',
          },
          {
            category: ["media", "research", "report"],
            title:
              "Article <em>Climbing Europe's Energy Demand Peak</em> in Euractiv about study <em>Flattening the Peak Demand</em> for the campaign Your Home Our Future.",
            date: "2024-10-16",
            author: 'Dimitar Kolichev, Eurima (European Insulation Manufacturers Association)',
            source:
              'https://www.euractiv.com/section/eet/opinion/climbing-europes-energy-demand-peak/',
          },
          {
            category: ["media", "research", "report"],
            title:
              "Article <em>Efficient buildings offer significant peak demand cuts, making energy transition affordable - study</em> about study <em>Flattening the Peak Demand</em> for the campaign Your Home Our Future.",
            date: "2024-10-15",
            author: "European Council for Energy Efficient Economy",
            source:
              "https://www.eceee.org/all-news/news/news-2024/efficient-buildings-offer-significant-peak-demand-cuts-making-energy-transition-affordable-study/",
          },
          {
            category: ["media", "research", "report"],
            title: "Report <em>Flattening the Peak Demand</em> is the technical foundation of the campaign Your Home Our Future by European Insulation Manufactoreres Association (Eurima) and the International Copper Association Europe. Supported by the European Climate Foundation.",
            date: "2024-10-01",
            author: "European Insulation Manufactoreres Association (Eurima), the International Copper Association Europe, the European Climate Foundation",
            source: "https://www.yourhomeourfuture.eu/",
          },
          {
            category: ["software", "research"],
            title: "Methodology for Flexibility Needs Assessments Workshop: Max Parzen presents <em>Open energy planning for better flexibility needs assessment</em>.",
            date: "2024-09-24",
            author: "Energy Storage Coalition",
            source: "https://energystoragecoalition.eu/worskhop-on-methodology-for-flexibility-needs-assessments/",
          },
          {
          category: ["media", "research", "software"],
          title: "<em>Modeling the Integration of Hydropower into Modern Energy Systems for Africa</em> Course, with Ekaterina Fedotova and Emmanuel Bolarinwa (OET) presenting the integration of hydropower into energy systems using PyPSA",
          date: "2024-08-19",
          author: "International Centre for Hydropower",
          source: "https://ich.no/modeling-the-integration-of-hydropower-into-modern-energy-systems-for-africa/",
          },
          {
            category: ["media", "software"],
            title: "HiGHS Workshop 2024 - Max Parzen (OET) presents <em>The Role of Open-Source Solvers for Energy System Planning</em>.",
            date: "2024-06-26",
            author: "HiGHS",
            source: "https://workshop24.highs.dev/schedule",
          },
          {
            category: ["media", "software"],
            title:
              "Breakthrough Energy summit in London officially launched the open energy planning platform",
            date: "2024-06-25",
            author: "Maximilian Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_london-open-energy-ugcPost-7212093301422768128-8_MT?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["software", "research"],
            title:
              "International Renewable Energy Agency (IRENA): The 42nd edition of International Energy Workshop",
            date: "2024-06-24",
            author: "Maximilian Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_great-meeting-with-old-friends-from-the-international-activity-7211412106737307650-U4yN?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["research", "software"],
            title:
              "ECEEE SummerStudy2024 - Martha Maria F. (OET) presents <em>Flattening the Peak Demand Curve through Energy Efficient Buildings</em>",
            date: "2024-06-11",
            author: "Eurima",
            source:
              "https://www.linkedin.com/posts/european-insul-manufact-eurima-_summerstudy2024-climateneutrality-energyefficiency-activity-7204131956962279425-NxI0?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["media", "software"],
            title:
              "2nd PyPSA User Meeting - Martha Maria F. (OET) presents <em>Enhancing Energy System Analysis: OET's Role in Supporting PyPSA Workflows and Development</em>.",
            date: "2024-05-27",
            author: "Bobby Xiong and Caspar Schauß",
            source:
              "https://forum.openmod.org/t/2nd-pypsa-user-meeting-on-may-27-2024-3-pm-6-pm-cest/4675",
          },
          {
            category: ["energy", "anniversary"],
            title:
              "Celebrating one year of Open Energy Transition: Key achievements and growth in team and projects",
            date: "2024-05-07",
            author: "Open Energy Transition",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_opensource-pypsa-opensource-activity-7192433046443184128-tTXV?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["energy", "innovation", "summit"],
            title:
              "Martha Maria F. and Fabian Hofmann share insights from their experience at the Energy Innovation Summit.",
            date: "2024-04-14",
            author: "Martha Maria F.",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_energyinnovationsummit-operationalefficiency-activity-7174298297556205568-LhYT?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["employment", "software development", "energy"],
            title:
              "Join our team to develop open-source PyPSA for Power System Analysis and contribute to the energy transition",
            date: "2024-03-14",
            author: "Tom Brown",
            source:
              "https://www.linkedin.com/posts/tom-brown-226b191a0_software-engineer-looking-to-contribute-towards-activity-7166789685464264704-AKky?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["energy", "report"],
            title:
              "India's Electricity Transition Pathways to 2050: Insights from TERI's report using PyPSA",
            date: "2024-03-14",
            author: "Tom Brown",
            source:
              "https://www.linkedin.com/posts/tom-brown-226b191a0_indias-electricity-transition-pathways-ugcPost-7165251153411174400-AwIH?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["energy", "tech", "climate"],
            title:
              "Green Web Foundation discusses carbon emissions and tech trends at IEA Energy Efficiency Hub",
            date: "2023-11-14",
            author: "Green Web Foundation",
            source:
              "https://www.linkedin.com/posts/green-web-foundation_iea-2023-how-digital-infrastructure-climate-activity-7121118434393739264-ORRt?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["energy", "research", "publication"],
            title:
              "New preprint released: 'Sector-Coupled PyPSA-Earth, a Global Open-Source Multi-Energy System Model'",
            date: "2024-03-14",
            author: "Hazem Abdelkhalek",
            source:
              "https://www.linkedin.com/posts/hazemakhalek_energytransition-energiewende-sectorcoupling-ugcPost-7171167731965124612-DSRo?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["energy", "research", "sustainability"],
            title:
              "Insights on coal-phase out and cost savings through a model developed with Agora Energiewende. Study and Github code available.",
            date: "2024-03-14",
            author: "Agora Energiewende",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_modernising-kazakhstans-power-sector-through-activity-7168853279337086976-zAKu?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["software", "update"],
            title:
              "Release of PyPSA-Earth v0.3 with continental modeling and custom grid data support.",
            date: "2024-01-14",
            author: "Davide Fioriti",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_pypsaearth-birthday-energymodeling-ugcPost-7144622578450526208-t9Nn?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["awards"],
            title:
              "Martha Maria F. awarded the Erna Scheffler Prize for her PhD achievements.",
            date: "2023-11-14",
            author: "Martha Maria F.",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_erna-scheffler-f%C3%B6rderpreis-f%C3%BCr-junge-forscherinnen-activity-7128446983064690689-ifGy?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["energy", "summit", "innovation"],
            title:
              "Invitation to speak at the Decision Intelligence Summit, with Martha Maria F. presenting on accelerating energy transition.",
            date: "2023-10-14",
            author: "Open Energy Transition",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_decisionintelligence-mathematicaloptimization-activity-7114914678387924993-OQvw?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["energy", "outreach", "planning"],
            title:
              "Open Energy Transition shares benefits of open energy planning with stakeholders in Jharkhand, aiming for an accelerated and just energy transition.",
            date: "2024-03-14",
            author: "Centre for Environment and Energy Development",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_climatechange-renewableenergy-jharkhand-ugcPost-7163521056027168768-Izr1?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["collaboration", "environmental"],
            title:
              "Great time at Environmental Defense Fund discussing future collaborations near the White House.",
            date: "2023-11-14",
            author: "Open Energy Transition",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_whitehouse-activity-7133483157613338626-kMwC?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["education", "research", "workshop"],
            title:
              "Fun and insightful OpenMod workshop at Stanford discussing global sensitivity analysis and open energy modeling.",
            date: "2023-12-14",
            author: "Trevor Barnes",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_research-workshop-energymodeling-activity-7131151597060919296-S6UE?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["nonprofit", "open-source", "growth"],
            title:
              "Celebrating a fantastic year for Open Energy Transition, growing from 4 to 14 members, thanks to our innovative open-source solutions.",
            date: "2024-01-14",
            author: "Open Energy Transition",
            source:
              "https://www.linkedin.com/posts/open-energy-transition_opensource-opendata-opensource-activity-7145005694637785088-8gic?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["conference", "open-source"],
            title:
              "Engaging at OSSummit, Bilbao discussing the impact and future of open source technology.",
            date: "2023-10-14",
            author: "Maximilian Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_ossummit-ugcPost-7109912454062600192-5l9t?utm_source=share&utm_medium=member_desktop",
          },
          {
            category: ["software", "research", "blog"],
            title:
              "Milestone achieved. PyPSA-Earth supports now 193 UN countries.",
            date: "2023-11-08",
            author: "Davide Fioriti",
            source:
              "https://www.linkedin.com/feed/update/urn:li:activity:7127990725647949825",
          },
          {
            category: ["software", "research", "blog"],
            title:
              "A delegation from OET is touring 5 weeks through US meeting with leading energy system modelers and researchers.",
            date: "2023-11-02",
            author: "Martha Frysztacki",
            source:
              "https://www.linkedin.com/feed/update/urn:li:activity:7125775233411604482",
          },
          {
            category: ["research", "blog"],
            title:
              "We can model how carbon aware computing impacts hyperscaler energy needs through to 2030.",
            date: "2023-10-23",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/feed/update/urn:li:activity:7121135588472180736",
          },
          {
            category: ["software", "research", "blog"],
            title:
              "OET team wins prestigious Young Innovator grant from German government! - The goal closing the gap to better energy planning.",
            date: "2023-10-09",
            author: "Open Energy Transition",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_younginnovators-activity-7117062450696306690-irpu",
          },
          {
            category: ["research", "blog"],
            title:
              "OET speak at the prestigious Decision Intelligence Summit organised by Gurobi next to other optimization champs!",
            date: "2023-10-03",
            author: "Open Energy Transition",
            source:
              "https://www.linkedin.com/feed/update/urn:li:activity:7114914678387924993",
          },
          {
            category: ["research", "blog"],
            title:
              "OET is organiser of leading open energy modelling workshop (openmod) at Stanford University.",
            date: "2023-09-15",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_openmod-stanford-energymodelling-activity-7109522822145683456-xvyg",
          },
          {
            category: ["research", "blog"],
            title:
              "Empowering Europe's Energy Transition: OET starts new energy project assessing the impact of peak demand reduction measures on the European energy system.",
            date: "2023-08-27",
            author: "Max Parzen",
            source: "https://openenergytransition.org/projects.html",
          },
          {
            category: ["blog"],
            title: 'Finally! OET just shared its "Theory of Change"',
            date: "2023-07-21",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_opensource-openenergymodelling-opendata-activity-7088126997880520704-x1n2",
          },
          {
            category: ["research", "blog"],
            title:
              "New PyPSA study explores the EU requirements for hydrogen and power grid expansion for a 100% renewable energy system.",
            date: "2023-07-13",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_freethemodels-openmod-macroenergysystems-activity-7085144000264814592-gOfq",
          },
          {
            category: "blog",
            title:
              'OET CEO starts on "Project Tauritron" - an user focused open-source webinterface for executing and visualizing energy system models',
            date: "2023-03-01",
            author: "Max Parzen",
            source: "https://prototypefund.de/en/project/tauritron/",
          },
          {
            category: ["software"],
            title:
              "Quadratic programming extension in Linopy + PyPSA and new release of global energy system model PyPSA-Earth",
            date: "2023-07-12",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_freethemodels-opensource-activity-7083387305775751168-VJAD",
          },
          {
            category: ["blog"],
            title: "Out of stealth mode - Launch post Open Energy Transition",
            date: "2023-06-28",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_sustainableenergy-opensource-opendata-activity-7079345524318855168-mLgy",
          },
          {
            category: ["blog"],
            title:
              "Canadas Energy Regulator uses open-source tool PyPSA for their outlook modelling for net-zero by 2050",
            date: "2023-06-25",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_opensource-open-reproduced-activity-7077610234768150529-qyEE",
          },
          {
            category: ["blog"],
            title:
              "EU Commission JRC recommends open-source (#PyPSA) for assessing candidate hydrogen projects",
            date: "2023-06-19",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_pypsa-projectdevelopers-opensource-activity-7070326922181791745-8Os3",
          },
          {
            category: ["media"],
            title: "Start-up. Max Parzen hilft indischem Staat",
            date: "2023-05-21",
            author: "Elmar Schatz",
            source:
              "https://www.kurier.de/inhalt.start-up-max-parzen-hilft-indischem-staat.b2a38b0c-1c08-4b6d-9599-24cc997470f4.html",
          },
          {
            category: ["media"],
            title:
              "Centre for Environment and Energy Development enters into an agreement with Open Energy Transition",
            date: "2023-05-22",
            author: "Animesh Bisoee",
            source:
              "https://www.telegraphindia.com/jharkhand/centre-for-environment-and-energy-development-enters-into-an-agreement-with-open-energy-transition/cid/1938632",
          },
          {
            category: ["blog", "research"],
            title:
              "OET team releases the the worlds first peer-reviewed, open, global-coverage electricity model generator using high-resolution open data, open source and an open community",
            date: "2023-04-10",
            author: "Max Parzen",
            source:
              "https://www.linkedin.com/posts/maximilian-parzen-b047a1126_pypsa-earth-a-new-global-open-energy-system-activity-7054458292261011456-PrvN",
          },
          {
            category: ["blog", "research", "software"],
            title:
              "On Hackernews. Parzen et al. open solver funding proposal on Hackernews about optimization solvers: missing link for fully open-source energy system modeling",
            date: "2022-01-10",
            author: "eisa01",
            source: "https://news.ycombinator.com/item?id=31214239",
          },
          {
            category: ["blog", "research", "software"],
            title:
              "E.U.: Climate-Proof Grids Require More Transparency  “Black box” U.S. energy planning hinders renewable energy development",
            date: "2023-06-27",
            author: "Peter Fairley",
            source: "https://spectrum.ieee.org/power-grid-transparency-eu-us",
          },
          {
            category: ["blog"],
            title:
              "Free Software, More Voices, Better Plans How future-ready, zero-cost grid models are democratizing grid planning",
            date: "2022-12-12",
            author: "Aaron Schwartz",
            source: "https://rmi.org/free-software-more-voices-better-plans/",
          },
          {
            category: ["media"],
            title:
              "Open-source optimization tool for energy systems offers global coverage",
            date: "2023-05-17",
            author: "Emiliano Bellini",
            source:
              "https://www.pv-magazine.com/2023/05/17/open-source-optimization-tool-for-energy-systems-offers-global-coverage/",
          },
          {
            category: ["media"],
            title: "PyPSA-Earth: a new open-source global energy system model",
            date: "2023-05-19",
            author: "Jonathan Spencer Jones",
            source:
              "https://www.smart-energy.com/industry-sectors/energy-grid-management/pypsa-earth-a-new-open-source-global-energy-system-model/",
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
    const cardsForPage = endIndex ? filteredCards.slice(startIndex, endIndex) : filteredCards;
  
    // Clear the card container
    cardContainer.innerHTML = '';
  
    // Render the cards for the current page
    cardsForPage.forEach(function(card, index) {
      const { title, category, date, author, source} = card;
      const cardElement = createCard((startIndex ? startIndex : 0) + index + 1,  title, category, date, author, source);
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
      button.style.marginTop = '1rem';
      button.style.backgroundColor = '#fff'; // Unselected: white background
      button.style.borderColor = '#E31937';
      button.style.color = '#E31937'; // Unselected: red text
      button.style.fontWeight = 'normal';
      button.style.textDecoration = 'none';
    });
    const activePage = paginationContainer.querySelector('.page-item.active .page-link');
    if (activePage) {
      activePage.style.backgroundColor = '#E31937'; // Selected: red background
      activePage.style.color = '#fff'; // Selected: white text
      activePage.style.textDecoration = 'none'; // No underline
    }
  }
});
