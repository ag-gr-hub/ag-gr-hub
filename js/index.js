document.getElementById("instagram").addEventListener("click", function(event) {
    event.preventDefault();

    var url = this.getAttribute("href");
    window.open(url, "_blank");
});