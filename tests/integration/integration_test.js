/*
var menu = $('#menu li a');
var tables = $('#tables a');
var tableNumber = $('div.nine h2 span').text();
var total = $('#total h3 span').text();
var addFoodText = $('#customer-tab li h3')[0].firstChild

    // it('tables.index should display 6 tables', function() {
    //   var anchors, selectText;
    //   Ember.run(function() {
    //     anchors = $('#tables a');
    //     selectText = $('div.eight h2').text();
    //   });
    //   expect(anchors.length).toEqual(6);
    //   expect(selectText).toEqual("Select a table at left");
    // });
    
    // it('clicking on table 2 shows tab for table', function(done) {
    //   var tableNumber, customerTabText;
    //   Ember.run(function() {
    //     $("[href='/tables/2']").click();
    //   });
    //   waits(100);
    //   runs(function() {
    //     tableNumber = $('div.nine h2 span').text();
    //     customerTabText = $('#customer-tab li h3:first').text();
    //     expect(tableNumber).toEqual('2');
    //     expect(customerTabText).toEqual("Click a food to add it");
    //   });
    // });
*/

asyncTest("Integration test", function(){
  var tables, tableNumber, customerTabText, promise;
  promise = new Ember.RSVP.Promise();
  expect(2);
  // resetApp();
  setTimeout(function(){
    console.log("IM READY");
    window.helper = testing(App);
    promise.resolve();
  }, 200);
  promise.then(function(){
    console.log("PROMISE RESOLVED");
    tables = $('#tables a');
    equal(helper.path(), "tables.index", "The current path is tables.index");
    equal(tables.length, 6, "There are six tables present.");
    start();
  });

  // Ember.run(function() {
  //   $("[href='/tables/2']").click();
  //   Ember.run.schedule('actions', this, function(){
  //     promise.resolve('done');
  //   });
  // });
  // promise.then(function(){
  //   tableNumber = $('div.nine h2 span').text();
  //   customerTabText = $('#customer-tab li h3:first').text();
  //   // equal(tableNumber, "2", "Table number is 2");
  //   ok(true);
  //   // equal(customerTabText, "Click a food to add it", "Placeholder text is visible");
  //   start();
  // });
});