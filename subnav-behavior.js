document.addEventListener('DOMContentLoaded', () => {

  const subOptions = document.getElementById('suboptions');
  const navBefore = document.getElementById('navbefore');
  const navAfter = document.getElementById('navafter');

  let scrollAmount = 1;
  subOptions.scrollLeft = scrollAmount;
  let scrolling = false;
  // let intervalId;

  navAfter.addEventListener('mousedown', () => {
    scrolling = true;
    // intervalId = setInterval(scrollLeft, 10);
    setTimeout(scrollRight, 10);
    console.log(scrollAmount);
  });

  navAfter.addEventListener('mouseup', () => {
    scrolling = false;
    // clearInterval(intervalId);
  });

  navBefore.addEventListener('mousedown', () => {
    scrolling = true;
    // intervalId = setInterval(scrollRight, 10);
    setTimeout(scrollLeft, 10);
    console.log(scrollAmount);
  });

  navBefore.addEventListener('mouseup', () => {
    scrolling = false;
    // clearInterval(intervalId);
  });

  function scrollRight() {
    if (scrolling) {
      scrollAmount += 8;
      subOptions.scrollLeft = scrollAmount;

      navBefore.style.display = 'flex';

      const scrollableWidth = subOptions.scrollWidth - subOptions.clientWidth;
      if (scrollAmount >= scrollableWidth) {
        scrolling = false;
        navAfter.style.display = 'none';
      } else {
        setTimeout(scrollRight, 10);
      }
    }
  }

  function scrollLeft() {
    if (scrolling) {
      scrollAmount -= 8;
      subOptions.scrollLeft = scrollAmount;

      // Activate the right side button after scrollin to the left
      navAfter.style.display = 'flex';
 
      if (scrollAmount <= 0) {
        scrolling = false;
        navBefore.style.display = 'none';
      } else {
        setTimeout(scrollLeft, 10);
      }
    }
  }

  navAfter.addEventListener('mouseleave', () => {
    scrolling = false;
    // clearInterval(intervalId);
  });

  navBefore.addEventListener('mouseleave', () =>{
    scolling = false;
    // clearInterval(intervalId);
  });

});