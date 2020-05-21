/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const SECTIONS = document.querySelectorAll('[data-nav]');
const EMPTY_NAV = document.getElementById('navbar__list');
const NAV = ['Home', 'First Section', 'Second Section', 'Third Section', 'Fourth Section'];
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildLink(str) {
  const link = str.replace(/\s+/g, '-').toLowerCase();
  return `#${link}`;
}

function buildList(item) {
  const LIST_ITEM = document.createElement('li');
  const HREF_ITEM = document.createElement('a');
  HREF_ITEM.setAttribute('href', buildLink(item));
  HREF_ITEM.textContent = item;
  LIST_ITEM.appendChild(HREF_ITEM);
  return LIST_ITEM;
}

function insertDOMElements(parent, children) {
  children.forEach(function (child) {

    parent.appendChild(buildList(child));
  })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
insertDOMElements(EMPTY_NAV, NAV);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


