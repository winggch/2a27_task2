input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . # . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
