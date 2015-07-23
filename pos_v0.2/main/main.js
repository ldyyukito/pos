function printReceipt(inputs) {
  var result = countSameItems(inputs);
  var receipt = [];
  for (var m in result) {
    findInAll(result[m], receipt);
  }
  console.log(getReceiptString(receipt));

}

function findSameItem(itemA, inputs) {
  for (var y = 0; y < inputs.length; y++) {
    if (itemA === inputs[y].barcode) {
      inputs[y].count++;
      return;
    }
  }
  inputs.push({
    barcode: itemA,
    count: 1
  });
}

function countSameItems(inputs) {
  var result = [];
  inputs.forEach(
    function(val) {
      findSameItem(val, result);
    });

  return result;
}

function findInAll(item, myCart) {
  var allItems = loadAllItems();
  for (var z = 0; z < allItems.length; z++) {
    if (item.barcode === allItems[z].barcode) {
      myCart.push({
        barcode: item.barcode,
        name: allItems[z].name,
        unit: allItems[z].unit,
        count: item.count,
        price: allItems[z].price
      });
    }
  }
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

function getTotalPrice(inputs) {
  var totalPrice = 0;
  inputs.forEach(function(val) {
    totalPrice += getSubtotal(val);
  });
  return totalPrice;
}
