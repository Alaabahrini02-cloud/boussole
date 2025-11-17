let direction = 0
input.onButtonPressed(Button.A, function () {
    direction = input.compassHeading()
    if (direction > 45 && direction <= 135) {
        basic.showString("e")
    } else if (direction > 135 && direction <= 225) {
        basic.showString("s")
    } else if (direction > 225 && direction <= 315) {
        basic.showString("o")
    } else {
        basic.showString("n")
    }
})
