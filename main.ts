input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    if (input.compassHeading() > 0 && input.compassHeading() < 45) {
        basic.showString("N")
    }
    if (input.compassHeading() > 45 && input.compassHeading() < 90) {
        basic.showString("NE")
    }
    if (input.compassHeading() > 90 && input.compassHeading() < 135) {
        basic.showString("e")
    }
    if (input.compassHeading() > 135 && input.compassHeading() < 180) {
        basic.showString("SE")
    }
    if (input.compassHeading() > 180 && input.compassHeading() < 225) {
        basic.showString("S")
    }
    if (input.compassHeading() > 125 && input.compassHeading() < 270) {
        basic.showString("SO")
        if (input.compassHeading() > 180 && input.compassHeading() < 225) {
            basic.showString("O")
        }
    }
})
