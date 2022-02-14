let 距離 = 0
basic.forever(function () {
    距離 = sonar.ping(
    DigitalPin.P9,
    DigitalPin.P8,
    PingUnit.Centimeters
    )
    serial.writeValue("x", 距離)
})
