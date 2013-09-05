$(document).ready(function(){

  $('#get_color').click(function(event){

 
    var url = '/color';
    $.post(url, function(response){
      console.log(response.cell);
      console.log(response.color);
      $('#color_me').find('li:nth-child('+ response.cell +')').css('background', response.color);
    });
  });
});