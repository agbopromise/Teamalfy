//jshint esversion:6



$("#submit").hide();

//input validation for data 2
$("#num2").change(function(){
  var num1  = $("#num1").val();
  var num2  = $("#num2").val();
  if(num1 != "" && num2 !=""){
    $("#submit").show();
  }else{
    $("#submit").hide();
  }

});

//input validation for data1
$("#num1").change(function(){
  var num1  = $("#num1").val();
  var num2  = $("#num2").val();
  if(num1 != "" && num2 !=""){
    $("#submit").show();
  }else{
    $("#submit").hide();
  }

});
