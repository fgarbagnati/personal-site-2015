$(function(){
  var s = skrollr.init();

  $('li').hover(
    function() {
      hidePlaceholder();
      $('.' + this.id).show();
    }, function() {
      $('.' + this.id).hide();
      showPlaceholder();
    }
  );

  var hidePlaceholder = function() {
    $('.placeholder').hide();
  };

  var showPlaceholder = function() {
    $('.placeholder').show();
  }
});