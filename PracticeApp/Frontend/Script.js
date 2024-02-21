let counter = 0;

document.getElementById("increment").addEventListener("click", function () {
    counter++;
    document.getElementById("counter").innerText = counter;
});

document.getElementById("decrement").addEventListener("click", function () {
    if (counter > 0) {
        counter--;
    }
    document.getElementById("counter").innerText = counter;
});

document.getElementById("reset").addEventListener("click", function () {
    counter = 0;
    document.getElementById("counter").innerText = counter;
});
