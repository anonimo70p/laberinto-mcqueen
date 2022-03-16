function Girar90ºGradosIzqui () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 35)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 35)
    basic.pause(200)
}
function Girar90ºGradosDere () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 35)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 35)
    basic.pause(200)
}
let UltimoGiro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 4) {
        maqueen.motorStop(maqueen.Motors.All)
        if (UltimoGiro == 0) {
            Girar90ºGradosIzqui()
            UltimoGiro = 1
        } else {
            Girar90ºGradosDere()
            UltimoGiro = 0
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 35)
    }
})
