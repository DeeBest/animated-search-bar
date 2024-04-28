const footerParagraph = document.getElementById('footer-paragraph');
const currentYear = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentYear}.`;

const magnifier = document.getElementById('search');
const searchBarContainer = document.getElementById('search-bar-container');

magnifier.addEventListener('click', () => {
  searchBarContainer.classList.toggle('active');
});
