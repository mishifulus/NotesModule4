/**
 * <div class = 'whatever'>
 * <h1> Hello world </h1>
 * </div>
 */
const body = document.body;
const person =
{
    name: 'Pepito',
    address: 'porahi'
}

//Create / insert that div into body
//low answer
const div = document.createElement('div'); //<div></div>
div.classList.add('whatever'); //<div class = 'whatever'>

const h1 = document.createElement('h1'); //<h1></h1>
h1.innerText = 'Hello world'; //<h1> Hello world </h1>

div.append(h1);

//short answer
body.innerHTML = '<div class ="whatever"><h1> Hello world </h1><h3> I am '+person.name+' and i live in '+person.address+' </h3></div>';

//short answer beautifily \n
const html1 = '<div class ="whatever">\n' +
'<h1> Hello world </h1>\n' +
'<h3> I am '+person.name+' and i live in '+person.address+' </h3>\n' +
'</div>';

//short answer more easy ``
const html2 = `<div class ="whatever"> 
<h1> Hello world </h1> 
<h3> I am ${person.name} and i live in ${person.address} </h3>
</div>`;

console.log(body);
//document.body.innerHTML = html2;

