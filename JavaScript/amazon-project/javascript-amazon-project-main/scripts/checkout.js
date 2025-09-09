import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1'); 
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values)=>{
  renderOrderSummary();
  renderPaymentSummary();
});

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
