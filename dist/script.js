$(document).ready(function(){ 
 var lang = 'ru';  
  $('input.lang-btn').click(function(el){
    lang = $(this).val();
    $("#random").html($(this).attr('random'));
    $("#submit").html($(this).attr('submit-data'));
    $("#input").attr("placeholder", $(this).attr('placeholder-data'));
  }); 
  
   $("#input").keyup(function() { 
     var input = $("#input");      
    
     var baseurl = 'https://'+lang+'.wikipedia.org';
     var searchWord = input.val();
     var url = baseurl+"/w/api.php?action=query&format=json&origin=*&list=search&srsearch="+searchWord;

  $.ajax({url: url, 
      success: function(data){
        var results = data.query.search;
        var baseLink = baseurl+"/wiki/";        
         $('.conteiner').css({"margin-top": "100%"});
     $(".conteiner").remove();
        
      for ( var i =0; i<=results.length-1; i++)     {
            
            $(".body").append('<div class="box u nvis" id="box'+i+'"><a href="'+baseurl+'/wiki/'+results[i].title+'" target="_blank"><div class="conteiner" id="c'+i+'"><h5 class="conteiner_head" id="ch'+i+'"/></h5> <p class"conteiner_text" id="ct'+i+'"/></p></div></div></a>');
             $("#ch"+i).html(results[i].title);
             $("#ct"+i).html(results[i].snippet+'...');
        
    }
       $('.conteiner').css('marginTop', '0px');
      }
         
    });  
   });
});