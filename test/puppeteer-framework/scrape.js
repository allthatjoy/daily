const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('http://books.toscrape.com/');

  const result = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.product_pod'))
    .map(item => ({
      title: item.querySelector('h3 a').title,
      price: item.querySelector('.price_color').innerText
    })));

  browser.close();
  return result;
};

const startDate = Date.now();

scrape().then((result) => {
  console.log('took in millis', (Date.now() - startDate));
  console.log(result);
});
