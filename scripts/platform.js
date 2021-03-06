/**
 * Esta función permite darle atributos al mundo/mapa/plataforma en donde se van a dibujar todas las paredes, personajes, enemigos, etc.
 */
function Plataforma(){ //Mundo/plataforma
    this.filas = 19; //Para las filas
    this.columnas = 30; //Para las columnas
    this.plataform = 
    [ //Plataforma del mundo con un arreglo bidimensional

        // Para pared asterisco (*)
        // para enemigos letra (S)
        // Para comida signo menos (-)
        // Para powerup signo más (+)
        // Para espacios vacios slash (/)
        // Para Aqua/gas letra (A)
        ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
        ["*","-","+","-","-","-","-","-","-","-","-","-","-","-","-","/","/","/","/","/","S","/","/","S","/","/","-","-","-","*"],
        ["*","-","/","/","/","*","*","*","*","*","*","/","/","/","-","/","/","/","/","*","*","*","*","*","*","/","-","/","-","*"],
        ["*","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+","-","-","*"],
        ["*","*","*","/","/","*","*","*","*","*","*","*","*","*","-","/","*","*","*","*","*","*","*","*","*","/","-","*","*","*"],
        ["/","/","*","/","/","*","/","/","/","/","/","/","/","*","-","/","*","/","/","/","/","/","/","/","*","/","-","*","/","/"],
        ["/","/","*","/","/","*","/","/","/","/","/","/","/","*","-","/","*","/","/","/","/","/","/","/","*","/","-","*","/","/"],
        ["*","*","*","/","/","*","*","*","*","*","*","*","*","*","-","/","*","*","*","*","*","*","*","*","*","/","-","*","*","*"],
        ["*","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","+","/","/","/","/","/","/","/","/","/","-","/","/","*"],
        ["*","-","/","/","/","/","/","/","/","/","/","/","/","/","-","/","-","/","/","/","/","/","/","/","/","/","-","/","/","*"],
        ["*","-","/","/","/","*","*","*","*","*","*","*","*","/","-","/","-","*","*","*","*","*","*","*","*","/","-","/","/","*"],
        ["*","-","/","/","/","*","/","-","-","-","-","-","*","/","-","/","-","*","/","/","/","/","/","/","*","/","-","/","/","*"],
        ["*","-","-","-","/","*","/","+","/","/","/","-","*","/","-","/","-","*","/","/","-","-","-","-","*","/","-","/","/","*"],
        ["*","*","*","-","/","*","/","-","*","-","-","-","*","/","-","-","-","*","/","/","-","*","/","-","*","/","-","*","*","*"],
        ["/","/","*","-","/","*","/","-","*","-","/","/","*","*","*","*","*","*","/","/","-","*","/","-","*","/","-","*","/","/"],
        ["/","/","*","-","/","/","/","-","*","-","/","/","/","/","/","/","/","/","/","/","-","*","/","-","/","/","-","*","/","/"],
        ["/","/","*","-","-","-","-","-","*","-","-","-","-","-","-","T","-","-","-","-","-","*","/","-","-","-","+","*","/","/"],
        ["/","/","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","/","/"],
        ["A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A"]
    ]
}