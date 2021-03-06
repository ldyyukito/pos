function printReceipt(inputs) {
  var result = countSameElements(inputs);
  var newlist = [];
  for (var m in result) {
    findInAll(result[m], newlist);
  }
  var mystr = list(newlist);
  console.log(mystr);
}



function countSameElements(collection) {
  var objResult = {};
  var result = [];
  unifiedForm(collection).forEach(function(val) {
    objResult[val.barcode] = objResult[val.barcode] || 0;
    objResult[val.barcode] += val.count;
  })
  for (var i in objResult) {
    result.push({
       barcode: i,count: objResult[i]});
  }
  return result;
}

function unifiedForm(collection) {
  return collection.map(function(val) {
    return {
      barcode: val.split("-")[0],
      count: parseInt(val.split("-")[1] || 1)
    }
  })
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

function list(cart) {
  var str = '***<没钱赚商店>收据***\n';
  var totalPrice = 0;
  var saveMoney = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += judgeTotalPrice(cart[i]);
    var theseMoney = judgeTotalPrice(cart[i]);
    saveMoney += cart[i].price * cart[i].count - judgeTotalPrice(cart[i]);
    str += '名称：' + cart[i].name + '，数量：' + cart[i].count + cart[i].unit + '，单价：' + cart[i].price.toFixed(2) + '(元)，小计：' + theseMoney.toFixed(2) + '(元)\n';
  }
  str += '----------------------\n' + '挥泪赠送商品：\n' + getPromotionString(cart) +  '----------------------\n' + '总计：' + totalPrice.toFixed(2) + '(元)\n' + '节省：' + saveMoney.toFixed(2) + '(元)\n' + '**********************';
  return str;
}

function judgeTotalPrice(item) {
  var money = 0;
  if (getPromotionbarcode(item)) {
    money += (item.count - parseInt(item.count / 3)) * item.price;
  } else {
    money += item.count * item.price;
  }
  return money;
}

function getPromotionString(cart) {

  var proString = '';
  for (var i in cart) {
    if (getPromotionbarcode(cart[i])&& cart[i].count>2) {      //要改这个条件！！！！
      proString += '名称：' + cart[i].name + '，数量：' + cart[i].count % 2 + cart[i].unit + '\n';
    }
  }
  return proString;
}


/*function promoteItems(item) {
  var array=[];
  var promotionsLoad = loadPromotions();
  var promotionsBarcode = promotionsLoad[0].barcodes;
  promotionsBarcode.forEach(function (val) {
    if (item.barcode === val) {
      array.push(val);
    }
  });
  if(array.indexOf(item.barcode !== -1)){
    return  true;
  }
  else {
    return false;
  }
}*/

function getPromotionbarcode(barcode){
  var array = [];
  array.push(loadPromotions().filter(function(val){
    return  (val.type =='BUY_TWO_GET_ONE_FREE');
  })
);
  if(array[0][0].barcodes.indexOf(barcode !== -1)){
    return  true;
  }
  else {
    return false;
  }
}
