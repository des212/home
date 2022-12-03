//public variables 
var questionOrder;
var answerOrder;

//jquery invoke function when document loaded
$(document).ready(function () {
   //getting children of answers
   answerOrder = $("#answers").children();
   //removing all answers
   $("#answers").children().remove();
   //setting answers in shuffled order
   $("#answers").append(shuffle(answerOrder));

   //getting children of questions
   questionOrder = $(questions).children();
   let temp = [];
   //saving value to help variable
   $.each(questionOrder, function(index, value){
      temp.push(value.id);
   });
   questionOrder = temp;
   //console.log(temp);
});

//invoked on drag / sort function
$(function() {
   $( "#answers" ).sortable({
      update: function(event, ui) {
         answerOrder = $(this).sortable('toArray');//.toString();
         if(answerOrder.toString().replace(/answer_/g,"")==questionOrder.toString().replace(/question_/g,"")){
            alert("Congrats mate, you nailed it!");
         }
         else if($("#result").text() == "Not in correct order yet..."){
            $("#result").text("Keep going...");
         }
         else{
            $("#result").text("Not in correct order yet...");
         }
      }
   });
});


function shuffle(arr){
   arr.sort(() => Math.random() - 0.5);
   return arr;
}