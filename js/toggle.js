$(document).ready(function(){
  $("#read").on("hide.bs.collapse", function(){
    $(".btread").html('<span class="glyphicon glyphicon-collapse-down"></span> Read More');
  });
  $("#read").on("show.bs.collapse", function(){
    $(".btread").html('<span class="glyphicon glyphicon-collapse-up"></span> Read Less');
  });
});