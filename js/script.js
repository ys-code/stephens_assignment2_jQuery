//tooltip
$( function() {
    $( document ).tooltip();
  } );
//accordion 
  $( function() {
    $( "#accordion" ).accordion();
  } );
  //tabs
  $( function() {
    
    $( "#tabsv" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabsv li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
    $( "#tabsh" ).tabs();
  } );
  //form
  $( function() {
    $( "input[type=radio]" ).checkboxradio();
    $( "input[type=checkbox]" ).checkboxradio();
    $( "#menu" ).selectmenu();
    $( "#menu2" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
        
          $( ".widget input[type=button]").button();
          $( "button" ).click( function( event ) {
            event.preventDefault();
          } );
  });
  $(function(){
    $(".productList").css({
                            "list-style-type": "square",
                            "margin-left":"1em"});
    $("#quickLink li").css({"display": "inlineblock","backgroundColor":"#d5f3ff"});                        
    $("#quickLink li a").css({"textDecoration": "none","color":"#CC1C0D"});
                            
  });
 $(document).ready(function(){/*
    $("#sticker").css({
      "float": "none",
      "width": "300px", 
      "position": "fixed",
      "top": "380px",
      "right":"280px",
      "z-index":"inherit",
      "backgroundColor":"white",
      "border":"1px solid #777",
      "borderRadius":"5px",
      "padding":"5px 5px",
      "boxShadow": "5px 10px #777"});*/
    $("#sticker").sticky({topSpacing:100,widthFromWrapper:'true',responsiveWidth:'true'});
    $("#sticker").sticky('update');
    
      $("body").toTopButton({});
   
    
  });
  
  