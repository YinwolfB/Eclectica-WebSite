



fetch("../../../../../shared/footer/footer.html")
.then(response => response.text())
.then(html => document.querySelector(".footer__main").innerHTML = html)


