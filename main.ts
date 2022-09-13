let Truth = 0
input.onButtonPressed(Button.A, function () {
    Truth = randint(0, 1)
    if (Truth == 1) {
        basic.showString("Truth")
    } else {
        basic.showString("Dare")
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Truth = randint(0, 3)
    if (Truth == 0) {
        basic.showIcon(IconNames.Sword)
    } else if (Truth == 1) {
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    } else if (Truth == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
	
})
