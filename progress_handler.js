
function nextDialog(url) {
    reset();
        
    alertify.confirm("Congrats mate, you nailed it", function (e) {
       if (e) {
          //alertify.success("You've clicked OK");
          $(location).attr('href', url);
          
       } else {
          //alertify.error("You've clicked Cancel");
          $(location).attr('href', window.location.href);
       }
    });
        
    return false;
 }
 
 function reset () {
    $("#toggleCSS").attr("href", "https://www.tutorialspoint.com/jquery/src/alertify/alertify.default.css");
        
    alertify.set({
       labels : {
          ok     : "Continue",
          cancel : "Try again"
       },
            delay : 5000,
       buttonReverse : false,
       buttonFocus   : "ok"
    });
 }