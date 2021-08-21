
//         Extra Memory Cost


document.getElementById('8gb-memory-btn').addEventListener('click', function(){
    const memoryCost = document.getElementById('extra-memory-cost');
    const MemoryPrice = 0;
    memoryCost.innerText = parseInt(MemoryPrice);

    // Update Total Cost
    const totalCost = document.getElementById('total-cost');
    const newTotalCostText = totalCost.innerText;
    const newTotalCost = MemoryPrice + parseInt(newTotalCostText);
    totalCost.innerText = newTotalCost;
})

document.getElementById('16gb-memry-btn').addEventListener('click', function(){
    const memoryCost = document.getElementById('extra-memory-cost');
    const MemoryPrice = 180;
    memoryCost.innerText = MemoryPrice;

    // Update Total Cost
    const totalCost = document.getElementById('total-cost');
    const newTotalCostText = totalCost.innerText;
    const newTotalCost = MemoryPrice + parseInt(newTotalCostText);
    totalCost.innerText = newTotalCost;
})



//         Extra Storage prices

document.getElementById('256gb-storage-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('extra-storage-cost');
    const storagePrice = 0;
    storageCost.innerText = parseInt(storagePrice);

    // Update Total Cost
    const totalCost = document.getElementById('total-cost');
    const newTotalCostText = totalCost.innerText;
    const newTotalCost = storagePrice + parseInt(newTotalCostText);
    totalCost.innerText = newTotalCost;
})

document.getElementById('512gb-storage-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('extra-storage-cost');
    const storagePrice = 100;
    storageCost.innerText = parseInt(storagePrice);

    // Update Total Cost
    const totalCost = document.getElementById('total-cost');
    const newTotalCostText = totalCost.innerText;
    const newTotalCost = storagePrice + parseInt(newTotalCostText);
    totalCost.innerText = newTotalCost;
})

document.getElementById('1tb-storage-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('extra-storage-cost');
    const storagePrice = 180;
    storageCost.innerText = parseInt(storagePrice);

    // Update Total Cost
    const totalCost = document.getElementById('total-cost');
    const newTotalCostText = totalCost.innerText;
    const newTotalCost = storagePrice + parseInt(newTotalCostText);
    totalCost.innerText = newTotalCost;
})



//               Delivery cost
document.getElementById('free-delivery-btn').addEventListener('click', function(){
    const deliveryCost = document.getElementById('extra-delivery-cost');
    const deliveryAmount = 0;
    deliveryCost.innerText = parseInt(deliveryAmount);

    // Update Total Cost
    const totalCost = document.getElementById('total-cost');
    const newTotalCostText = totalCost.innerText;
    const newTotalCost = deliveryAmount + parseInt(newTotalCostText);
    totalCost.innerText = newTotalCost;
})


document.getElementById('cost-delivery-btn').addEventListener('click', function(){
    const deliveryCost = document.getElementById('extra-delivery-cost');
    const deliveryAmount = 20;
    deliveryCost.innerText = parseInt(deliveryAmount);

    // Update Total Cost
    const totalCost = document.getElementById('total-cost');
    const newTotalCostText = totalCost.innerText;
    const newTotalCost = deliveryAmount + parseInt(newTotalCostText);
    totalCost.innerText = newTotalCost;
})

document.getElementById('')