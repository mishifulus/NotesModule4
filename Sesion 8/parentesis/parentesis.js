/**
 * IMPLEMENTAR UNA FUNCION QUE DADO UNA SERIE DE PARENTESIS
 * INDIQUE EL NUMERO DE PARENTESIS QUE FALTAN PARA CERRAR LA SECUENCIA
 * 
 * (()( = 2 (())()
 * ))(  = 3 (())()
 * ()()(()) = 0
 * 
 */

 exports.parentesis = function parentesis(sequence) {
    return sequence
      .split('')
      .reduce((stack, parenthesis) => 
        parenthesis === "(" ? [...stack, "("] :
          stack[stack.length-1] === "(" ? stack.slice(0, -1) :
            [...stack, ")"] , [])
      .length;
  }

