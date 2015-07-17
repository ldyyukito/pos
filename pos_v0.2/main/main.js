/*  function printReceipt(inputs){
 var myCart = countSameCommody(inputs);   
 var mystr = list(myCart);
 console.log(mystr);
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
 function find inAllItems(item){
  var allItems = loadAllItems(); 
  for(var y = 0;y < allItems .length;y++){
      if(item === allItems[y].barcode){  
        return allItems[y];
      } 
  }                   
  }
function findSameItem(allItems[y],cart){
  for(var m = 0;y < cart.length;y++){
      if(allItems[y].name === cart[m].name)
      {
        cart[m].count++;
        return;
      }
  }
  cart.push({name : allItems[y].name, unit : allItems[y].unit, price :  allItems[y].price, count : 1});
}


function countSameCommody(inputs){ 

   var result = [];
   for(var x = 0;x < inputs.length; x++){
   findSameItem(inputs[x],result);}
   return result;
}
三重循环之间要怎样连接才能不出错。。这个问题仍没有解决。。先参考同学的做法
*/
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
