const playwright = require("playwright");

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();

  const MODAL_BUTTON_SELECTOR = ".modal-footer > button";
  const SEARCH_SELECTOR = "input[placeholder=Search]";
  const LOCATION_SELECTOR = "li.active > a";

  await page.goto("https://native-land.ca/");
  await page.waitForTimeout(200);
  await page.click(MODAL_BUTTON_SELECTOR);
  await page.waitForTimeout(300);

  await page.click(SEARCH_SELECTOR);
  await page.keyboard.type("Philadelphia");
  await page.waitForSelector(LOCATION_SELECTOR);

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
