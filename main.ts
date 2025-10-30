basic.forever(function () {
    if (input.lightLevel() < 100) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(input.lightLevel())
        basic.clearScreen()
    } else if (input.lightLevel() < 200 && input.lightLevel() > 100) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(input.lightLevel())
        basic.clearScreen()
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
        basic.pause(500)
    } else if (input.lightLevel() < 240 && input.lightLevel() > 200) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(input.lightLevel())
        basic.clearScreen()
        basic.pause(500)
        basic.showIcon(IconNames.Confused)
        basic.clearScreen()
        basic.pause(500)
    } else if (input.lightLevel() > 300) {
        basic.showIcon(IconNames.Angry)
    }
})
