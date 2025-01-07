function Return_Action () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    15,
    0
    )
    basic.pause(1600)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    10,
    1
    )
    basic.pause(100)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    0,
    0
    )
    basic.pause(1000)
    Status = 0
}
function Ultrasonic_Sensor_Signal_Filter () {
    Distance = RoboticsWorkshop.ping(
    DigitalPin.P14,
    DigitalPin.P15,
    PingUnit.Centimeters
    )
    if (Distance < 2 || (0 as any) > (200 as any)) {
        Status = 0
        if (Distance > 2 || Distance < 200) {
            Status = 1
        }
    }
}
function Animation () {
    basic.showLeds(`
        # # # . .
        # . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . # . #
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # #
        . . # . #
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . # # .
        . . # # .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
}
input.onButtonPressed(Button.A, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    0
    )
    basic.pause(200)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
})
function Clip_Action () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    1
    )
    basic.pause(1500)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    1
    )
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 175)
    basic.pause(1000)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    0
    )
    basic.pause(1500)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
    basic.pause(500)
}
input.onButtonPressed(Button.B, function () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    1
    )
    basic.pause(200)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    ONOFF = 1
    basic.showIcon(IconNames.Happy)
})
function Lower_Action () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    1
    )
    basic.pause(1500)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    1
    )
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    80,
    0
    )
    basic.pause(1500)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorB,
    0,
    0
    )
    basic.pause(500)
}
function Rotate_Action () {
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    15,
    1
    )
    basic.pause(1600)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    10,
    0
    )
    basic.pause(100)
    RoboticsWorkshop.DDMmotor2(
    MotorChannel.MotorA,
    0,
    1
    )
    basic.pause(500)
}
let Distance = 0
let Status = 0
let ONOFF = 0
ONOFF = 0
pins.servoWritePin(AnalogPin.P0, 0)
for (let index = 0; index < 1; index++) {
    Animation()
}
basic.clearScreen()
basic.forever(function () {
    Ultrasonic_Sensor_Signal_Filter()
    if (ONOFF == 1 && Status == 1) {
        Clip_Action()
        Rotate_Action()
        Lower_Action()
        Return_Action()
    }
})
