const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main_content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
let navvy = document.querySelectorAll('a');

navvy[0].textContent = siteContent.nav['nav-item-1'];


navvy[1].textContent = siteContent.nav['nav-item-2'];

navvy[2].textContent = siteContent.nav['nav-item-3'];

navvy[3].textContent = siteContent.nav['nav-item-4'];

navvy[4].textContent = siteContent.nav['nav-item-5'];

navvy[5].textContent = siteContent.nav['nav-item-6'];

// h1

let headline = document.querySelector('h1');
console.log(headline);
headline.textContent = siteContent.cta['h1'];


// button

let headButton = document.querySelector('button');
headButton.textContent = siteContent.cta['button'];
console.log(headButton);

// headImg

let headImg = document.querySelector('#cta-img');
headImg.setAttribute('src', siteContent.cta['img-src']);

//h4 headers

let mainHeaders = document.getElementsByTagName('h4');
mainHeaders[0].textContent = siteContent.main_content['features-h4'];
mainHeaders[1].textContent = siteContent.main_content['about-h4'];
mainHeaders[2].textContent = siteContent.main_content['services-h4'];
mainHeaders[3].textContent = siteContent.main_content['product-h4'];
mainHeaders[4].textContent = siteContent.main_content['vision-h4'];
mainHeaders[5].textContent = siteContent.contact['contact-h4'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent.main_content['middle-img-src']);


// p tags
let pTags = document.querySelectorAll('p');
pTags[0].textContent = siteContent.main_content['features-content'];
pTags[1].textContent = siteContent.main_content['about-content'];
pTags[2].textContent = siteContent.main_content['services-content'];
pTags[3].textContent = siteContent.main_content['product-content'];
pTags[4].textContent = siteContent.main_content['vision-content'];
pTags[5].textContent = siteContent.contact['address'];
pTags[6].textContent = siteContent.contact['phone'];
pTags[7].textContent = siteContent.contact['email'];
pTags[8].textContent = siteContent.footer['copyright'];


// green nav elements

navvy.forEach(item => item.style.color = 'green');

// newA tag prepend

let newA = document.createElement('a');
newA.setAttribute('href', '#');
newA.textContent = 'Home';
document.querySelector('nav').prepend(newA);

// lastA tag appendChild

let lastA = document.createElement('a');
lastA.setAttribute('href', '#');
lastA.textContent = 'Sign Out!';
document.querySelector('nav').appendChild(lastA);

//STRETCH

// ** ugly nav bar! **
// document.querySelector('nav').style.backgroundColor = 'black'; 

//
