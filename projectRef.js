const blogs = [
  {
    id: 1,
    imageLink: "assets/img/blogs/blog1.jpg",
    title:
      "Pakistan's power predicament Officia ea reprehenderit esse ipsum et duis aliquip.",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.Exercitation magna aliquip in deserunt dolore id et.Enim nisi quis deserunt ut cupidatat proident consectetur deserunt minim minim dolor aliqua id.",
  },
  {
    id: 2,
    imageLink: "assets/img/blogs/blog2.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
  {
    id: 3,
    imageLink: "assets/img/blogs/blog3.jpg",
    title:
      "Sunt nostrud exercitation sunt deserunt Lorem dolor magna adipisicing culpa sit ad aliquip culpa. Do aliquip eiusmod incididunt qui enim minim ipsum nostrud.",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.Non enim laborum elit amet irure est cillum irure adipisicing fugiat magna. Magna nisi non excepteur tempor duis. Laboris sint ullamco do et consectetur culpa commodo labore do irure nostrud nulla culpa quis.",
  },
  {
    id: 4,
    imageLink: "assets/img/blogs/blog4.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.Ex commodo eu anim eu culpa quis cillum nostrud excepteur amet amet nisi occaecat. Aliquip anim amet non consectetur fugiat consequat tempor duis aliquip quis non sit. Ea quis in commodo exercitation laboris veniam sint eiusmod. Id do officia enim non. Labore aliqua commodo tempor dolore. Ea commodo excepteur eu mollit occaecat laboris sint sint qui sit commodo dolore labore laboris. Velit aute elit proident magna ipsum culpa irure enim est excepteur nisi qui ipsum. ",
  },
  {
    id: 5,
    imageLink: "assets/img/blogs/blog5.jpg",
    title: "Pakistan's power predicament",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources.",
  },
  {
    id: 6,
    imageLink: "assets/img/blogs/blog3.jpg",
    title:
      "Pakistan's power predicament Magna minim ea mollit reprehenderit eiusmod id eiusmod cupidatat est qui aliquip nostrud velit.",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources. Id fugiat mollit exercitation occaecat ex dolore commodo elit. Culpa duis veniam culpa ad est reprehenderit. Tempor adipisicing Lorem dolore dolore labore nisi et. Sit ea excepteur ut mollit voluptate minim consectetur ipsum officia quis.",
  },
  {
    id: 7,
    imageLink: "assets/img/blogs/blog3.jpg",
    title:
      "Pakistan's power predicament Magna minim ea mollit reprehenderit eiusmod id eiusmod cupidatat est qui aliquip nostrud velit.",
    date: "2021-01-01",
    category: "Category 1",
    description:
      "A nationwide blackout during a sovereign debt crisis encapsulated the profound challenges facing Pakistan. Deep reforms are needed to tip the economic scales away from reliance on volatile fossil fuel imports and towards clean domestic energy sources. Id fugiat mollit exercitation occaecat ex dolore commodo elit. Culpa duis veniam culpa ad est reprehenderit. Tempor adipisicing Lorem dolore dolore labore nisi et. Sit ea excepteur ut mollit voluptate minim consectetur ipsum officia quis.",
  },
];

document.getElementById("projects-container").innerHTML = blogs
  .map((blog) => {
    return `

     <div class="project-box">
        <div class="project-title">     
        <h3>${blog.title}</h3>
        </div>

        <div class="project-img">
        <img src="${blog.imageLink}" style="width:100% ;object-fit: cover; height:250px; margin-bottom:20px" alt="blog-img" />
        </div>
          
       
        <div class="project-text">
          <p>
            ${blog.description}
          </p>
        </div>
     </div>
  `;
  })
  .join("");
