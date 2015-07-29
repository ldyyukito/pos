function printReceipt(inputs) {
  var scanner = new Scanner();
  var time = new GetData();
  var cart = new Cart();
  var pos = new Pos();
  var tempCollection = scanner.scan(inputs);
  cart.addItem(tempCollection);
  var string = pos.receipt(cart);
console.log(string);
}
