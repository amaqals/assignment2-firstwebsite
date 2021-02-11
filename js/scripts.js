$("#yellow").hover(function(){
  $(this).css({"background-color": "black", "color": "yellow"});
  }, function(){
  $(this).css({"background-color":"yellow", "color":"black"});
});

$("#green").hover(function(){
  $(this).css({"border-radius": "0%"}).children("h4").text("now I'm a square");
  }, function(){
  $(this).css({"border-radius": ""}).children("h4").text("convert me to a square");

});

$("#alice").hover(function(){
  $(this).css({"background-color": "white", "color": "white"});
  }, function(){
  $(this).css({"background-color":"", "color":""});
});

$('#magenta').hover(function() {
	// pull out the album cover url from the element's attributes
	var picture = $(this).attr('data-picture')
  // log the album cover url to the console
  console.log(picture)
  $(this).css('background-image', `url(${picture})`)}, function(){
  $(this).css('background-image', 'none');
});

$("#cyan").hover(function(){
  $(this).animate({
  opacity: '0.5',
  width: '10%',
  'padding-bottom': '10%',
  fontSize: '-=10px',
  margin: '10%',
  });
  }, function(){
  $(this).animate({
  opacity: '1',
  'padding-bottom': '32%',
  width: '32%',
  fontSize: '+=10px',
  margin: '',
 });
});

$('#orange').hover(function() {
  $(this).animate(
    { deg: 360 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      }
    }
  );
}, function(){
  $(this).animate(
      { deg: 0 },
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
});

myText = [
  {magictext:'I am an 84-year-old gentleman who stands 5’4” tall from the basketball-crazy state of Indiana. Recently, my wife and I were having dinner at a local restaurant. ',
    title: 'hover on me to read the first part of a text'},
  {magictext:'Our waiter was a young man, around 6’8”. Naturally, I asked him if he played basketball.',
    title: 'hover on me to continue reading'},
  {magictext:'He looked down at me, replied, “Yes, I do,” and then asked me if I played miniature golf. —Submitted by Paul Kinghorn, Rising Sun, Indiana',
    title: 'hover on me to finish reading the text'}
]

myText.forEach(function(elements){
  $('.row').append(`
    <div class="box2" data-title='${elements.title}' data-magictext='${elements.magictext}'>
        <h4>${elements.title}</h4>
    </div>
`)
})

$(".box2").hover(function(){
    $(this).children("h4").text($(this).data('magictext'));
    }, function(){
    $(this).children("h4").text($(this).data('title'));
  })

// old version

/*
myText.forEach(function(elements){
  $('.row').append(`
    <div class="box2">
        <h4>${elements.title}</h4>
    </div>
`)
})


myText.forEach(function(elements){
  $(".box2").hover(function(){
    $(this).children("h4").text(`${elements.magictext}`);
    }, function(){
    $(this).children("h4").text(`${elements.title}`);
  })
})
*/
