var allItem = loadAllItems();

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this._item = null;
}

CartItem.prototype.getItemInfo = function() {
  if (this._item) {
    return this._item;
  } else {
    var that = this;
    this._item = allItem.filter(function(val) {
      return (that.barcode === val.barcode);
    });
  }
};
//下面两个有问题。。。。但我不造原因
CartItem.prototype.getSubtotal = function() {
  return this._item[0].price * (this.count - this.getPromotionCount());

};

CartItem.prototype.getPromotionCount = function() {
  var promotions = loadPromotions();
  var promotionCount = 0;
  var that = this;
  if (promotions[0].barcodes.indexOf(that.barcode !== -1 && that.count > 2)) {
    promotionCount = parseInt(that.count / 3);
  }
  return promotionCount;
};
