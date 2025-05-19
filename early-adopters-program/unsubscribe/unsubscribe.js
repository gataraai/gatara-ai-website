import '../../book-call/form.css';

// Function to attach event listeners
function attachEventListeners() {
  const unsubscribeForm = document.getElementById('unsubscribe-form');
  
  if (unsubscribeForm) {
    unsubscribeForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      
      // Create and show the popup with the loader
      const popup = createPopup(`
        <div class="banter-loader">
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
          <div class="banter-loader__box"></div>
        </div>
      `);

      try {
        // Construct the URL with query parameters
        const url = new URL('https://script.google.com/macros/s/AKfycbxZ_mGYtnwr3dcgkniDdF0qqzc8_6AIZdvBuHUm_rv7hFxKnl_C_4ScTx74uq1Y92FtHg/exec');
        url.searchParams.append('action', 'unsubscribe');
        url.searchParams.append('email', email);

        // Send a GET request
        const response = await fetch(url, {
          method: 'GET',
          redirect: 'follow' // Follow redirects (required for Google Apps Script)
        });

        if (response.ok) {
          const text = await response.text();
          
          if (text === 'Unsubscribed') {
            // Show success message
            popup.querySelector('.card-image').innerHTML = `
              <div class="success-message">
                You have been successfully unsubscribed from our newsletter.
              </div>
            `;
          } else {
            // Show not found message
            popup.querySelector('.card-image').innerHTML = `
              <div class="error-message">
                Email not found in our subscriber list.
              </div>
            `;
          }
          
          // Also update the result div on the page
          const resultDiv = document.getElementById('unsubscribe-result');
          if (resultDiv) {
            resultDiv.innerText = text;
          }
          
          setTimeout(() => {
            closePopup(popup);
            // Clear form
            e.target.reset();
          }, 3000);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error:', error);
        popup.querySelector('.card-image').innerHTML = `
          <div class="error-message">
            Failed to process your request.<br>Please try again later.
          </div>
        `;
        
        // Also update the result div on the page
        const resultDiv = document.getElementById('unsubscribe-result');
        if (resultDiv) {
          resultDiv.innerText = 'Error: Failed to process your request. Please try again later.';
        }
        
        setTimeout(() => {
          closePopup(popup);
        }, 3000);
      }
    });
  }
}

// Function to create a popup
function createPopup(content) {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
          <p>Gatara AI</p>
          <p>Newsletter</p>
        </div>
        <div class="card-bottom">
          <p>Unsubscribe</p>
          <p>Status</p>
        </div>
      </div>
      <div class="card-image">
        ${content} <!-- Loader or message will go here -->
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  return popup;
}

// Function to close the popup
function closePopup(popup) {
  document.body.removeChild(popup);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Attach event listeners
  attachEventListeners();
  
  // Load header
  fetch('/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));
  
  // Load footer
  fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});
