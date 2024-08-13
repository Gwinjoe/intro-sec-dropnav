const navMobile = document.querySelector(".nav-mobile-container");
const iconMenu = document.querySelector(".icon-menu");
const iconCloseMenu = document.querySelector(".icon-close-menu");
const features = document.querySelectorAll(".features");
const company = document.querySelectorAll(".company");
const featuresList = document.querySelectorAll(".features-list");
const companyList = document.querySelectorAll(".company-list");
const featuresArrowIcon = document.querySelectorAll(".features-arrow-icon");
const companyArrowIcon = document.querySelectorAll(".company-arrow-icon");

function showMobileMenu() {
  navMobile.classList = "nav-mobile-container";
}

function hideMobileMenu() {
  navMobile.classList = "nav-mobile-container hidden";
}

for (let i = 0; i < features.length; i++) {
  features[i].addEventListener("click", function () {
    featuresList[i].classList.toggle("hidden");
    if (
      featuresArrowIcon[i].getAttribute("src") ===
      "./images/icon-arrow-down.svg"
    ) {
      featuresArrowIcon[i].setAttribute("src", "./images/icon-arrow-up.svg");
    } else {
      featuresArrowIcon[i].setAttribute("src", "./images/icon-arrow-down.svg");
    }
  });
}

for (let i = 0; i < company.length; i++) {
  company[i].addEventListener("click", function () {
    companyList[i].classList.toggle("hidden");
    if (
      companyArrowIcon[i].getAttribute("src") === "./images/icon-arrow-down.svg"
    ) {
      companyArrowIcon[i].setAttribute("src", "./images/icon-arrow-up.svg");
    } else {
      companyArrowIcon[i].setAttribute("src", "./images/icon-arrow-down.svg");
    }
  });
}
