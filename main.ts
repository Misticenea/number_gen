let seed = 0
/**
 * this number generator is usefull for big numbers (edit thr min and max for your need)
 */
input.onButtonPressed(Button.A, function () {
    seed = randint(1, 10000)
    flexFX.playFlexFX("ting", true)
    basic.showNumber(seed)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(seed)
})
