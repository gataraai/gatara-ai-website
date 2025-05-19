// Function to show the Leads Enhancement popup
async function showLeadsEnhancementPopup(event) {
  event.preventDefault();
  
  try {
    // Fetch the HTML content
    const response = await fetch('/products/popups/leads-enhancement.html');
    if (!response.ok) {
      throw new Error('Failed to load popup content');
    }
    
    const htmlContent = await response.text();
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = htmlContent;
    document.body.appendChild(popup);
    
    // Add close functionality to the button
    const closeButton = popup.querySelector('.close-popup');
    if (closeButton) {
      closeButton.addEventListener('click', () => closePopup());
    }
    
    // Add click outside to close
    addClickOutsideToClose(popup);
  } catch (error) {
    console.error('Error loading popup content:', error);
    // Fallback to inline HTML if fetch fails
    showLeadsEnhancementPopupFallback(event);
  }
}

// Fallback function with inline HTML
function showLeadsEnhancementPopupFallback(event) {
  event.preventDefault();
  
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
          <h3 style="color: white; font-family: 'Product Sans Medium Regular'; font-size: 22px;">Leads Enhancement Agent</h3>
          <button onclick="closePopup()" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div class="card-image">
          <p style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
            Our Leads Enhancement Agent enriches your lead data by:
            <ul style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
              <li>Adding missing contact information</li>
              <li>Finding social profiles</li>
              <li>Scoring leads based on fit</li>
              <li>Identifying decision makers</li>
              <li>Suggesting personalization points</li>
            </ul>
          </p>
        </div>
        <div class="card-bottom">
          <a href="/products/leads-enhancment.html" style="color: #d97757; text-decoration: none; font-family: 'Product Sans Regular'; font-size: 18px;">Learn more →</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  addPopupStyles();
  
  // Add click outside to close
  addClickOutsideToClose(popup);
}

function showColdOutreachPopup(event) {
  event.preventDefault();
  
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
          <h3 style="color: white; font-family: 'Product Sans Medium Regular'; font-size: 22px;">B2B Cold Outreach</h3>
          <button onclick="closePopup()" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div class="card-image">
          <p style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
            Our Cold Outreach Agent helps you:
            <ul style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
              <li>Create personalized outreach at scale</li>
              <li>Adapt messaging to each prospect's industry</li>
              <li>Craft compelling subject lines</li>
              <li>A/B test different approaches</li>
              <li>Maintain your brand voice consistently</li>
            </ul>
          </p>
        </div>
        <div class="card-bottom">
          <a href="/products/cold-outreach.html" style="color: #d97757; text-decoration: none; font-family: 'Product Sans Regular'; font-size: 18px;">Learn more →</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  addPopupStyles();
  
  // Add click outside to close
  addClickOutsideToClose(popup);
}

function showLeadQualificationPopup(event) {
  event.preventDefault();
  
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
          <h3 style="color: white; font-family: 'Product Sans Medium Regular'; font-size: 22px;">Lead Qualification</h3>
          <button onclick="closePopup()" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div class="card-image">
          <p style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
            Our Lead Qualification Agent:
            <ul style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
              <li>Engages with leads in real-time</li>
              <li>Asks qualifying questions</li>
              <li>Answers product/service questions</li>
              <li>Schedules meetings with qualified leads</li>
              <li>Passes detailed notes to your sales team</li>
            </ul>
          </p>
        </div>
        <div class="card-bottom">
          <a href="#" style="color: #d97757; text-decoration: none; font-family: 'Product Sans Regular'; font-size: 18px;">Coming soon →</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  addPopupStyles();
  
  // Add click outside to close
  addClickOutsideToClose(popup);
}

function showFollowUpsPopup(event) {
  event.preventDefault();
  
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
          <h3 style="color: white; font-family: 'Product Sans Medium Regular'; font-size: 22px;">Follow-ups Agent</h3>
          <button onclick="closePopup()" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div class="card-image">
          <p style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
            Our Follow-ups Agent:
            <ul style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
              <li>Sends timely, personalized follow-ups</li>
              <li>Adapts messaging based on lead behavior</li>
              <li>Maintains conversation momentum</li>
              <li>Knows when to escalate to human team members</li>
              <li>Prevents leads from falling through the cracks</li>
            </ul>
          </p>
        </div>
        <div class="card-bottom">
          <a href="#" style="color: #d97757; text-decoration: none; font-family: 'Product Sans Regular'; font-size: 18px;">Coming soon →</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  addPopupStyles();
  
  // Add click outside to close
  addClickOutsideToClose(popup);
}

function showPostSalePopup(event) {
  event.preventDefault();
  
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
          <h3 style="color: white; font-family: 'Product Sans Medium Regular'; font-size: 22px;">Post-Sale Follow-Up</h3>
          <button onclick="closePopup()" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div class="card-image">
          <p style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
            Our Post-Sale Agent:
            <ul style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
              <li>Maintains engagement after purchase</li>
              <li>Offers personalized product recommendations</li>
              <li>Gathers feedback and satisfaction data</li>
              <li>Introduces new features and services</li>
              <li>Increases customer lifetime value</li>
            </ul>
          </p>
        </div>
        <div class="card-bottom">
          <a href="#" style="color: #d97757; text-decoration: none; font-family: 'Product Sans Regular'; font-size: 18px;">Coming soon →</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  addPopupStyles();
  
  // Add click outside to close
  addClickOutsideToClose(popup);
}

function showCrmUtmPopup(event) {
  event.preventDefault();
  
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
    <div class="card">
      <div class="card-content">
        <div class="card-top">
          <h3 style="color: white; font-family: 'Product Sans Medium Regular'; font-size: 22px;">CRM & UTM Tracking</h3>
          <button onclick="closePopup()" style="background: none; border: none; color: white; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div class="card-image">
          <p style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
            Our CRM & UTM Agent:
            <ul style="color: white; font-family: 'Product Sans Regular'; font-size: 18px;">
              <li>Tracks lead sources accurately</li>
              <li>Maintains clean CRM data</li>
              <li>Provides attribution reporting</li>
              <li>Connects marketing efforts to sales results</li>
              <li>Helps optimize marketing spend</li>
            </ul>
          </p>
        </div>
        <div class="card-bottom">
          <a href="#" style="color: #d97757; text-decoration: none; font-family: 'Product Sans Regular'; font-size: 18px;">Coming soon →</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);
  addPopupStyles();
  
  // Add click outside to close
  addClickOutsideToClose(popup);
}

// Function to add click outside to close functionality
function addClickOutsideToClose(popup) {
  popup.addEventListener('click', (e) => {
    // If the click is directly on the popup background (not on its children)
    if (e.target === popup) {
      closePopup();
    }
  });
}

function addPopupStyles() {
  // Add popup styles if not already in your CSS
  if (!document.getElementById('popup-styles')) {
    const style = document.createElement('style');
    style.id = 'popup-styles';
    style.innerHTML = `
      .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      
      .card {
        width: 320px;
        height: auto;
        background: #151515;
        position: relative;
        border-radius: 2.5em;
        padding: 2em;
        transition: transform 0.4s ease;
        border: 1.5px solid rgba(128, 128, 128, 0.6);
      }
      
      .card .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1.5em;
      }
      
      .card .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      @media (max-width: 768px) {
        .card {
          width: 280px;
          padding: 1.5em;
        }
      }
      
      @media (max-width: 480px) {
        .card {
          width: 256px;
          padding: 1em;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

function closePopup() {
  const popup = document.querySelector('.popup');
  if (popup) {
    document.body.removeChild(popup);
  }
}

// Export the functions to make them available globally
window.showLeadsEnhancementPopup = showLeadsEnhancementPopup;
window.showColdOutreachPopup = showColdOutreachPopup;
window.showLeadQualificationPopup = showLeadQualificationPopup;
window.showFollowUpsPopup = showFollowUpsPopup;
window.showPostSalePopup = showPostSalePopup;
window.showCrmUtmPopup = showCrmUtmPopup;
window.closePopup = closePopup;
