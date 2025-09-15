export const deliveryOptions = [{
    id: '1',
    deliveryDays:7,
    priceCents:0
},{
    id:'2',
    deliveryDays:3,
    priceCents:499 //use cents to avoid floating point errors
},{
    id:'3',
    deliveryDays:1,
    priceCents:999
}];

export function getDeliveryOption(deliveryOptionId){
let deliveryOption;
    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });

    //default deliveryOption is the first one
    return deliveryOption || deliveryOptions[0];
}