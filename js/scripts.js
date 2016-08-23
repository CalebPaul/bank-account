//Business Logic
var accountArray = [];
var amount = 0;
function BankAccount(acctUserName, balance){
  this.acctUserName = acctUserName;
  this.balance = balance;
}
BankAccount.prototype.showDetails = function(){
  $("#name").text(this.acctUserName);
  $("#balance").text(this.balance);
}
BankAccount.prototype.deposit = function(amount){
  this.balance+=amount ;
  alert(this.balance);
}
BankAccount.prototype.withdrawl = function(amount){
  this.balance-=amount;
  alert(this.balance);
}
//User Logic
$(document).ready(function() {
  $("form#new-account").submit(function(event){
    event.preventDefault();
    $("#account-list").hide();
    $("#options-box").hide();
    var userName = $("#account-user-name").val();
    var initalDeposit = parseInt($("#inital-deposit").val());
    var myAccount = new BankAccount(userName, initalDeposit);
    accountArray.push(myAccount);
    $("#account-user-name").val("");
    $("#inital-deposit").val("");
    $("#account-list").append("<li class='temp-item'>" + myAccount.acctUserName + "</li>");
    $(".temp-item").last().click(function() {
      $("#options-box").show();
      myAccount.showDetails();
      $("#withdrawl").last().click(function(){
        amount = parseInt($("#amount").val());
        myAccount.withdrawl(amount);
      });
      $("#deposit").last().click(function(){
        amount = parseInt($("#amount").val());
        myAccount.deposit(amount);
      });
    });
  });
  $("form#generate").submit(function(event){
    $("#account-list").show();
    event.preventDefault();
  });
});
