// Extra Price Add Function
function priceAdd(costID, price) {
    const preCost = document.getElementById(costID);
    preCost.innerText = price;
    totalPrice();
    return preCost;
};

// Total Price Count Function
function totalPrice() {
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const preTotalPrice = document.getElementById('total-cost');
    const totalPrice = 1299 + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    preTotalPrice.innerText = totalPrice;
    const totalPriceFinal = document.getElementById('total-final-cost');
    totalPriceFinal.innerText = totalPrice;
}

// Function Calling Shortcut Function
function btnClicked(btnID, costID, price) {
    document.getElementById(btnID).addEventListener('click', function() {
        priceAdd(costID, price);
    });
};

// Functions Calling
btnClicked('memory-8gb', 'memory-cost', 0);
btnClicked('memory-16gb', 'memory-cost', 180);
btnClicked('storage-256gb', 'storage-cost', 0);
btnClicked('storage-512gb', 'storage-cost', 100);
btnClicked('storage-1tb', 'storage-cost', 180);
btnClicked('delivery-free', 'delivery-cost', 0);
btnClicked('delivery-fast', 'delivery-cost', 20);

//Total-final-price Function 
function finalPriceCupon() {
    const cuponInput = document.getElementById('cupon-input');
    const priceFinal = document.getElementById('total-final-cost');
    const totalPrice = document.getElementById('total-cost');
    const discount = parseInt(totalPrice.innerText) / 100 * 20;
    if (cuponInput.value == 'stevekaku') {
        const totalPriceFinalCupon = parseInt(totalPrice.innerText) - discount;
        priceFinal.innerText = totalPriceFinalCupon;
    } else if (cuponInput.value = '') {

    } else {
        alert("Invalid Cupon Code");
    }
    cuponInput.value = '';
};

// Promo Code Apply
document.getElementById('cupon-btn').addEventListener('click', function() {
    finalPriceCupon();
});