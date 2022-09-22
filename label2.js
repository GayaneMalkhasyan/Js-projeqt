document.onkeydown = function (p) {
    var kapiko = document.getElementById("o6").offsetLeft
    var kapikf = document.getElementById("o6").offsetTop

    var bananr1 = document.getElementById("o").offsetLeft
    var banane1 = document.getElementById("o").offsetTop

    var bananr2 = document.getElementById("o1").offsetLeft
    var banane2 = document.getElementById("o1").offsetTop

    var bananr3 = document.getElementById("o2").offsetLeft
    var banane3 = document.getElementById("o2").offsetTop

    var bananr4 = document.getElementById("o3").offsetLeft
    var banane4 = document.getElementById("o3").offsetTop

    var bananr5 = document.getElementById("o4").offsetLeft
    var banane5 = document.getElementById("o4").offsetTop

    var bananr6 = document.getElementById("o5").offsetLeft
    var banane6 = document.getElementById("o5").offsetTop

    if (p.keyCode == 38) {
        kapikf = kapikf - 10
        document.getElementById("o6").style.top = kapikf + "px"
    }
    if (p.keyCode == 40) {
        kapikf = kapikf + 10
        document.getElementById("o6").style.top = kapikf + "px"
    }
    if (p.keyCode == 37) {
        kapiko = kapiko - 10
        document.getElementById("o6").style.left = kapiko + "px"
    }
    if (p.keyCode == 39) {
        kapiko = kapiko + 10
        document.getElementById("o6").style.left = kapiko + "px"
    }

    if (kapiko + 100 > bananr1 && kapiko < bananr1 + 100 && kapikf + 100 > banane1 && kapikf < banane1 + 100) {
        document.getElementById("o").classList.add("tt")
    }
    if (kapiko + 100 > bananr2 && kapiko < bananr2 + 100 && kapikf + 100 > banane2 && kapikf < banane2 + 100) {
        document.getElementById("o1").classList.add("tt")
    }
    if (kapiko + 100 > bananr3 && kapiko < bananr3 + 100 && kapikf + 100 > banane3 && kapikf < banane3 + 100) {
        document.getElementById("o2").classList.add("tt")
    }
    if (kapiko + 100 > bananr4 && kapiko < bananr4 + 100 && kapikf + 100 > banane4 && kapikf < banane4 + 100) {
        document.getElementById("o3").classList.add("tt")
    }
    if (kapiko + 100 > bananr5 && kapiko < bananr5 + 100 && kapikf + 100 > banane5 && kapikf < banane5 + 100) {
        document.getElementById("o4").classList.add("tt")
    }
    if (kapiko + 100 > bananr6 && kapiko < bananr6 + 100 && kapikf + 100 > e6 && kapikf < banane6 + 100) {
        document.getElementById("o5").classList.add("tt")
    }

    var kk = document.getElementsByClassName("tt").length * 5
    document.getElementById("d1").innerHTML = kk
    if (kk == 30) {
        document.getElementById("o8").style.opacity = 1
        clearInterval(stop)
    }
}

var s = 60
var stop = setInterval(function stopF() {
    s--
    document.getElementById("a2").innerHTML = s
    if (s == 0) {
        document.getElementById("o7").style.opacity = 1
        clearInterval(stop)
    }
}, 1000)