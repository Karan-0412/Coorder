// Content script to scrape product details from various e-commerce sites

class ProductScraper {
  constructor() {
    this.scrapers = {
      amazon: this.scrapeAmazon,
      ebay: this.scrapeEbay,
      walmart: this.scrapeWalmart,
      target: this.scrapeTarget,
      bestbuy: this.scrapeBestBuy,
      generic: this.scrapeGeneric
    };
  }

  detectSite() {
    const hostname = window.location.hostname.toLowerCase();
    if (hostname.includes('amazon')) return 'amazon';
    if (hostname.includes('ebay')) return 'ebay';
    if (hostname.includes('walmart')) return 'walmart';
    if (hostname.includes('target')) return 'target';
    if (hostname.includes('bestbuy')) return 'bestbuy';
    return 'generic';
  }

  cleanPrice(price) {
    if (!price) return '';
    // Remove currency symbols, commas, and extra whitespace
    return price.replace(/[^\d.,]/g, '').trim();
  }

  cleanText(text) {
    if (!text) return '';
    return text.replace(/\s+/g, ' ').trim();
  }

  scrapeAmazon() {
    // Try multiple selectors for title
    let title = '';
    const titleSelectors = [
      '#productTitle',
      '#product-name',
      'h1.product-title',
      '.product-title',
      'h1'
    ];
    for (const selector of titleSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        title = this.cleanText(el.textContent);
        if (title && title.length > 5) break;
      }
    }

    // Try multiple selectors for price
    let price = '';
    const priceSelectors = [
      '.a-price .a-offscreen',
      '#priceblock_ourprice',
      '#priceblock_dealprice',
      '.a-price-whole',
      '#price_inside_buybox',
      '#priceblock_ourprice_row',
      '.a-price .a-offscreen',
      '[data-a-color="base"]'
    ];
    for (const selector of priceSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        price = this.cleanPrice(el.textContent);
        if (price) break;
      }
    }

    // Try multiple selectors for image
    let image = '';
    const imageSelectors = [
      '#landingImage',
      '#imgBlkFront',
      '.imgTagWrapper img',
      '#main-image-container img',
      '.a-dynamic-image img',
      '[data-hook="product-image"]'
    ];
    for (const selector of imageSelectors) {
      const el = document.querySelector(selector);
      if (el && el.src) {
        image = el.src;
        if (image) break;
      }
    }

    // Try multiple selectors for description
    let description = '';
    const descSelectors = [
      '#productDescription',
      '#feature-bullets ul',
      '.product-description',
      '#productDescription p',
      '#productFeatures',
      '#detail-bullets',
      '#productOverview',
      '.a-unordered-list'
    ];
    for (const selector of descSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        description = this.cleanText(el.textContent);
        if (description && description.length > 50) break;
      }
    }

    return {
      title: title,
      price: price,
      image: image,
      description: description,
      url: window.location.href
    };
  }

  scrapeEbay() {
    // Try multiple selectors for title
    let title = '';
    const titleSelectors = [
      '.x-item-title',
      '.it-tad',
      'h1',
      '.product-title',
      '.x-item-title-label'
    ];
    for (const selector of titleSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        title = this.cleanText(el.textContent);
        if (title && title.length > 5) break;
      }
    }

    // Try multiple selectors for price
    let price = '';
    const priceSelectors = [
      '.x-price-primary',
      '.prc',
      '.display-price',
      '.x-price-amount',
      '.u-cP',
      '.x-price-amount__fraction'
    ];
    for (const selector of priceSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        price = this.cleanPrice(el.textContent);
        if (price) break;
      }
    }

    // Try multiple selectors for image
    let image = '';
    const imageSelectors = [
      '.ux-image-carousel img',
      '.ic-img',
      '#icImg',
      '.img-gallery img',
      '[data-testid="img-gallery"] img'
    ];
    for (const selector of imageSelectors) {
      const el = document.querySelector(selector);
      if (el && el.src) {
        image = el.src;
        if (image) break;
      }
    }

    // Try multiple selectors for description
    let description = '';
    const descSelectors = [
      '.x-item-description-inner',
      '.u-dt',
      '.x-item-description',
      '#vi-desc-main',
      '.u-flL',
      '.item-description'
    ];
    for (const selector of descSelectors) {
      const el = document.querySelector(selector);
      if (el) {
        description = this.cleanText(el.textContent);
        if (description && description.length > 50) break;
      }
    }

    return {
      title: title,
      price: price,
      image: image,
      description: description,
      url: window.location.href
    };
  }

  scrapeWalmart() {
    // Walmart scraper
    let title = document.querySelector('[data-testid="product-title"], h1, .product-title')?.textContent?.trim() || '';
    let price = document.querySelector('[data-testid="price"], .price, .product-price')?.textContent?.trim() || '';
    let image = document.querySelector('[data-testid="product-image"], .product-image img, img[class*="product"]')?.src || '';
    let description = document.querySelector('[data-testid="product-description"], .product-description, .description')?.textContent?.trim() || '';

    return {
      title: this.cleanText(title),
      price: this.cleanPrice(price),
      image: image,
      description: this.cleanText(description),
      url: window.location.href
    };
  }

  scrapeTarget() {
    // Target scraper
    let title = document.querySelector('[data-test="product-title"], h1, .product-title')?.textContent?.trim() || '';
    let price = document.querySelector('[data-test="product-price"], .price, .product-price')?.textContent?.trim() || '';
    let image = document.querySelector('[data-test="product-image"], .product-image img, img[class*="product"]')?.src || '';
    let description = document.querySelector('[data-test="product-description"], .product-description, .description')?.textContent?.trim() || '';

    return {
      title: this.cleanText(title),
      price: this.cleanPrice(price),
      image: image,
      description: this.cleanText(description),
      url: window.location.href
    };
  }

  scrapeBestBuy() {
    // Best Buy scraper
    let title = document.querySelector('[data-testid="product-title"], h1, .product-title')?.textContent?.trim() || '';
    let price = document.querySelector('[data-testid="product-price"], .price, .product-price, .price-current')?.textContent?.trim() || '';
    let image = document.querySelector('[data-testid="product-image"], .product-image img, img[class*="product"]')?.src || '';
    let description = document.querySelector('[data-testid="product-description"], .product-description, .description')?.textContent?.trim() || '';

    return {
      title: this.cleanText(title),
      price: this.cleanPrice(price),
      image: image,
      description: this.cleanText(description),
      url: window.location.href
    };
  }

  scrapeGeneric() {
    // Generic scraper using Open Graph and common meta tags
    const getMeta = (name) => {
      const meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      return meta?.content || meta?.getAttribute('content') || '';
    };

    // Try multiple selectors for title
    let title = getMeta('og:title');
    if (!title || title.length < 5) {
      const titleSelectors = [
        'h1',
        '[class*="product-title"]',
        '[id*="product-title"]',
        '.product-title',
        '#product-title'
      ];
      for (const selector of titleSelectors) {
        const el = document.querySelector(selector);
        if (el) {
          title = this.cleanText(el.textContent);
          if (title && title.length > 5) break;
        }
      }
    }

    // Try multiple selectors for price
    let price = getMeta('product:price:amount');
    if (!price) {
      const priceSelectors = [
        '[class*="price"]',
        '[id*="price"]',
        '[data-price]',
        '.price',
        '#price',
        '.product-price',
        '[data-testid*="price"]'
      ];
      for (const selector of priceSelectors) {
        const el = document.querySelector(selector);
        if (el) {
          price = this.cleanPrice(el.textContent);
          if (price && price.match(/\d+\.?\d*/)) break;
        }
      }
    }

    // Try multiple selectors for image
    let image = getMeta('og:image');
    if (!image) {
      const imageSelectors = [
        'img[src*="product"]',
        'img[class*="product"]',
        '[data-testid*="image"] img',
        '.product-image img',
        '#product-image img'
      ];
      for (const selector of imageSelectors) {
        const el = document.querySelector(selector);
        if (el && el.src) {
          image = el.src;
          if (image) break;
        }
      }
    }

    // Try multiple selectors for description
    let description = getMeta('og:description') || getMeta('description');
    if (!description || description.length < 50) {
      const descSelectors = [
        '[class*="description"]',
        '[id*="description"]',
        '.product-description',
        '#product-description',
        'meta[name="description"]',
        '[data-testid*="description"]'
      ];
      for (const selector of descSelectors) {
        const el = document.querySelector(selector);
        if (el) {
          const text = el.textContent?.trim() || el.content?.trim();
          if (text && text.length > 50) {
            description = this.cleanText(text);
            break;
          }
        }
      }
    }

    return {
      title: title,
      price: price,
      image: image,
      description: description,
      url: window.location.href
    };
  }

  scrape() {
    const site = this.detectSite();
    const scraper = this.scrapers[site] || this.scrapers.generic;
    return scraper.call(this);
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'scrapeProduct') {
    const scraper = new ProductScraper();
    const productData = scraper.scrape();
    sendResponse({ success: true, data: productData });
  }
  return true;
});
