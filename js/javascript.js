window.sr = ScrollReveal();
window.sr = ScrollReveal({origin:'top'});
window.sr = ScrollReveal({duration: 800});

var divs = document.getElementsByTagName("div");
sr.reveal(divs);

/*$(function() 
{
  $( "#button" ).click(function() 
  {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() 
  {
    setTimeout(function() 
    {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() 
    {
      setTimeout(function() 
      {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
    }
 });*/