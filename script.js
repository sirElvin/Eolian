//short load
// Scroll to the top of the page when the page loads or refreshes
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      entry.target.classList.add('show');
    }
  });
}, {
  rootMargin: '0px 0px 500px 0px' // Adjust the margin as per requirement
});

const hiddenElements = document.querySelectorAll('.disW');
hiddenElements.forEach((el) => observer.observe(el));

window.onload = function() {
  window.scrollTo(0, 0);
};


//especially for "what can it do?"














  


  