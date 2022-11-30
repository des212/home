$(document).ready(function () {
});

//drag sort
$(function() {
   $( "#answers" ).sortable({
      update: function(event, ui) {
         var answerOrder = $(this).sortable('toArray').toString();
         $("#result").text (answerOrder);
      }
   });
});