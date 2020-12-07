//var botones = document.getElementsByClassName("boton");
//var opt;
var canv = document.getElementById("triangulos");
var canvl = canv.getContext("2d");
console.log(navigator);
console.log(window);
console.log(console);
console.log(document);
console.log(canvl);

var punto_a = [];
var punto_b = [];
var punto_c = [];
for(let i = 0; i < 10; i++){
dibujarLinea(0, 0 , 300, 0);
dibujarLinea(0, 0, 0, 300);
dibujarLinea(300, 300, 300, 0);
dibujarLinea(300, 300, 0, 300);
}


    punto_a[0] = coordenadasTriangulo(299, 1);
    punto_a[1] = coordenadasTriangulo(299, 1);
    punto_b[0] = coordenadasTriangulo(299, 1);
    punto_b[1] = coordenadasTriangulo(299, 1);
    punto_c[0] = coordenadasTriangulo(299, 1);
    punto_c[1] = coordenadasTriangulo(299, 1);
    dibujarLinea(punto_a[0], punto_a[1], punto_b[0], punto_b[1], "blue");
    dibujarLinea(punto_b[0], punto_b[1], punto_c[0], punto_c[1], "green");
    dibujarLinea(punto_c[0], punto_c[1], punto_a[0], punto_a[1], "red");

    var lado_a = Math.round( Math.hypot(punto_b[0] - punto_a[0], punto_b[1] - punto_a[1]));
    var lado_b = Math.round(Math.hypot(punto_c[0] - punto_b[0], punto_c[1] - punto_b[1]));
    var lado_c = Math.round(Math.hypot(punto_a[0] - punto_c[0], punto_a[1] - punto_c[1]));

    var h = Math.round(alturaTriangulo());
    var area = Math.round((lado_a * h) / 2);

    if(lado_a == lado_b && lado_b == lado_c && lado_c == lado_a)
    {
        var tipo = "equilatero";
    }
    else if(lado_a == lado_b || lado_a == lado_c|| lado_c == lado_b)
    {
        tipo = "isóceles";
    }
    else
    {
        tipo = "escaleno";
    }
    var triangulos = new Triangulo(lado_b, lado_c, lado_a, h, area, tipo);
    console.log(triangulos);

function dibujarLinea(x1, y1, x2, y2, color)
{
canvl.beginPath();
canvl.strokeStyle = color;
canvl.moveTo(x1, y1);
canvl.lineTo(x2, y2);
canvl.stroke();
canvl.closePath;
}

function coordenadasTriangulo(max , min)
{
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

/*function opcion()
{
 switch(this.Id)
 {
    case "otroTriangulo":

 }
}*/

function alturaTriangulo()
{
let p = lado_a + lado_b + lado_c;
let s = p / 2;

return (2 / lado_a) * Math.sqrt(s * (s - lado_a) * (s - lado_b) * (s - lado_c))
}

function Triangulo(lado_b, lado_c, base, altura, area, tipo)
{
    this.base = base;
    this.lado_b = lado_b;
    this.lado_c = lado_c;
    this.altura = altura;
    this.area = area;
    this.tipo = tipo;
}