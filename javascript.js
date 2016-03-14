// $ và jQuery là như nhau

$(function(){
  $('#accordion').find('.accordion-title').click(function(){
    $('#accordion').find('.accordion-body').removeClass('open');
    $(this).next().toggleClass('open');
  })
})

