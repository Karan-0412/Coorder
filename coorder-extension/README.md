# Coorder Deal Scraper Extension

A browser extension for Chrome/Firefox that scrapes product details from e-commerce sites to quickly create deals on Coorder.

## Features

- **Multi-site Support**: Works with Amazon, eBay, and generic e-commerce sites
- **Auto-scrape**: Extracts product title, price, image, and description
- **One-click Integration**: Opens Coorder Post Deal page with pre-filled data
- **Clipboard Support**: Copy scraped data to clipboard

## Installation

### Chrome/Edge

1. Navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select the `coorder-extension` folder from the Coorder project directory

### Firefox

1. Navigate to `about:debugging`
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file from the `coorder-extension` folder

## Testing

### Step 1: Install the Extension

Follow the installation instructions above for your browser.

### Step 2: Test on Product Pages

1. Navigate to a product page on one of these sites:
   - **Amazon**: Any Amazon product page
   - **eBay**: Any eBay product page
   - **Generic**: Any e-commerce site with Open Graph meta tags

2. Click the Coorder extension icon in your browser toolbar

3. Click "Scrape Current Page"

4. Verify that the following fields are populated:
   - Product image
   - Title
   - Price
   - Description

### Step 3: Test Integration with Coorder

1. After scraping a product, click "Open Coorder Post Deal"

2. The Coorder app should open with the following fields auto-filled:
   - Deal Title / Name
   - Product URL
   - Description
   - Price per Person

3. Verify the data matches the scraped product information

### Step 4: Test Clipboard Copy

1. Scrape a product
2. Click "Copy to Clipboard"
3. Paste the data somewhere to verify it's in JSON format

## Troubleshooting

### Extension not loading
- Ensure Developer mode is enabled
- Check that all files are in the correct folder structure
- Verify manifest.json is valid JSON

### Scraping fails
- Ensure you're on a product page (not a category or search page)
- Check browser console for errors (F12)
- Try a different e-commerce site

### Coorder integration not working
- Ensure Coorder app is running (typically at http://localhost:5173)
- Check that the URL parameters are being passed correctly
- Verify PostDealPage is updated to handle URL parameters

## File Structure

```
coorder-extension/
├── manifest.json       # Extension configuration
├── content.js         # Content script for scraping
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic
└── icons/             # Extension icons
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Customization

### Adding New Scrapers

Edit `content.js` and add a new scraper method:

```javascript
scrapeCustomSite() {
  return {
    title: document.querySelector('your-selector')?.textContent?.trim() || '',
    price: document.querySelector('your-price-selector')?.textContent?.trim() || '',
    image: document.querySelector('your-image-selector')?.src || '',
    description: document.querySelector('your-desc-selector')?.textContent?.trim() || '',
    url: window.location.href
  };
}
```

Then add it to the scrapers object and detectSite method.

### Changing Coorder URL

Edit `popup.js` and update the coorderUrl variable:

```javascript
const coorderUrl = `http://your-coorder-url/post-deal?data=${encodedData}`;
```

## Security Notes

- The extension only scrapes publicly available data
- No personal data is collected or stored
- All scraping happens client-side in the browser
- Data is passed via URL parameters (consider using a more secure method for production)

## Future Improvements

- Add support for more e-commerce platforms
- Implement backend API for data transfer instead of URL parameters
- Add image upload to Coorder
- Implement category auto-detection
- Add price history tracking
