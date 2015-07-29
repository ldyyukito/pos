function Scanner() {

}

Scanner.prototype.scan = function(inputs) {
  var collection = inputs.map(function(tag) {
    var splitTag = tag.split('-');
    return {
      barcode: splitTag[0],
      count: parseFloat(splitTag[1] || 1)
    };
  });
  return collection;
};
