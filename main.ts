max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.for_4_in_1_modules(
rotation_direction.clockwise,
false
)
basic.forever(function () {
    max7219_matrix.scrollText(
    "Hello world!",
    900,
    500
    )
    basic.pause(1000)
})
