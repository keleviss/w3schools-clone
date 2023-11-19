document.addEventListener("DOMContentLoaded", function () {

  // Get the theme icons light/dark
  let darkMode = document.getElementById('dark_mode');
  let lightMode = document.getElementById('light_mode');

  // Get top_nav element
  let topNav = document.getElementById('top_nav');
  let main = document.getElementById('main');
  let leftSection = document.getElementById('left-section');
  let rightSection = document.getElementById('right-section');
  let code = document.querySelectorAll('.code-text');

  // Event listener for changing the theme to dark
  darkMode.addEventListener("click", function() {
    // Body colors
    document.body.style.color = "#f1f1f1";
    document.body.style.backgroundColor = "#1d2a35";

    // Top nav colors
    topNav.style.backgroundColor = "#1d2a35";

    // Main container colors
    main.style.backgroundColor = "#1d2a35";
    main.style.color = "azure";

    // Right section colors
    rightSection.style.backgroundColor = "#1d2a35";
    rightSection.style.color = "azure";
    
    // Left section colors
    leftSection.classList.remove('light-left');
    leftSection.classList.add('dark-left');

    code.forEach((lmt) => {
      lmt.classList.add('intext-dark');
      lmt.classList.remove('intext-light');
    })

    darkMode.style.display = 'none';
    lightMode.style.display = 'inline';
  });

  // Event listener for changing the theme to white
  lightMode.addEventListener("click", function() {
    // Body colors
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";

    // Top nav colors
    topNav.style.backgroundColor = "white";

    // Main content colors
    main.style.backgroundColor = "white";
    main.style.color = "black";

    // Left section colors
    leftSection.classList.add('light-left');
    leftSection.classList.remove('dark-left');

    // Right section colors
    rightSection.style.backgroundColor = "white";
    rightSection.style.color = "black";

    code.forEach((lmt) => {
      lmt.classList.add('intext-light');
      lmt.classList.remove('intext-dark');
    })

    darkMode.style.display = 'inline';
    lightMode.style.display = 'none';
  });


  // Get every element with class 'menu-option'
  var menuOptions = document.querySelectorAll('.menu-option');
  
  // For each element add event listener to change the text color to white
  // when user hovers the mouse on the element and the theme is light
  menuOptions.forEach(option => {    
    option.addEventListener('mouseenter', () => {
        if (document.body.style.color === 'black') {
            option.style.color = 'white';
        }
    });

    // Return the text color back to normal themed color
    option.addEventListener('mouseleave', () => {
        if (document.body.style.color === 'black') {
            option.style.color = 'inherit';
        }
    });
  });

  // Get the search input element and it's container 
  const searchInput = document.getElementById('search_input');
  const searchBar = document.getElementById('search_bar');    

  // When the user selects the search input element to type
  // a query, the container is outlined with green color
  searchInput.addEventListener('focus', () => {
      searchBar.style.outline = '3px #04AA6D solid';
  });

  // When the user leaves the search input element to 
  // click something else, the container outline is gone
  searchInput.addEventListener('blur', () => {
      searchBar.style.outline = 'none';
  });
});