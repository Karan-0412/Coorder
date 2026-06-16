// Popup script for Coorder Deal Scraper extension

document.addEventListener('DOMContentLoaded', () => {
  const scrapeBtn = document.getElementById('scrape-btn');
  const copyBtn = document.getElementById('copy-btn');
  const openCoorderBtn = document.getElementById('open-coorder-btn');
  const scrapeAgainBtn = document.getElementById('scrape-again-btn');
  const loading = document.getElementById('loading');
  const error = document.getElementById('error');
  const success = document.getElementById('success');
  const errorText = document.getElementById('error-text');
  const successText = document.getElementById('success-text');
  const scrapeSection = document.getElementById('scrape-section');
  const resultSection = document.getElementById('result-section');

  let scrapedData = null;

  scrapeBtn.addEventListener('click', async () => {
    showLoading();
    hideError();
    hideSuccess();

    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      
      if (!tab.url) {
        showError('No active tab found');
        hideLoading();
        return;
      }

      const response = await chrome.tabs.sendMessage(tab.id, { action: 'scrapeProduct' });
      
      if (response && response.success) {
        scrapedData = response.data;
        displayResults(scrapedData);
        showSuccess('Product scraped successfully!');
      } else {
        showError('Failed to scrape product. Make sure you are on a product page.');
      }
    } catch (err) {
      showError('Error: ' + err.message);
    }

    hideLoading();
  });

  copyBtn.addEventListener('click', () => {
    if (!scrapedData) return;

    const text = JSON.stringify(scrapedData, null, 2);
    navigator.clipboard.writeText(text).then(() => {
      showSuccess('Copied to clipboard!');
      setTimeout(hideSuccess, 2000);
    }).catch(err => {
      showError('Failed to copy: ' + err.message);
    });
  });

  openCoorderBtn.addEventListener('click', () => {
    if (!scrapedData) return;

    // Encode the data and open Coorder with the data
    const encodedData = encodeURIComponent(JSON.stringify(scrapedData));
    const coorderUrl = `http://localhost:5173/post-deal?data=${encodedData}`;
    
    chrome.tabs.create({ url: coorderUrl });
  });

  scrapeAgainBtn.addEventListener('click', () => {
    resultSection.classList.add('hidden');
    scrapeSection.classList.remove('hidden');
    scrapedData = null;
  });

  function displayResults(data) {
    document.getElementById('product-image').src = data.image || 'https://via.placeholder.com/400x150?text=No+Image';
    document.getElementById('product-title').textContent = data.title || 'No title found';
    document.getElementById('product-price').textContent = data.price || 'No price found';
    document.getElementById('product-description').textContent = data.description || 'No description found';

    scrapeSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
  }

  function showLoading() {
    loading.classList.remove('hidden');
  }

  function hideLoading() {
    loading.classList.add('hidden');
  }

  function showError(message) {
    errorText.textContent = message;
    error.classList.remove('hidden');
  }

  function hideError() {
    error.classList.add('hidden');
  }

  function showSuccess(message) {
    successText.textContent = message;
    success.classList.remove('hidden');
  }

  function hideSuccess() {
    success.classList.add('hidden');
  }
});
