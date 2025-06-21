import { cart, removeFromCart, updateDeliveryOption } from "../../data/cart.js";
import { products, getProduct} from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOption.js";

export function renderOrderSummary() {
  let cartHTML = "";
  cart.forEach((cartItem) => { 
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);
    //get the deliveryOptionId from the cartItem
    const deliveryOptionId = cartItem.deliveryOptionId;
    //loop the deliveryOptions to find the deliveryOption that matches the deliveryOptionId
    const deliveryOption = getDeliveryOption(deliveryOptionId);
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");
    cartHTML += `
    <div class="cart-item-container js-cart-item-container-${
      matchingProduct.id
    }">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${
                cartItem.quantity
              }</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link js-delete-link link-primary" data-product-id='${
              matchingProduct.id
            }'>
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct, cartItem)}  
        </div>
      </div>
    </div>
  `;
    document.querySelector(".js-order-summary").innerHTML = cartHTML;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = "";
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");
      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)} - `;
      //check if the deliveryOption is the one selected in the cartItem
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      html += `
        <div class="delivery-option js-delivery-option" data-product-id="${
          matchingProduct.id
        }" data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            ${isChecked ? "checked" : ""}
            class="delivery-option-input"
            name="${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
            ${priceString} Shipping
            </div>
          </div>
        </div>
        `;
    });
    return html;
  }
  //make the delete links work
  document.querySelectorAll(".js-delete-link").forEach((link) => {
    //add listener to each deletelink
    link.addEventListener("click", () => {
      //get the productId
      const productId = link.dataset.productId;
      //delete the item from the cart
      removeFromCart(productId);
      //remove the relative HTML
      document.querySelector(`.js-cart-item-container-${productId}`).remove();
    });
  });
  //make the delivery options work
  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      updateDeliveryOption(productId, deliveryOptionId);
      console.log(cart);
      //after updating we need to re-render
      renderOrderSummary();
    });
  });
};
