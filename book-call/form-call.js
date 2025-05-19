import './form.css';
import Navigo from 'navigo';

const router = new Navigo('/');

// Function to attach event listeners
function attachEventListeners() {
  // Existing newsletter form handler
  document.getElementById('newsletter-form')?.addEventListener('submit', handleNewsletterSubmit);
  
  // Wait-list form handler
  const waitListForm = document.querySelector('#hsForm_86ea22cc-419d-40f1-ba71-13e92df49115_86ea22cc-419d-40f1-ba71-13e92df49115-undefined');
  waitListForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Add class to form to show validation messages
    e.target.classList.add('form-submitted');
    
    // Check if all required fields are filled
    const requiredFields = e.target.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.classList.add('invalid', 'error');
      } else {
        field.classList.remove('invalid', 'error');
      }
    });
    
    // Check message field for minimum word count
    const messageField = e.target.querySelector('[name="message"]');
    if (messageField) {
      const messageText = messageField.value.trim();
      const wordCount = messageText.split(/\s+/).filter(word => word.length > 0).length;
      
      if (wordCount < 7) {
        isValid = false;
        messageField.classList.add('invalid', 'error');
        messageField.style.border = '2px solid red';
        const errorMsg = messageField.closest('.hs-form-field').querySelector('.hs-error-msg');
        errorMsg.textContent = 'Please tell us more!';
        errorMsg.style.display = 'block';
      } else {
        // Remove error styling when word count is sufficient
        messageField.classList.remove('invalid', 'error');
        messageField.style.border = '';
        const errorMsg = messageField.closest('.hs-form-field').querySelector('.hs-error-msg');
        if (errorMsg) {
          errorMsg.style.display = 'none';
        }
      }
    }
    
    if (!isValid) {
      return;
    }

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

    const formData = {
      // Basic Information
      firstname: e.target.querySelector('[name="firstname"]').value,
      lastname: e.target.querySelector('[name="lastname"]').value,
      email: e.target.querySelector('[name="email"]').value,
      phone: e.target.querySelector('input[type="tel"]').value,
      
      // Company Information
      companyName: e.target.querySelector('[name="0-2/name"]').value,
      companyWebsite: e.target.querySelector('[name="0-2/domain"]').value,
      companySize: e.target.querySelector('[name="0-2/company_size"]').value,
      jobTitle: e.target.querySelector('[name="jobtitle"]').value,
      industry: e.target.querySelector('[name="0-2/anthropic_industry"]').value,
      companyLocation: e.target.querySelector('[name="country_"]').value,
      
      // AI Solution Information
      currentAiSolution: e.target.querySelector('[name="current_gen_ai_saas_solution"]').value,
      evaluationStage: e.target.querySelector('[name="where_are_you_in_your_evaluation_journey_"]').value,
      desiredSolution: e.target.querySelector('[name="message"]').value,
      
      // Add timestamp
      timestamp: new Date().toISOString()
    };

    try {
      // Construct the URL with query parameters
      const url = new URL('https://script.google.com/macros/s/AKfycbxISALLt44oLtTY_mRKXc-Cc5_hWaiI9kbZmwl3NrPa_snTLzXA0IKFy620r_shMUlrAQ/exec');
      url.search = new URLSearchParams(formData).toString();

      // Send a GET request
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow' // Follow redirects (required for Google Apps Script)
      });

      if (response.ok) {
        // Show success message and reset form
        popup.querySelector('.card-image').innerHTML = `
          <div class="success-message">
            Thank you for providng you info <br>We are now directing you to the booking page to pick a date & time for the call.
          </div>
        `;
        
        setTimeout(() => {
          closePopup(popup);
          // Clear form
          e.target.reset();
          // Reset any custom select elements to default state
          const selects = e.target.querySelectorAll('select');
          selects.forEach(select => {
            select.selectedIndex = 0;
          });
          // Redirect to scheduling page
          window.location.href = '/book-call/schedule-time/';
        }, 3000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      popup.querySelector('.card-image').innerHTML = `
        <div class="error-message">
          Failed to submit the form.<br>Please check your connection and try again.
        </div>
      `;
      setTimeout(() => {
        closePopup(popup);
      }, 3000);
    }
  });

  // Keep existing button listeners
  const subscribeButton = document.getElementById('subscribe-btn');
  if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
      render(NewsletterPage());
    });
  }

  const closeButton = document.getElementById('close-btn');
  if (closeButton) {
    closeButton.addEventListener('click', () => {
      render(homePage);
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
        </div>
        <div class="card-bottom">
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

// Router setup
router
  .on('/', () => {
    render(homePage);
  })
  .resolve();

// Don't forget to export the function and call it when the module loads
export function initializeFormHandlers() {
  attachEventListeners();
}

// Call it when the module loads
document.addEventListener('DOMContentLoaded', initializeFormHandlers);
