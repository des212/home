
function button() {
    if (document.getElementById("alert") == null) {
        let alert = document.createElement("p");
        alert.id = "alert"
        alert.style.height = "60px";
        alert.style.margin = "10px 0px"
        alert.innerHTML = '<p style="float:left;">Dont click me!</p><button onclick="closeAlert()" style="float:right;" type="button" class="btn-close" aria-label="Close"></button>';
        alert.classList.add("alert");
        alert.classList.add("alert-primary");
        alert.classList.add("move");
        document.getElementById("container").appendChild(alert);
    }
    else {
        alert = document.getElementById("alert");
        console.log("jes");
        alert.classList.remove("move");
        const timeout = setTimeout(addMove, 1);
    }
}
function addMove() {
    alert = document.getElementById("alert");
    alert.classList.add("move");
}
function closeAlert() {
    document.getElementById("alert").remove();
}
function submit() {
    window.location = "success.html";
}
function check() {
    confirmpass = document.getElementById("confirmpass");
    pass = document.getElementById("pass");
    if (pass != confirmpass) {
        console.log("jes");
        if (document.getElementById("alert") == null) {
            console.log("jes2");
            let alert = document.createElement("p");
            alert.id = "alert"
            alert.style.height = "60px";
            alert.style.margin = "10px 0px"
            alert.innerHTML = "<p style='float:left;'>Password mismatch! Confirm password doesn't match password </p><button onclick='closeAlert()' style='float:right;' type='button' class='btn-close' aria-label='Close'></button>";
            alert.classList.add("alert");
            alert.classList.add("alert-primary");
            alert.classList.add("move");
            document.getElementById("container").appendChild(alert);
        }
    }
    else {
        document.getElementById("alert").remove();
        console.log("jes");
    }

}