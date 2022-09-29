/**
 * Si un alumno reprueba tendrá que estudiar mejor para el 
 * próximo curso, si aprueba estará feliz. 
 * De cualquier manera, apruebe o no, se debe inscribirse 
 * al siguiente curso.
 */

const calificacion = (alumnoReprueba) => 
    {return new Promise((resolve, reject) => 
        {setTimeout (() => {
            if(!alumnoReprueba)
            {
                resolve(2);
            }
            else
            {
                reject(new Error("Tendre que estudiar mejor:("));
            }
        }, 2000);
    });
};

/**
 * Resolve y reject son funciones callback. 
 * Al retornar una promesa tenemos acceso a 
 * los métodos then, catch y finally.
 */

//Si la promesa es falsa
calificacion(false)
  .then((result) => {
    console.log("Estoy feliz por aprobar:D");   
  })
  .catch((error) => {
    console.log(error); 
  })
  .finally(() => {
    console.log("Me voy a inscribir al siguiente curso");
  });

//Si la promesa es verdadera
calificacion(true)
  .then((result) => {
    console.log("Estoy feliz por aprobar:D");  
  })
  .catch((error) => {
    console.log(error); 
  })
  .finally(() => {
    console.log("Me voy a inscribir al siguiente curso");
  });


/**
 * Si un niño se porta bien su mamá le dará un dulce y 
 * si se porta mal no le dará nada, de cualquier forma 
 * deben ir al médico.
 */

 const comportamiento = (ninoMal) => 
 {return new Promise((resolve, reject) => 
     {setTimeout (() => {
         if(!ninoMal)
         {
             resolve(2);
         }
         else
         {
             reject(new Error("No me daran dulce :c"));
         }
     }, 2000);
 });
};

//Si la promesa es falsa
comportamiento(false)
  .then((result) => {
    console.log("Si me daran dulce :D");   
  })
  .catch((error) => {
    console.log(error); 
  })
  .finally(() => {
    console.log("Me llevaran al medico :c");
  });

//Si la promesa es verdadera
comportamiento(true)
  .then((result) => {
    console.log("Si me daran dulce :D");  
  })
  .catch((error) => {
    console.log(error); 
  })
  .finally(() => {
    console.log("Me llevaran al medico :c");
  });
