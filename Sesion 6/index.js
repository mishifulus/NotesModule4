//import { sum, subs } from "/calculator.js"; //para importar por funciones
import * as calculator from "./calculator.js"; //Para importar todo el documento

console.log(calculator.sum); //quitar los parametros
console.log(calculator.subs);

//npm set strict-ssl=false
//npm install --save-dev webpack
//Instalamos webapck para que el navegador lea los imports
//package.json -> Descripcion del codigo y un historial de lo que se necesita
//si no se genera, se debe poner npm init -y
//package-lock.js es la version del webpack

//configuramos el webpack.config.js
//configuramos el package.json
//npm run build
