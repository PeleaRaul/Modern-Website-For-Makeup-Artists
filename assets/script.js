// /* Intellectual Property Notice: © 2023 by Author: Pelea Raul-Daniel. All Rights Reserved.
//     License Nr: PRD-PR-GIT-#0033-2023
//     Created on: © 2023/12/23 03:01PM

//     Understanding the License:
//     > P-First Name Initial
//     > R-Last Name Initial
//     > D-Middle Name Initial
//     > PR-Private Work
//     > GIT-GITHUB Integrated Lincese For Private Works (12/12/2023);
//     > #0033-Indentification Number (not important, used to keep track of all my licenses given so far.)
//     > 2023-Creation Year

//     Content of Copyright:
//     Do Not Redistribute, Share, Use on any other Domain name. This copy of the website shall be used only
//     by vibekiss.Com and its subdomains (ex: www.vibekiss.com, sub.vibekiss.com)
//     Any Unauthorised Use of The Files may lead to legal dispute. 
    
//     Any DNS changes are charge free, but must be told beforehand.
//     The content is copyright protected, so I will have to change the
//     domain name under this template/website model! */
console.log("Script connected!");

//<![CDATA[
    window.addEventListener("load",function(){
        window.cookieconsent.initialise({
       "palette": {
         "popup": {
           "background": "#212121"
         },
         "button": {
           "background": "#e8b015"
         }
       },
       "position": "bottom-left",
       "content": {
         "href": "/cookies.html"
       }
     });
     }                                           );                                       
     //]]>


document.addEventListener('DOMContentLoaded', function () {
    var nav = document.querySelector('nav');

    // Function to handle the scroll event
    function handleScroll() {
        // Check if the user has scrolled down 5vh
        if (window.scrollY > 0.05 * window.innerHeight) {
            // Add the 'nav-hidden' class to hide the navigation bar
            nav.classList.add('nav-hidden');
        } else {
            // Remove the 'nav-hidden' class to show the navigation bar
            nav.classList.remove('nav-hidden');
        }
    }

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Call the handleScroll function on page load
    handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.hamburger-menu');

  // Function to handle the scroll event
  function handleScroll() {
      // Check if the user has scrolled down 5vh
      if (window.scrollY > 0.05 * window.innerHeight) {
          // Add the 'nav-hidden' class to hide the navigation bar
          nav.classList.add('nav-hidden');
      } else {
          // Remove the 'nav-hidden' class to show the navigation bar
          nav.classList.remove('nav-hidden');
      }
  }

  // Add a scroll event listener to the window
  window.addEventListener('scroll', handleScroll);

  // Call the handleScroll function on page load
  handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('.overlay');

  // Function to handle the scroll event
  function handleScroll() {
      // Check if the user has scrolled down 5vh
      if (window.scrollY > 0.05 * window.innerHeight) {
          // Add the 'nav-hidden' class to hide the navigation bar
          nav.classList.add('nav-hidden');
      } else {
          // Remove the 'nav-hidden' class to show the navigation bar
          nav.classList.remove('nav-hidden');
      }
  }

  // Add a scroll event listener to the window
  window.addEventListener('scroll', handleScroll);

  // Call the handleScroll function on page load
  handleScroll();
});

document.addEventListener('DOMContentLoaded', function () {
    var backToTopBtn = document.getElementById('backToTopBtn');

    // Function to handle the scroll event
    function handleScroll() {
        // Show or hide the "Back To Top" button based on scroll position
        if (window.scrollY > 0.8 * window.innerHeight) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    }

    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Scroll to the top when the button is clicked
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

 // Get the current year
 const currentYear = new Date().getFullYear();

 // Target the span element by its ID and set its text content to the current year
 document.getElementById('currentYear').textContent = currentYear;

   // Array of language texts
   const languages = [
    'Choose your language',
    'Alege-ți limba',
    'Scegli la tua lingua',
    'Choisissez votre langue',
];

// Array of sublanguage texts
const subLanguages = [
    "Atention! Those languages are only applied to help you following the website, and doesn't mean we are proficient at speaking inside our studio!",
    "Atentie! Aceste limbi sunt aplicate doar pentru a vă ajuta să urmăriți site-ul web și nu înseamnă că suntem pricepuți să vorbim corect si proeficient în studioul nostru!",
    "Attenzione! Queste lingue vengono utilizzate solo per aiutarti a seguire il sito Web e non significa che siamo abili nel parlare all'interno del nostro studio!",
    "Attention! Ces langues ne sont utilisées que pour vous aider à suivre le site Web, et ne signifient pas que nous sommes compétents pour parler à l'intérieur de notre studio!"
];

// Function to change the text and adjust opacity every 5 seconds
let currentIndex = 0;
let currentIndex1 = 0;

function changeTexts() {
    const changingText = document.getElementById('changingText');
    const changingSubText = document.getElementById('changingSubText');

    changingText.style.opacity = 0; // Fade out
    changingSubText.style.opacity = 0; // Fade out

    setTimeout(() => {
        changingText.textContent = languages[currentIndex];
        changingSubText.textContent = subLanguages[currentIndex1];

        changingText.style.opacity = 1; // Fade in
        changingSubText.style.opacity = 1; // Fade in

        currentIndex = (currentIndex + 1) % languages.length;
        currentIndex1 = (currentIndex1 + 1) % subLanguages.length;
    }, 1000); // Wait for fade out before updating content and fading in
}


document.addEventListener("scroll", function () {
    const vectors = document.querySelectorAll('.vectors');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    vectors.forEach((vector, index) => {
        const translateY = `translateY(${-scrollPosition / (index + 0.3)}px)`;
        const opacity = 1 - scrollPosition / (index + 100); // Fade out gradually
        vector.style.transform = `${translateY}`;
        vector.style.opacity = opacity;
    });
});

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
