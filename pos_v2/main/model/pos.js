function Pos(cart) {
  this.cartItems = cartItems;
}

Pos.prototype.receipt = function () {
  var gettime = new GetData();
  var string =
    '***<没钱赚商店>收据***\n' +
    '打印时间：' + gettime.get() + '\n' +
    '----------------------\n' +
    this.getItemsString() +
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    this.getPromotionString() +
    '----------------------\n' +
    '总计：' + formatPrice() + '(元)\n' +
    '节省：' + formatPrice() + '(元)\n' +
    '**********************';
    return string;
}


val.getItemInfo();
receiptString += '名称：' + val._itemInfo.name + '，数量：' +
val.count + val._itemInfo.unit + '，单价：' +
val._itemInfo.price.toFixed(2) + '(元)' + '，小计：' +
val.getSubTotal().toFixed(2) + '(元)\n';
return receiptString;
}


;

Pos.prototype.getItemsString() = function(cartItems){
  var itemString = '';
  var that = this;
  var cartItems = this.cart.cartItems;
  this.cartItems.forEach(function(val){
    itemString += '名称：' + val.
  })


}
itemString += '名称' + '：'+ cartItem.item.name + '，'+
'数量' + '：' + cartItem.count +cartItem.item.unit + '，'+
'单价' + '：' + formatPrice(cartItem.item.price) + '(元)' + '，' +
'小计' + '：' +formatPrice(_this.processor.getActualSub(cartItem)) + '(元)' +'\n';
});
Receipt.prototype.getItemsString = function(){
var itemString = '';
var _this = this;
var cartItems = this.cart.cartItems;
cartItems.forEach(function(cartItem){
itemString += '名称' + '：'+ cartItem.item.name + '，'+
'数量' + '：' + cartItem.count +cartItem.item.unit + '，'+
'单价' + '：' + formatPrice(cartItem.item.price) + '(元)' + '，' +
'小计' + '：' +formatPrice(_this.processor.getActualSub(cartItem)) + '(元)' +'\n';
});
return itemString;
};






function formatPrice(price) {
  return price.toFixed(2);
}
