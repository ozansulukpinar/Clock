setInterval(function () {
    var today = new Date(); var currentTime = makeTwoDigit(today.getHours()) + ":" + makeTwoDigit(today.getMinutes()) + ":" + makeTwoDigit(today.getSeconds());
    document.getElementById("clock").innerHTML = currentTime;
}, 1000);

function makeTwoDigit(number) {
    var newNumber = ("0" + number).slice(-2);
    return newNumber;
}