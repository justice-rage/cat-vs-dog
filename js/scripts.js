$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").before("<li>Bark</li>");
    $("ul#webpage").after("<li>Meow</li>");
    // $("ul#user").children("li").first().click(function() {
    //   $(this).remove();
    // });
    // $("ul#webpage").children("li").first().click(function() {
    //   $(this).remove();
    // });
  });

  $("button#stop").click(function() {
    $("ul#user").before("<li>Hiss</li>");
    $("ul#webpage").after("<li>Grrrrr</li>");
  });
});