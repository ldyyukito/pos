var allItem = loadAllItems();
他
function  CartItem (barcode,count){
this.barcode = barcode;
this.count = count;
this._item = null;
}

CartItem.prototype.getItemInfo = function(allItem) {
  if(this._item) {
    return this._item;
  }
  else {
    var that = this;
    allItem.filter(function(val) {
      return (that.barcode === val.barcode);
    });
  }
}

CartItem.prototype.getSubtotal = function() {
  return this._item.price * (this.count - this.getPromotionCount());
};


cartItem.prototype.getPromotionCount = function() {
  var promotions = loadPromotions();
  var promotionCount = 0;
  var that = this;
  if(promotions[0].barcodes.indexOf(that.barcode !== -1 && that.count >3)){
    promotionCount = parseInt(that.count/3);
  }
return promotionCount;
}
