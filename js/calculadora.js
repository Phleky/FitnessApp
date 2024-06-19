// script.js
function mostrarDatos() {
    // Obtener los valores de los inputs
    const sexo = document.getElementById('sexo').value;
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const actividad=document.getElementById('actividad').value

    // Validar que los campos no estén vacíos y sean números positivos

    if (edad > 0 && altura > 0 && peso > 0) {
        let calorias
        if (sexo === 'masculino') {
             calorias = (10*peso)+(6.5*altura)-(5*edad)+5
        } else if (sexo === 'femenino') {
             calorias = (10*peso)+(6.5*altura)-(5*edad)-161
        }
        if(actividad =='Sedentario'){
            calorias=calorias*1.2;
         }if(actividad=='Poca'){
            calorias*=1.376;
         }if(actividad=='Moderada'){
            calorias*=1.55;
         }if(actividad=='Intensa'){
            calorias*=1.725;
         }if(actividad=='Atletas'){
            calorias*=1.9;
         }else{}
         
        // Crear el mensaje con los datos introducidos
        const mensaje = `Edad: ${edad} años<br>Altura: ${altura} cm
            <br>Peso: ${peso} kg <br> 
                Calorias: ${calorias.toFixed(2)} `;

        // Mostrar el mensaje en la página
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = mensaje;

        const div = document.getElementById('resultado');
         div.style.display="block"
    } else {
        alert('Por favor, ingresa valores válidos.');
    } 
}
//  function calorias_hombres(peso, altura, edad){
//     let calorias = (10*peso)+(6.5*altura)-(5*edad)+5
//      return calorias
//  }

// function calorias_mujer(peso, altura, edad){
//     let calorias = (10*peso)+(6.5*altura)-(5*edad)-161
//     return calorias
// }


// if(actividad==='atleta'){
//     calorias*=1.9;
//  }



// if(sexo=='masculino'){
//     if (edad > 0 && altura > 0 && peso > 0) {
//         let calorias = (10*peso)+(6.5*altura)-(5*edad)+5
//         // Crear el mensaje con los datos introducidos
//         const mensaje = `Edad: ${edad} años<br>Altura: ${altura} cm<br>Peso: ${peso} kg <br> Calorias: ${calorias}`;
        
//         // Mostrar el mensaje en la página
//         const resultadoDiv = document.getElementById('resultado');
//         resultadoDiv.innerHTML = mensaje;
//     } else {
//         alert('Por favor, ingresa valores válidos.');
//     }
// }if (sexo=='femenino') {
//     if (edad > 0 && altura > 0 && peso > 0) {
//         let calorias = (10*peso)+(6.5*altura)-(5*edad)-161
//         // Crear el mensaje con los datos introducidos
//         const mensaje = `Edad: ${edad} años<br>Altura: ${altura} cm<br>Peso: ${peso} kg <br> Calorias: ${calorias}`;
        
//         // Mostrar el mensaje en la página
//         const resultadoDiv = document.getElementById('resultado');
//         resultadoDiv.innerHTML = mensaje;


// if(actividad =='sedentario'){
//     calorias*=1.2;
//  }if(actividad=='poca actividad'){
//     calorias*=1.376;
//  }if(actividad=='moderada'){
//     calorias*=1.55;
//  }if(actividad=='alta'){
//     calorias*=1.725;
//  }if(actividad=='atleta'){
//     calorias*=1.9;
//  }else{}




// if (sexo === 'femenino') {
//     calorias = (9.6*peso)+(1.8*altura)-(4.7*edad)+65
    
// } else if (sexo === 'masculino') {
//     calorias = (13.7*peso)+(5*altura)-(6.8*edad)+66
   
// }