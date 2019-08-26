$(document).ready(function() {
  //Height blocks
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
  /*make blocks of the same height*/
  setEqualHeight($('.stock__item'));
});
