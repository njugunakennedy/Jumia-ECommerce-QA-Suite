# 🛒 Jumia E-Commerce QA Console Suite

![Status](https://img.shields.io/badge/Status-Active-success)
![Type](https://img.shields.io/badge/Type-Console%20Automation-orange)
![Tools](https://img.shields.io/badge/Tools-JavaScript%20%7C%20DevTools-yellow)

## � Project Re-Imagined: From Manual to Automated
**"Don't just look for bugs—hunt them with code."**

This repository represents a shift in perspective from traditional **Manual QA** to **Technical QA Engineering**. Instead of passively clicking through the website, this project utilizes **JavaScript injection via the Browser Console** to programmatically verify the integrity of the Jumia E-Commerce platform.

By moving logic to the console, we achieve:
1.  **Repeatability:** Tests run exactly the same way every time.
2.  **Speed:** Verification happens in milliseconds, not minutes.
3.  **Precision:** We inspect the DOM state directly, not just the visual output.

## 📂 Repository Contents
*   **`console_tester.js`**: The core automation engine. Contains JavaScript functions to verify Search, Cart, and Link health.
*   **`JumiaQA.xlsx`**: The original manual test plan (Legacy/Reference).
*   **`Defect_Log.md`**: Summary of findings.

## � How to Run the Tests (The "Hacker" Way)
You don't need a complex environment. You just need a browser.

1.  Open [Jumia Kenya](https://www.jumia.co.ke/) in Google Chrome.
2.  Press **F12** or **Ctrl+Shift+I** to open Developer Tools.
3.  Navigate to the **Console** tab.
4.  Copy the entire content of `console_tester.js` and paste it into the console.
5.  Hit **Enter**.
6.  Run any of the following commands:

```javascript
qa.testSearch()   // 🔍 Automates the search bar interaction
qa.testCart()     // 🛒 Verifies cart counter increments
qa.checkLinks()   // 🔗 Scans the page for broken links
```

## 🎯 Scope of Automation

| Module | Console Automation Logic |
| :--- | :--- |
| **🔍 Search** | Programmatically injects search terms and triggers form submission events. |
| **🛒 Cart** | Simulates clicks on "Add to Cart" and parses the DOM to verify the cart counter integer increments. |
| **❤️ Health** | Iterates through DOM anchors (`<a>`) and performs `fetch` requests to validate HTTP status. |

## 💡 The "Paradigm Shift"
This project challenges the idea that QA is just "checking boxes." By using the console, we treat the browser as an environment we can control, not just view. This approach bridges the gap between **QA** and **Frontend Development**.

## 👤 Author
**Kennedy Njuguna Gicini**
*   *Technical QA Engineer*
*   [LinkedIn Profile Link]
*   [Email Address]

---
*Disclaimer: This project is for educational and portfolio purposes only. I am not affiliated with Jumia.*