let sonar = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . #
    . # . # .
    . . # . .
    `)
cuteBot.motors(10, 10)
// parpadea las luces
basic.forever(function () {
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 255)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 0, 0)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 255, 0, 0)
    basic.pause(200)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 0, 0, 255)
    basic.pause(200)
})
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    // <Aquí lo tiene dividido en las partes que tiene que buscar en la categoría Lógica
    // es una estructura si, si no ...
    // Primero busca el que tiene la [ y ] y lo pone dentro del verdadero
    // después el mayor >  y le añade dentro la variable sonar y el 2
    // e igual con el menor < que 15
    if (sonar > 2 && sonar < 15) {
        for (let index = 0; index < 4; index++) {
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
        basic.pause(100)
        // puedes hacer que gire un porcentaje aleatorio en vez de siempre -60
        cuteBot.motors(-60, 0)
        basic.pause(500)
    } else {
        cuteBot.motors(10, 10)
    }
})
