function Pos() {

}

Pos.prototype.receipt = function (cart) {

  var gettime = new GetData();
  var string =
    '***<没钱赚商店>收据***\n' +
    '打印时间：' + gettime.get()+ '\n' +
    '----------------------\n' +
    this.getItemsString(cart) +
    '----------------------\n' +
    '挥泪赠送商品：\n' +
    this.getPromotionString(cart) +
    '----------------------\n' +
    '总计：' + formatPrice(cart.getTotalPrice()) + '(元)\n' +
    '节省：' + formatPrice(cart.getSaving()) + '(元)\n' +
    '**********************';
    return string;
};

Pos.prototype.getItemsString = function(cart){
  var itemString = '';

  var cartItems = cart.cartItems;
  cartItems.forEach(function(val){
   //console.log(val._item[0].name);
    itemString += '名称：' + val._item[0].name + '，数量：' + val.count + val._item[0].unit +'，单价：' +
     formatPrice(val._item[0].price)+
    '(元)，小计：'+ formatPrice(val.getSubTotal()) +'(元)\n';
  });
  return itemString;
};


Pos.prototype.getPromotionString = function(cart) {
  var promotionString = '';
  cart.cartItems.forEach(function(val){
    val.getItemInfo();
    if(val.count>2) {
    promotionString += '名称：' + val._item[0].name + '，数量：' +
     val.getPromotionCount() +val._item[0].unit +'\n';
   }
  });
  return promotionString;
};


function formatPrice(price) {
  return price.toFixed(2);
}
