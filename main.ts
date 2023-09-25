input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Wiederholung = false
    Ampelsteuerung()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    Wiederholung = true
})
function Ampelsteuerung () {
    basic.pause(500)
    Ampel3(0, 0, 1)
    Ampel2(1, 0)
    basic.pause(1000)
    Ampel3(0, 1, 0)
    basic.pause(2000)
    Ampel3(1, 0, 0)
    basic.pause(2000)
    Ampel2(0, 1)
    basic.pause(7000)
    Ampel2(1, 0)
    basic.pause(5000)
    Ampel3(1, 1, 0)
    basic.pause(750)
    Ampel3(0, 0, 1)
}
function Ampel3 (Rot: number, Gelb: number, Grün: number) {
    pins.digitalWritePin(DigitalPin.P0, Rot)
    pins.digitalWritePin(DigitalPin.P1, Gelb)
    pins.digitalWritePin(DigitalPin.P2, Grün)
    if (Rot == 1) {
        basic.setLedColor(0xff0000)
    } else if (Gelb == 1) {
        basic.setLedColor(0xffff00)
    } else if (Grün == 1) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.turnRgbLedOff()
    }
}
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    Wiederholung = false
    Ampelsteuerung()
})
function Ampel2 (Rot: number, Grün: number) {
    pins.digitalWritePin(DigitalPin.C16, Rot)
    pins.digitalWritePin(DigitalPin.C17, Grün)
    if (Rot == 1) {
        basic.showIcon(IconNames.StickFigure)
    } else if (Grün == 1) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.clearScreen()
    }
}
let Wiederholung = false
basic.showString("Ampel5")
Ampel3(1, 1, 1)
Ampel2(1, 1)
loops.everyInterval(10000, function () {
    if (Wiederholung) {
        Ampelsteuerung()
    }
})
