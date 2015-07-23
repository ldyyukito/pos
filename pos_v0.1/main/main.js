function printReceipt(inputs) {
  var myCart = countSameItems(inputs);
  console.log(getReceiptString(myCart));
}

function countSameItems(inputs) {
  var result = [];
  inputs.forEach(
    function(val) {
      findSameItem(val, result);
    });

  return result;
}

function findSameItem(item, cart) {
  for (var y = 0; y < cart.length; y++) {
    if (item.barcode == cart[y].barcode) {
      cart[y].count++;
      return;
    }
  }
  cart.push({
    barcode: item.barcode,
    name: item.name,
    unit: item.unit,
    price: item.price,
    count: 1
  });
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














/*function list(cart) {
  var str = '***<没钱赚商店>收据***\n';
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].count * cart[i].price; //除了借助函数，可以利用数字的特点来做，但这中法子具有局限性
    str += '名称：' + cart[i].name + '，数量：' + cart[i].count + cart[i].unit + '，单价：' + cart[i].price + '.00(元)，小计：' + cart[i].count * cart[i].price + '.00(元)\n';
  }
  str += '----------------------\n' + '总计：' + totalPrice + '.00(元)\n' + '**********************';
  return str;
}
*/






/*function printReceipt(inputs){
 var myCart = countSameCommody(inputs);
 var mystr = list(myCart);
 console.log(mystr);
 }

function findSameItem(item,cart){
  for(var y = 0;y < cart.length;y++){
      if(item.name === cart[y].name)
      {
        cart[y].count++;
        return;
      }
  }
  cart.push({name : item.name, unit : item.unit, price :  item.price, count : 1});
}
function countSameCommody(inputs){          //如果不要这个函数，可以把它放在主函数里，能少一边变量
   var result = [];
   for(var x = 0;x < inputs.length; x++){
   findSameItem(inputs[x],result);}
   return result;
}
function list(cart){
   var str = '***<没钱赚商店>收据***\n';
   var totalPrice = 0;
   for(var i = 0;i < cart.length; i++){
      totalPrice += cart[i].count * cart[i].price;         //除了借助函数，可以利用数字的特点来做，但这中法子具有局限性
      str += '名称：' + cart[i].name + '，数量：' + cart[i].count + cart[i].unit + '，单价：' + cart[i].price + '.00(元)，小计：' + cart[i].count * cart[i].price +'.00(元)\n';
        }
   str += '----------------------\n' + '总计：' + totalPrice + '.00(元)\n' + '**********************';
    return str;
}










/*function printReceipt(inputs) {
  var myCart = countSameItems(inputs);
  var mystr = list(myCart);
  console.log(mystr);
}

function findSameItem(item, cart) {
  for (var y = 0; y < cart.length; y++) {
    if (item.barcode === cart[y].barcode) {
      cart[y].count++;}
      return;
    }
  }
  cart.push({
    barcode: item.barcode,
    name: item.name,
    unit: item.unit,
    price: item.price,
    count: 1
  });
}

function countSameItems(inputs) {
  var result = [];
  inputs.forEach (
    function(val) {
      findSameItem(val, result);
    });

  return result;
}


function list(cart) {
  var str = '***<没钱赚商店>收据***\n';
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].count * cart[i].price; //除了借助函数，可以利用数字的特点来做，但这中法子具有局限性
    str += '名称：' + cart[i].name + '，数量：' + cart[i].count + cart[i].unit + '，单价：' + cart[i].price + '.00(元)，小计：' + cart[i].count * cart[i].price + '.00(元)\n';
  }
  str += '----------------------\n' + '总计：' + totalPrice + '.00(元)\n' + '**********************';
  return str;
}







/*function printReceipt(inputs){
 var myCart = countSameCommody(inputs);
 var mystr = list(myCart);
 console.log(mystr);
 }

function findSameItem(item,cart){
  for(var y = 0;y < cart.length;y++){
      if(item.name === cart[y].name)
      {
        cart[y].count++;
        return;
      }
  }
  cart.push({name : item.name, unit : item.unit, price :  item.price, count : 1});
}
function countSameCommody(inputs){          //如果不要这个函数，可以把它放在主函数里，能少一边变量
   var result = [];
   for(var x = 0;x < inputs.length; x++){
   findSameItem(inputs[x],result);}
   return result;
}
function list(cart){
   var str = '***<没钱赚商店>收据***\n';
   var totalPrice = 0;
   for(var i = 0;i < cart.length; i++){
      totalPrice += cart[i].count * cart[i].price;         //除了借助函数，可以利用数字的特点来做，但这中法子具有局限性
      str += '名称：' + cart[i].name + '，数量：' + cart[i].count + cart[i].unit + '，单价：' + cart[i].price + '.00(元)，小计：' + cart[i].count * cart[i].price +'.00(元)\n';
        }
   str += '----------------------\n' + '总计：' + totalPrice + '.00(元)\n' + '**********************';
    return str;
}*/
