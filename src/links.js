const $exploreBtn = document.getElementById("explore-button");
const $contactBtn = document.getElementById("contact-button");

if (window.location.pathname === "/portfolio.html") {
  const carouselItems = document.getElementsByClassName("carousel-item");

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
} else if (window.location.pathname === "/home.html") {
  $exploreBtn.onclick = e => {
    window.location.replace("portfolio.html");
  };
} else {
  $contactBtn.onclick = e => {
    window.location.replace("mailto:paulclindo@gmail.com?body=Hey, Paul!");
  };
}
