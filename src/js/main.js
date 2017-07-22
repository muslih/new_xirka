$(document).ready(function(){
  $('#tagline .tagline-box').bind('click', function(){
    // console.log('clicked man!');
    
    $('#tagline .col-md-4').not($(this).parent()).removeClass('active');
    $(this).parent().toggleClass('active');
    console.log($(this).parent())
    
    // $($(this).data('target')).slideDown();
    $($(this).data('target')).siblings('.tagline-description-content').removeClass('in');
  })
})