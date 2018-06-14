const puppeteer = require('puppeteer');

const CHECKOUTBTN_SELECTOR = '#FormActionTable a.findfoodbutton'
const SUBMITBTN_SELECTOR = '#submit_order_div a.findfoodbutton'

async function proceedToCheckout(page) {
	await page.click(CHECKOUTBTN_SELECTOR);

	//await page.click(SUBMITBTN_SELECTOR);
}