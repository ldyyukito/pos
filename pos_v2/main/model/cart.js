function Cart(cartItems) {
  this.cartItems = [];
}

Cart.prototype.groupItems(collection) {
var objResult = {};
var result = [];
collection.forEach(function(val) {
  objResult[val.barcode] = objResult[val.barcode] || 0;
  objResult[val.barcode] += val.count;
})
for (var i in objResult) {
  result.push({
     barcode: i,count: objResult[i]});
}
return result;
}


Cart.prototype.addItem = funciton(result) {
  result.forEach(function(val) {
    var cartItem = new CartItem ();
    this.cartItems.push(cartItem);
  });
}

Cart.prototype.getTotalPrice = function() {
  val TotalPrice = 0;
  this.cartItems.forEach(function(val){
  TotalPrice += getSubtotal();
});
}

Cart.prototype.getSaving= function(cartItems) {
var saving = 0;
this.cartItems.forEach(function(val) {
saving += val.count * val._itemInfo.price;
});
return (TotalMoney - this.getTotalPrice());
};
