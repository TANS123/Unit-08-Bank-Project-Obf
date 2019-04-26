var deposit;
var name;
var nums=[];
$(".newDeposit").click(function() {

    deposit = $(".accountDeposit").val();
    name = $(".accountName").val();
    $(".ledger").append("<p>" + name + "</p><p class='ledgerBorder'>$" + deposit + "</p>");
 nums.push(deposit);
 var numoftran = nums.length;
 $(".tran").text(numoftran);
  var tottal=0;
 nums.forEach(function(num) {
     tottal = tottal + parseInt(num);
     console.log(tottal);
     $(".total").text("Total Amount Deposited: " + tottal);
});
//  num.forEach(function(element) {
//     //  (parseInt ($(".total").text( tottal + element)));
//      console.log(tottal);
//  });

});