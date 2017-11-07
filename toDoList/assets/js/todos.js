console.log('connected');
$('ul').on('click','li', function() {
  $(this).toggleClass('completed');
});
$('ul').on('click','span', function(event) {
    $(this).parent().fadeOut(400,function() {
      $(this).remove();
    })
  event.stopPropagation();
});
$('input[type=text]').on('keypress', function(event){
  if(event.which === 13) {
    var toDoText = $(this).val();
    $(this).val('');
    console.log(toDoText);
    $('ul').append("<li><span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> " + toDoText + "</li>");
  }
});

$('.fa-plus').on('click', function() {
  console.log('inside fa fa-plus');
  $('input[type=\'text\']').fadeToggle(400);
})
