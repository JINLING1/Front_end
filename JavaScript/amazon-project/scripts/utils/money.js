export function formatCurrency(priceCents){
    //用math.round四舍五入
    return (Math.round(priceCents)/100).toFixed(2);
};

//export default formatCurrency;