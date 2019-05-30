var setProfileSwitch = document.getElementById("set-profile-switch");
var sendEmailSwitch = document.getElementById("send-email-switch");

var switchforen = document.getElementsByClassName("switch-for-en")[0];
var switchforsp = document.getElementsByClassName("switch-for-sp")[0];
var formfield = document.getElementsByClassName("form-field")[1];

var emailspan = switchforen.getElementsByClassName("slider")[0];
var profilespan = switchforsp.getElementsByClassName("slider")[0];

if (localStorage.getItem("sendEmailStatus") != null) {
  if (localStorage.getItem("sendEmailStatus") === "false") {
    sendEmailSwitch.checked = false;
  } else {
    sendEmailSwitch.checked = true;
  }
}

if (localStorage.getItem("setProfileStatus") != null) {
  if (localStorage.getItem("setProfileStatus") === "false") {
    setProfileSwitch.checked = false;
  } else {
    setProfileSwitch.checked = true;
  }
}

if (localStorage.getItem("timezonestatus") != null) {
  var previouseselectedIndex = parseInt(localStorage.getItem("timezonestatus"));
  formfield.selectedIndex = previouseselectedIndex;
}

switchforen.addEventListener("click", e => {
  localStorage.setItem("sendEmailStatus", sendEmailSwitch.checked);
});

switchforsp.addEventListener("click", e => {
  localStorage.setItem("setProfileStatus", setProfileSwitch.checked);
});

formfield.addEventListener("change", e => {
  var selectform = e.target;
  var selectedIndex = selectform.selectedIndex;
  localStorage.setItem("timezonestatus", selectedIndex);
});
