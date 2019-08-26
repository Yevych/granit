$(document).ready(function() {
  //Height blocks
  $(window).on('load', function () {
    function setEqualHeight (columns) {
      var tallestcolumn = 0;
      columns.each(function () {
        currentHeight = $(this).height();
        if (currentHeight > tallestcolumn) {
          tallestcolumn = currentHeight;
        }
      })
      columns.height(tallestcolumn);
    }

    setEqualHeight($('.stock__items'));
    setEqualHeight($('.advantage__items'));
    setEqualHeight($('.good__items'));
    /*make blocks of the same height*/
    setEqualHeight($('.stock__item'));
    setEqualHeight($('.advantage__item'));
    setEqualHeight($('.good__item'));
  })
});
