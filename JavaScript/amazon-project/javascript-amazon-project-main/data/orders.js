export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
	orders.unshift(order); // add to the beginning of the array
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders',JSON.stringify(orders));
}