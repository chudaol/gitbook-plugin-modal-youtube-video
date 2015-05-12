require(["jquery"], function($) {
  /**
   * Closes all open modals and stops video playing in them
   */
  var closeModals = function () {
    var $iframe;

    $(".modal").slideUp(function () {
      $iframe = $(this).find(".video iframe");
      $iframe.attr("src", $iframe.attr("src"));
    });
  };
  /**
   * Close modals on document click
   */
  $(document).on("click", function (ev) {
    var $target;

    $target = $(ev.target);
    if (!$target.hasClass("button play")) {
      closeModals();
    }
  });
  /**
   * Open modal on click on play button
   */
  $(".button.play").click(function (ev) {
    ev.stopPropagation();
    ev.preventDefault();
    $(".modal").slideUp();
    $(this).parent().find(".modal").first().slideDown();
  });
  /**
   * Closes modals on click on close button
   */
  $(".modal .close").click(closeModals);
});