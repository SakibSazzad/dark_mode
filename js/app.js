$(function () {
  // password eye button start
  $("#password_eye").on("click", function () {
    if (password.type === "password") {
      password.type = "text";
      password_eye.addClass("fa-eye-slash");
      password_eye.removeClass("fa-eye");
    } else {
      password.type = "password";
      password_eye.removeClass("fa-eye-slash");
      password_eye.addClass("fa-eye");
    }
  });
  // password eye button End

  // Darkmode icon start
  $("#mode").on("click", function () {
    $("body").toggleClass("darkmode");

    if ($("#mode").hasClass("fa-solid")) {
      $("#mode").addClass("fa-regular");
      $("#mode").removeClass("fa-solid");
    } else {
      $("#mode").addClass("fa-solid");
      $("#mode").removeClass("fa-regular");
    }
  });
  // Darkmode icon End

  // menu toggle bar start
  $("#menu_toggle_bar").on("click", function () {
    $("#sidemenu").toggleClass("active");
  });
  // menu toggle bar End

  // nav fixed scroll start
  $(window).on("scroll", function () {
    var scrollsize = $(window).scrollTop();

    if (scrollsize > 136) {
      $("#nav").addClass("active");
    } else {
      $("#nav").removeClass("active");
    }
  });
  // nav fixed scroll End

  // Preloader start
  $(window).on("load", function () {
    $("#preloader").fadeOut(1000);
  });
  // Preloader End
});
