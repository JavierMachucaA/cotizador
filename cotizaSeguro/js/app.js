//Configurations
const max = new Date().getFullYear();
const min = max-20;
const anio = document.getElementById('anio');

for(let i = max ; i >= min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    anio.appendChild(option);
}

//Interfaz
function Interfaz(){}

//Prototypes
//prototype Interzar mostrar error;
Interfaz.prototype.mostrarError = function (msj){
    const div = document.createElement('div');

    div.classList.add('mensaje','error');
    div.innerHTML = msj;
    cotizador.insertBefore (div, document.querySelector ('.form-group'));
    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    },3000);
}
Seguro.prototype.cotizarSeguro = function () {
    console.log(this.marca,this.anio,this.tipo);
}

//EventListeners
const cotizador = document.getElementById('cotizar-seguro');

cotizador.addEventListener('submit',function(e){
    e.preventDefault();
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // console.log(`${marcaSeleccionada}`);

    const anio =  document.getElementById('anio');
    const anioSelected =  anio.options[anio.selectedIndex].value;

    //console.log(`${anioSelected}`);

    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    //console.log(`${tipo}`);

    const interfaz =  new Interfaz();

    //Revisar campos
    if(marcaSeleccionada === '' || anioSelected === '' || tipo === ''){
        let error = 'Faltan datos por ingresar, revisar el formulario y reintentar.';
        interfaz.mostrarError(error);
        
    }else{
        console.log('Datos completos');
        // Operacion seguro
        const seguro = new Seguro(marcaSeleccionada,anioSelected,tipo);
        
        const valor = seguro.cotizarSeguro();

    }
});

//Cotizador 
function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio  = anio;
    this.tipo  = tipo;
}



