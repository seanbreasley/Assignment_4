console.log('connected')
$(".readmore a").click(function(){
    event.preventDefault();
    $("#show-this-on-click").slideDown('slow');
    $('.readmore').hide();
    $('.readless').show();
});

$(".hide a").click(function(){
    event.preventDefault();
    $("#show-this-on-click").slideUp('slow');
    $('.readmore').show();
    $('.readless').hide();
});

$(".learnmore").click(function(){
    event.preventDefault();
    $("#learnmoretext").slideDown('slow');
    $('.learnmore').hide();
});
