


/*第一次做法错误分析：一开将本题粗暴的与PRE-POS连接在一起，没有简化问题。
解决方法：先将INPUTS里面多有相同项整合在一起，接着再将ALLITEM里面就好了/
  错误二：参数传递在错误。改正见下！！！*/
//第二种做法：这个是借鉴同学的。但存在不合理之处，故舍去


function printReceipt(inputs){
var result = countSameElements(inputs);
var newlist = [];
for(var m = 0; m < result.length; m++){
//newlist.push(findInAll(result[m]));
findInAll(result[m],newlist);

}
var mystr = list(newlist);
console.log(mystr);
}

 function findSameItem(itemA, inputs) {
  for (var y = 0; y < inputs.length; y++) {
    if (itemA === inputs[y].barcode){
      inputs[y].count++;
      return;
    }
  }
  inputs.push({barcode: itemA, count: 1});
}
function countSameElements(inputs) {
  var result = [];
  for (var x = 0; x < inputs.length; x++) {
    findSameItem(inputs[x], result);
  }
  return result;
}
// wrong!!!!!!!!!!!how can i correct it?  
function findInAll(item,myCart){
  //var myCart = [];
  var allItems = loadAllItems();
  for(var z = 0;z < allItems.length; z++){
    if(item.barcode === allItems[z].barcode){
    myCart.push({barcode:item.barcode,name:allItems[z].name, unit: allItems[z].unit,  count: item.count, price:allItems[z].price});
      }
    }
}
 function list(cart){
 var str = '***<没钱赚商店>收据***\n';
 var totalPrice = 0;
 for(var i = 0;i < cart.length; i++){
    totalPrice += cart[i].count * cart[i].price;
    str += '名称：' + cart[i].name + '，数量：' + cart[i].count + cart[i].unit + '，单价：' + cart[i].price + '.00(元)，小计：' + cart[i].count * cart[i].price +'.00(元)\n';
      }
 str += '----------------------\n' + '总计：' + totalPrice + '.00(元)\n' + '**********************';
  return str;
}












/*function printReceipt(inputs) {
  var myCart = countSameCommody(inputs);
  var mystr = list(myCart);
  console.log(mystr);
}

function countSameCommody(inputs) {

  var result = [];
  for (var x = 0; x < inputs.length; x++) {
    findSameItem(inputs[x], result);
  }
  return result;
}


function findSameItem(allItems, cart){

  for (var m = 0; y < cart.length; y++) {
    if (allItems.name === cart[m].name) {
      cart[m].count++;
      return;
    }
  }
  cart.push({name: allItems.name, unit: allItems.unit, price: allItems.price, count: 1});
}

function list(cart) {
  var str = '***<没钱赚商店>收据***\n';
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].count * cart[i].price;
    str += '名称：' + cart[i].name + '，数量：' + cart[i].count + cart[i].unit + '，单价：' + cart[i].price + '.00(元)，小计：' + cart[i].count * cart[i].price + '.00(元)\n';
  }
  str += '----------------------\n' + '总计：' + totalPrice + '.00(元)\n' + '**********************';
  return str;
}

function findinAllItems(item) {
  var allItems = loadAllItems();
  for (var y = 0; y < allItems.length; y++) {
    if (item === allItems[y].barcode) {
      return allItems[y];
    }
  }
}


//三重循环之间要怎样连接才能不出错。。这个问题仍没有解决。。先参考同学的做法
 function printReceipt(inputs) {
 var num = 1;
 var products = [];

 for(var i = 0; i < inputs.length; i++) {
 if(inputs[i] == inputs[i+1]) {
 num++;
 }
 else {
 products.push(num);
 num = 1;
 }
 }

 finalPrint(products);
 }

 function finalPrint(products) {
 var str= '***<没钱赚商店>收据***\n';
 var j = 0;
 var k = 0;
 str += '名称：可口可乐，数量：'+products[j]+'瓶，单价：3.00(元)，小计：'+(3*products[j]).toFixed(2)+'(元)'+'\n';
 str += '名称：雪碧，数量：'+products[++j]+'瓶，单价：3.00(元)，小计：'+(3*products[j]).toFixed(2)+'(元)\n';
 str += '名称：电池，数量：'+products[++j]+'个，单价：2.00(元)，小计：'+(2*products[j]).toFixed(2)+'(元)\n';
 str += '----------------------\n';
 str += '总计：'+(3 * products[k++] + 3 * products[k++] + 2 * products[k]).toFixed(2)+'(元)\n';
 str += '**********************';
 console.log(str);
 }
 */

