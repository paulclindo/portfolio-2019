import Flickity from "flickity";

(function initialFunction() {
  const $exploreBtn = document.getElementById("explore-button");
  const $iconSvg = document.getElementsByClassName("Social__networks");

  const socialLinks = [
    "https://www.linkedin.com/in/paulccari/",
    "https://github.com/paulclindo",
    "https://www.instagram.com/paulclindo/",
    "https://twitter.com/paulclindo"
  ];

  for (let i = 0; i < $iconSvg.length; i++) {
    $iconSvg[i].onclick = () => {
      console.log(socialLinks[i]);
      window.location.replace(socialLinks[i]);
    };
  }

  if (window.location.pathname === "/portfolio.html") {
    const $projectContainer = document.getElementById("favorite-projects");
    let slider = new Flickity($projectContainer, {
      wrapAround: false,
      pageDots: false,
      prevNextButtons: false,
      contain: true,
      groupCells: true,
      autoPlay: true
    });
    const carouselItems = document.getElementsByClassName(
      "carousel-item__play"
    );

    const linkProjects = [
      "https://testmoviepc.netlify.com/",
      "https://github.com/paulclindo/React-PlatziBadges",
      "https://pauls-spotify.netlify.com/",
      "https://mymediaplayer.netlify.com/",
      "https://github.com/paulclindo/CloningPage",
      "https://paulclindo.github.io/Netflix-Clone/"
    ];

    for (let i = 0; i < carouselItems.length; i++) {
      carouselItems[i].onclick = () => {
        window.location.replace(linkProjects[i]);
      };
    }
  } else if (window.location.pathname === "/home.html" || "/") {
    $exploreBtn.onclick = e => {
      window.location.replace("portfolio.html");
    };
  }
})();
