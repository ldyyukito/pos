function printReceipt(inputs) {
  console.log(getReceiptString(inputs));
}

function getReceiptString(inputs) {
  var receipt = getItemsString(inputs) +
  '----------------------\n' +
  '总计：' + formatPrice(getTotalPrice(inputs)) + '(元)\n' +
  '**********************';
  return receipt;
}

function getItemsString(inputs) {
  var receipt = '***<没钱赚商店>收据***\n';
  inputs.forEach(function(val) {
  receipt += '名称：' + val.name + '，数量：' + val.count + val.unit + '，单价：' + formatPrice(val.price) + '(元)，小计：' + formatPrice(getSubtotal(val)) + '(元)\n';
  });
  return receipt;
}

function formatPrice(val) {
  return val.toFixed(2);
}

function getSubtotal(item) {
  return item.count * item.price;
}

//虽然一次循环可以算出，但为后续工作考虑，不建议这么做，
function getTotalPrice(inputs) {
  var totalPrice = 0;
  inputs.forEach(function(val) {
    totalPrice += getSubtotal(val);
  });
  return totalPrice;
}


/*

function printReceipt(inputs) {
 var str = '***<没钱赚商店>收据***\n';
 var totalPrice = 0;
 for (var i = 0; i < inputs.length; i++) {
   totalPrice += inputs[i].count * inputs[i].price;
   str += '名称：' + inputs[i].name + '，数量：' + inputs[i].count + inputs[i].unit + '，单价：' + formatPrice(inputs[i].price) + '(元)，小计：' + formatPrice(inputs[i].count * inputs[i].price) + '(元)\n';
 }
 str += '----------------------\n' + '总计：'+
 formatPrice(totalPrice) + '(元)\n' + '**********************';
 console.log(str);

 */
