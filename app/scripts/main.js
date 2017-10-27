function myFunction() {
    var x = document.getElementById("navLinks");
    if (x.className === "nav-hide") {
        x.className += "responsive";
    } else {
        x.className = "nav-hide";
    }
}
