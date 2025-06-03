input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Triangle)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.LoopingInBackground)
    pins.analogWritePin(AnalogPin.P12, 256)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 512)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
input.onButtonPressed(Button.AB, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Rabbit)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P13, 256)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 512)
})
let variable = 0
serial.redirectToUSB()
music.setVolume(255)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
basic.showIcon(IconNames.Yes)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P16, 0)
basic.forever(function () {
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
    serial.writeLine("" + (pins.analogReadPin(AnalogReadWritePin.P1)))
    if (variable == 3) {
        for (let index = 0; index < variable; index++) {
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        }
        pins.analogWritePin(AnalogPin.P13, 256)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 256)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
        if (variable == 2) {
            for (let index = 0; index < variable; index++) {
                music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wawawawaa), music.PlaybackMode.InBackground)
            }
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P12, 256)
            pins.analogWritePin(AnalogPin.P15, 128)
            pins.digitalWritePin(DigitalPin.P16, 0)
        } else {
            if (variable == 1) {
                for (let index = 0; index < variable; index++) {
                    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
                }
                pins.analogWritePin(AnalogPin.P12, 256)
                pins.digitalWritePin(DigitalPin.P13, 0)
                pins.digitalWritePin(DigitalPin.P15, 0)
                pins.analogWritePin(AnalogPin.P16, 128)
            } else {
                pins.digitalWritePin(DigitalPin.P12, 0)
                pins.digitalWritePin(DigitalPin.P13, 0)
                pins.digitalWritePin(DigitalPin.P15, 0)
                pins.digitalWritePin(DigitalPin.P16, 0)
            }
        }
    }
})
basic.forever(function () {
    if (80 < pins.analogReadPin(AnalogReadWritePin.P2) && 80 < pins.analogReadPin(AnalogReadWritePin.P1)) {
        variable = 3
    } else {
        if (80 < pins.analogReadPin(AnalogReadWritePin.P2) && 80 > pins.analogReadPin(AnalogReadWritePin.P1)) {
            variable = 1
        } else {
            if (80 > pins.analogReadPin(AnalogReadWritePin.P2) && 80 < pins.analogReadPin(AnalogReadWritePin.P1)) {
                variable = 2
            } else {
                variable = 0
            }
        }
    }
})
