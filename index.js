var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var email = document.getElementById("Email");
var warning = document.getElementById("warning");

btn.addEventListener("click", function complete() {
    if (email.value == "") {
        email.classList.add("error");
        warning.classList.remove("hidden");
    }else {
        if (email.value.match(filter)) {
            email.classList.remove("error");
            warning.classList.add("hidden");
        }
        else{
            email.classList.add("error");
            warning.classList.remove("hidden");
        }
    }
});
