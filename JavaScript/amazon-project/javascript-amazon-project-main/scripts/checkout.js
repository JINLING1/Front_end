import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
	try {
		// throw 'error1';

		await loadProductsFetch();

		const value = await new Promise((resolve,reject) => {
			loadCart(() => {
				// reject('error3');
				resolve('value3');
			});
		});
	} catch (error) {
		console.log('Unexpected error.Please try again later.');
	}

	renderOrderSummary();
	renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values)=>{
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
	loadProducts(() => {
		resolve('value1'); //resolve when loadProducts is done
	});

}).then((value) => { //接收resolve传过来的值
		return new Promise((resolve) => {
			loadCart(() => {
				resolve();
			});
		});

	}).then(() => {
		renderOrderSummary();
		renderPaymentSummary();
	});
*/

/*
loadProducts(() => {
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
