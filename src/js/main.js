// Function to inject components
function injectComponents() {
  // Inject header
  const headerPlaceholder = document.querySelector('#header-placeholder');
  if (headerPlaceholder) {
      import('../components/header.js')
          .then(module => {
              headerPlaceholder.innerHTML = module.header;

              // Call setupHamburgerMenu AFTER the header is injected
              setupHamburgerMenu();
          })
          .catch(error => {
              console.error('Error loading header component:', error);
          });
  }

  // Inject footer
  const footerPlaceholder = document.querySelector('#footer-placeholder');
  if (footerPlaceholder) {
      import('../components/footer.js')
          .then(module => {
              footerPlaceholder.innerHTML = module.footer;
          })
          .catch(error => {
              console.error('Error loading footer component:', error);
          });
  }
}

// Wrap the functionality in a named function
function setupHamburgerMenu() {
  // Get references to the buttons and the menu
  const openMenuButton = document.getElementById('open-humberger-menu');
  const closeMenuButton = document.getElementById('close-humberger-menu');
  const humbergerMenu = document.getElementById('humbergermenu');

  // Check if the elements exist before adding event listeners
  if (openMenuButton && closeMenuButton && humbergerMenu) {
      // Function to open the menu
      openMenuButton.addEventListener('click', () => {
          humbergerMenu.style.display = 'block'; // or 'flex', 'grid', etc., depending on your layout
          console.log("open button working");
      });

      // Function to close the menu
      closeMenuButton.addEventListener('click', () => {
          humbergerMenu.style.display = 'none';
      });
  } else {
      console.error('One or more elements for the hamburger menu were not found.');
  }
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', injectComponents);