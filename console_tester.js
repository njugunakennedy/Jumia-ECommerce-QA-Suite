/**
 * Jumia E-Commerce Console Automation Suite
 * 
 * Instructions:
 * 1. Open https://www.jumia.co.ke/ in Google Chrome.
 * 2. Press F12 to open Developer Tools.
 * 3. Go to the "Console" tab.
 * 4. Copy and paste the relevant code blocks below to execute tests.
 */

// Utility: Logger with styling
const log = (msg, type = 'info') => {
    const styles = {
        info: 'color: #007bff; font-weight: bold;',
        pass: 'color: #28a745; font-weight: bold; font-size: 1.1em;',
        fail: 'color: #dc3545; font-weight: bold; font-size: 1.1em;',
        step: 'color: #6c757d; font-style: italic;'
    };
    console.log(`%c[QA-Suite] ${msg}`, styles[type] || styles.info);
};

// ==========================================
// TEST CASE 1: Search Functionality (Happy Path)
// ==========================================
async function testSearchFunctionality() {
    log('Starting TC_001: Search Functionality...', 'info');
    
    const searchInput = document.querySelector('#fi-q'); // Jumia search input ID might vary, generic selector: input[name="q"]
    const searchButton = document.querySelector('button.btn._prim._md.-mls'); // Adjust selector based on current Jumia DOM

    if (!searchInput) {
        log('FAILED: Search input not found.', 'fail');
        return;
    }

    log('Step 1: Typing "Samsung Galaxy"...', 'step');
    searchInput.value = 'Samsung Galaxy';
    
    // Simulate user typing event if needed by framework
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));

    log('Step 2: Submitting search...', 'step');
    // If button exists click it, otherwise submit form
    if (searchButton) {
        searchButton.click();
    } else {
        searchInput.closest('form').submit();
    }

    // Note: Since page reloads, we can't verify results in the same snippet without persistence.
    // This snippet demonstrates the ACTION.
    log('Action completed. Verify manually that results page loads.', 'pass');
}

// ==========================================
// TEST CASE 2: Cart Counter Validation
// ==========================================
function testCartCounter() {
    log('Starting TC_004: Cart Counter Validation...', 'info');

    // 1. Get current count
    const cartElement = document.querySelector('.cart .count'); // Hypothetical selector
    const initialCount = cartElement ? parseInt(cartElement.innerText) : 0;
    
    log(`Initial Cart Count: ${initialCount}`, 'step');

    // 2. Find an "Add to Cart" button
    const addToCartBtn = document.querySelector('article.prd button.add'); // Hypothetical selector

    if (!addToCartBtn) {
        log('FAILED: No "Add to Cart" button found on this page. Go to a product listing page.', 'fail');
        return;
    }

    log('Step 1: Clicking "Add to Cart"...', 'step');
    addToCartBtn.click();

    // 3. Wait and Verify
    setTimeout(() => {
        const newCartElement = document.querySelector('.cart .count');
        const newCount = newCartElement ? parseInt(newCartElement.innerText) : 0;

        if (newCount > initialCount) {
            log(`PASSED: Cart count increased from ${initialCount} to ${newCount}`, 'pass');
        } else {
            log(`FAILED: Cart count did not increase. Current: ${newCount}`, 'fail');
        }
    }, 2000); // Wait 2 seconds for AJAX
}

// ==========================================
// TEST CASE 3: Broken Link Checker (Console Version)
// ==========================================
async function checkPageLinks() {
    log('Starting Link Health Check...', 'info');
    const links = Array.from(document.querySelectorAll('a'));
    log(`Found ${links.length} links. Checking first 10...`, 'step');

    let passed = 0;
    let failed = 0;

    for (let i = 0; i < Math.min(links.length, 10); i++) {
        const url = links[i].href;
        if (!url || url.startsWith('javascript')) continue;

        try {
            const response = await fetch(url, { method: 'HEAD', mode: 'no-cors' });
            // Note: no-cors limits status reading, but ensures no network error
            log(`[OK] ${url}`, 'step');
            passed++;
        } catch (e) {
            log(`[BROKEN] ${url}`, 'fail');
            failed++;
        }
    }
    
    log(`Link Check Complete. Checked: ${passed + failed}.`, 'info');
}

// Expose functions to global scope for easy calling
window.qa = {
    testSearch: testSearchFunctionality,
    testCart: testCartCounter,
    checkLinks: checkPageLinks
};

log('Jumia QA Suite Loaded. Type `qa.testSearch()`, `qa.testCart()`, or `qa.checkLinks()` to run tests.', 'pass');
