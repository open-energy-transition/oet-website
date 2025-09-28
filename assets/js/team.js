function renderMemberHtml(memberData) {
  const {
    name,
    designation,
    description,
    image_link,
    mail_id,
    website_link,
    github_link,
    twitter_link,
    linkedin_link,
    country,
  } = memberData;

  // memberData
  htmlTemplate = ` 
    <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
        <div class="team text-center rounded p-3 py-4">
            <img src=${image_link} class="img-fluid avatar avatar-medium shadow rounded-pill" alt="">
            <div class="content mt-3">  
                <h4 class="title mb-0">${name}</h4>
                <small class="text-muted">${designation}</small>
                <ul class="list-unstyled mt-3 social-icon social mb-0">
                    ${
                      mail_id
                        ? `<li class="list-inline-item"><a href="mailto:${mail_id}" class="rounded"><i class="bi bi-envelope" title="Email"></i></a></li>`
                        : ""
                    }
                    ${
                      twitter_link
                        ? `<li class="list-inline-item"><a href="${twitter_link}" class="rounded"><i class="mdi mdi-twitter" title="Twitter"></i></a></li>`
                        : ""
                    }
                    ${
                      linkedin_link
                        ? `<li class="list-inline-item"><a href="${linkedin_link}" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>`
                        : ""
                    }
                    ${
                      website_link
                        ? `<li class="list-inline-item"><a href="${website_link}" class="rounded"><i class="bi bi-book-half" title="Website"></i></a></li>`
                        : ""
                    }
                    ${
                      github_link
                        ? `<li class="list-inline-item"><a href="${github_link}" class="rounded"><i class="bi bi-github" title="GitHub"></i></a></li>`
                        : ""
                    }
                </ul><!--end icon-->
            </div>
        </div>
    </div><!--end col-->`;

  return htmlTemplate;
}

document.addEventListener("DOMContentLoaded", function () {
  const githubUrl =
    "https://raw.githubusercontent.com/open-energy-transition/oet-data-bank/master/team.json";

  fetch(githubUrl)
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        const container = document.getElementById("team-container");
        container.innerHTML += renderMemberHtml(element);
        console.log(element);
      })
    );
});
