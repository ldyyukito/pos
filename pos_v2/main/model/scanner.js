function Scanner() {

}

Scanner.prototype.scan = function(inputs) {
  var collection = inputs.map(function(tag) {
    var splitTag = tag.split('-');
    return {
      barcode: tag.splitTag[0],
      count: parseFloat(tag.splitTag[1] || 1)
    };
  });
}
