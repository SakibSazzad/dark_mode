var password = document.getElementById("password");
var password_eye = document.getElementById("password_eye");
var modeicon = document.getElementById("mode");
var toggle_bar = document.getElementById("menu_toggle_bar");

password_eye.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    password_eye.classList.add("fa-eye");
    password_eye.classList.remove("fa-eye-slash");
  } else {
    password.type = "password";
    password_eye.classList.add("fa-eye-slash");
    password_eye.classList.remove("fa-eye");
  }
});

modeicon.addEventListener("click", function () {
  document.body.classList.toggle("darkmode");

  if (modeicon.classList.contains("fa-solid")) {
    modeicon.classList.add("fa-regular");
    modeicon.classList.remove("fa-solid");
  } else {
    modeicon.classList.remove("fa-regular");
    modeicon.classList.add("fa-solid");
  }
});

toggle_bar.addEventListener("click", function () {
  document.getElementById("sidemenu").classList.toggle("active");
});

