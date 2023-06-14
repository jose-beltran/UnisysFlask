const selectPlantilla = document.getElementById('selectPlantilla');
const textPlantilla = document.getElementById('textPlantilla');
const selectPlantilla2 = document.getElementById('selectPlantilla2');
const codigoPlantilla = document.getElementById('codigoPlantilla');
const codigoPlantilla2 = document.getElementById('codigoPlantilla2');
const botonCopiar = document.getElementById('copy');
const botonEliminar = document.getElementById('undo')

function cambiarPlantilla() { //Funcion que añade texto segun el primer select seleccionado
    switch (selectPlantilla.value) {
        case "golf":
            textPlantilla.value = "Incidencia: El Colaborador indica que \nError: \n \n1. Nombre de la persona contacto: \n2. Teléfono y Celular del contacto: \n3. Código de Oficina para Sucursal: \n4. Datos de la persona que presenta el problema: \nNombre completo: \nUsuario de red: \nCódigo del usuario de GOLF SiFBranch: \nNombre de la estación de trabajo: \n5. Descripción del proceso que realiza, incluyendo el código rápido y nombre de la transacción: \n6. ¿Es el único afectado o hay más personas con la misma situación? ¿Cuántos?:";
            break;
        case "qflow":
            textPlantilla.value = "1. Versión del Sistema Q-Flow: (5.7 <https://gestionfilas.bancolombia.corp/QFlow> o 6.2 <https://gestionfilas.apps.bancolombia.corp/QFlow>): \n2.Código y Nombre de la Sucursal: \n3.Nombre de la persona contacto: \n4.Fecha y hora de la afectación: \n5.Dispositivo Afectado: \n6.Serial del MPC: \n8.Descripción clara y detallada de la situación: \n9.Teléfonos de contacto: \n10.Dirección: \n11.Número y tipo de identificación del cliente: \n12.Cantidad de usuarios afectados: \n13.Validar si los demás aplicativos como Golf, Intranet funcionan correctamente: \n14.Verificar que el colaborador no presente bloqueos en DA:\n15. Recurrencia con la que se presenta el incidente ¿Es nuevo o repetitivo?: \n16. Donde se presenta la afectación: (Piso) : Tipo de Servicio: (Caja, asesoría o ambas)";
            break;
        case "win":
            textPlantilla.value = "Incidente: El colaborador informa que tiene lentitud en el equipo. \n• Error: Lentitud \n• Nombre del equipo:  \n• Aplicación mayor Consumo: ";
            break;
        case "usm":
            textPlantilla.value = "Selecciona la plantilla de USM que desea usar";
            break;
        case "as400":
            textPlantilla.value = "Incidente: El colaborador indica que no puede iniciar sesión en As/400. XXXX\n\nError:El usuario XXXXX ha alcanzado el límite de sesiones de dispositivo.\nUsuario Afectado: XXXXXXX\nRazón por la cual el director de servicio no realizó el desbloqueo: XXXXXXXXXXXXXXXXXX";
            break;
        case "hclient":
            textPlantilla.value = "Incidente: Colaborador indica que se le genera un error al interactuar con Biometria.\n\nError: Error inesperado, por favor contacte a la mesa de ayuda \nEquipo: \nContacto:";
            break;
        case "wiw":
            textPlantilla.value = "Incidente: Colaborador indica que requiere configurar Scanback para digitalizar documentos.\nError: N/A\n\nEquipo:";
            break;
        case "mult":
            textPlantilla.value = "Selecciona que plantilla de multifuncional que vayas a usar"
            break;
        case "nets":
            textPlantilla.value = "Incidente: El colaborador informa que XXXX\n\nNombre del afectado:\nUsuario de red: \nNombre de la empresa y área (si aplica):\nTeléfono/Celular:\nGrupo VPN del usuario:\nIP del usuario: (debe estar en los rangos 10.18.X.X. o 10.38.X.X)\nLista de aplicaciones que presentan falla por VPN:\nIPs destino y puertos que presentan falla por VPN:\nDescripción de la falla:\nNumero de pedido USM con el cual solicitaron los permisos (si lo tiene):\nImagen del error.\nRegistro de conexión (logs).";
            break;
        case "office":
            textPlantilla.value = "Seleecione la plantilla de Office que desea usuar";
            break;
        case "noEntregado":
            textPlantilla.value = "Nombre del aplicativo:\nQué hace usted con el aplicativo:\nError que se está presentando:\nPaso a paso de lo que se hace: (desde que ingresa hasta el error, Anexar pantallazos de error)\nEl error es nuevo o reiterativo.\nCuantos usuarios afecta:\nContacto en tecnología, (si conoce algún analista que le haya soportado el inconveniente o error)\n¿Pertenece a una EVC (Equipo de Valor continuo) o Fullstack? En caso afirmativo ¿cuál?\nEquipo: \nContacto:";
            break;
        case "validadora":
            textPlantilla.value = "Incidente: El colaborador indicia que la Validadora no está imprimiendo.\nError: Validadora no imprime.\nNombre de Equipo: XXXX\nContacto: ";
            break;
        default:
            textPlantilla.value = "Incidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: \n• Contacto: " ;
            break;
    }
}

function cambiarTexto() { //Funcion que cambia segundo select en funcion del primer select
    switch (selectPlantilla2.value) {
        case "usm":
            textPlantilla.value = "Selecciona la plantilla USM";
        case "consultaUsm":
            textPlantilla.value = "Incidente: El colaborador necesita consultar la solicitud de Pedido.\n\nError: N/A\nEquipo: (documentar el nombre del equipo en caso de tomar control remoto)\nID del Pedido consultado:";
            break;
        case "crearUsm":
            textPlantilla.value = "Incidente: El colaborador requiere conocer la ruta para solicitar permisos para XXXX\n\nError: N/A\nEquipo: (documentar el nombre del equipo en caso de tomar control remoto)\nContacto:\n\n***Recuerda Direccionar al Colaborador al Sitio ¿Y como lo hago? para conocer el flujo por el que debe radicar su pedido***";
            break;
        case "otroUsm":
            textPlantilla.value = "Incidente: El colaborador requiere asesoría en radicar un pedido para XXXXXXX\n\nError: N/A\nEquipo: (documentar el nombre del equipo en caso de tomar control remoto)\nRuta del pedido suministrada: \nContacto:";
            break;
        case "fallaUsm":
            textPlantilla.value = "Incidente: El colaborador reporta fallas con USM, indica que XXXX\n\nError: Documentar el error presentado.\nEquipo:\nContacto:";
            break;
        case "rutasUsm":
            textPlantilla.value = "Incidente: El colaborador requiere conocer la ruta para solicitar permisos para acceder a Rutas Compartidas\n\nError: N/A \n\nRuta Compartida: \n\n*** Es importante documentar la ruta completa a la que el colaborador requiere acceso ***\n***Recuerda Direccionar al Colaborador al Sitio ¿Y como lo hago? para conocer el flujo por el que debe radicar su pedido***";
            break;
        case "basicos":
            textPlantilla.value = "Incidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: \n• Contacto: ";
            break;
        case "sitio":
            textPlantilla.value = "• Código y/o Nombre de Edificio o Sucursal: \n• Horario de atención: \n• Ciudad: \n• Dirección: \n✆ Teléfono y/o Celular: \n\nIncidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: ";
            break;
        case "winLentitud":
            textPlantilla.value = "Incidente: El colaborador informa que tiene lentitud en el equipo.\n\nError: Lentitud\nNombre del equipo:\nAplicación mayor Consumo:\n\nCR: \nLAPS:\nContacto:\n\n**** Consulta el Administrador de Tareas y Documenta la Aplicación que está generando el mayor consumo.";
            break;
        case "winDisco":
            textPlantilla.value = "Incidente: El colaborador informa que tiene el disco lleno en el equipo.\n\nError: Disco lleno\nNombre del equipo:\n\nCR: \nLAPS:\nContacto: ";
            break;
        case "nuevoLotus":
            textPlantilla.value = "Incidente: El colaborador informa que no puede acceder a Lotus Notes ya que no está tomando la contraseña que digita.\n\nError: Contraseña incorrecta (Asegúrese que utiliza las mayúsculas y minúsculas correctamente).\n\n• Usuario de Lotus: • Correo: XXXX@bancolombia.com.co\n• Contacto:";
            break;
        case "configLotus":
            textPlantilla.value = "Incidente: El colaborador informa que requiere configurar el archivo ID para lograr acceder a Lotus.\n\nError: N/A\nEquipo:\Contacto:";
            break;
        case "multAtasco":
            textPlantilla.value = "Incidente: El colaborador informa que presenta inconvenientes con la multifuncional, las impresiones se están atascando en XXXX.\nIP de la multifuncional:\n\n***Recuerda Direccionar al Colaborador al Sitio ¿Y como lo hago? para conocer el procedimiento que debe seguir***";
            break;
        case "multConfig":
            textPlantilla.value = "Incidencia: El colaborador indica que requiere configuración de la multifuncional en su máquina ya que no la tiene.\nError: No tiene la impresora configurada\nEquipo:\nIP de la multifuncional:\nContacto:\n\n***Recuerda Direccionar al Colaborador al Sitio ¿Y como lo hago? para conocer el procedimiento que debe seguir***";
            break;
        case "multDano":
            textPlantilla.value = "Incidente: El colaborador informa que presenta inconvenientes con la Multifuncional, esta presenta fallas de XXXX\nError: Documentar el Código y Nombre de error que aparece en la página.\n\n• ¿Cuál es su dificultad al imprimir?\n• ¿Qué estaba intentando imprimir?\n• ¿Qué tipo de papel utilizo?\n• ¿Qué tamaño de papel utilizo?\n• ¿Qué bandeja utilizo para imprimir?\n• ¿Verifique si la sucursal tiene red?\n• ¿Cuál es la IP de la impresora?\n• Validar la IP de la impresora en un Internet Explorer Banco digitar http://IP de la impresora\n• Se debe registrar el serial de la impresora en el USD.\n• Siempre se debe verificar que el colaborador tenga configurada la impresión a doble cara, de no estar de esta manera la debemos activar y documentarlo en el incidente.\n\n• Código y nombre de la sucursal:\n• Ciudad: • Piso: \n• Puesto: \n• Horario de atención: \n• Teléfono: \n• Celular: \n• Nombre completo de un funcionario de la oficina:";
            break;
        case "multToner":
            textPlantilla.value = "Incidente: El colaborador informa que presenta inconvenientes con la multifuncional, no imprime y/o genera una alerta de tóner.\nError: Documentar el Código y Nombre de error que aparece en la página.\n\n• ¿Cuál es su dificultad al imprimir?\n• ¿Qué estaba intentando imprimir?\n• ¿Qué tipo de papel utilizo?\n• ¿Qué tamaño de papel utilizo?\n• ¿Qué bandeja utilizo para imprimir?\n• ¿Verifique si la sucursal tiene red?\n• ¿Cuál es la IP de la impresora?\n• Validar la IP de la impresora en un Internet Explorer Banco digitar http://IP de la impresora\n• Se debe registrar el serial de la impresora en el USD.\n• Siempre se debe verificar que el colaborador tenga configurada la impresión a doble cara, de no estar de esta manera la debemos activar y documentarlo en el incidente.\n\n• Código y nombre de la sucursal:\n• Ciudad: • Piso: \n• Puesto: \n• Horario de atención: \n• Teléfono: \n• Celular: \n• Nombre completo de un funcionario de la oficina:";
            break;
        case "fallaOffice":
            textPlantilla.value = "Incidente: El colaborador informa que presenta inconvenientes con su Correo, ya que XXXX\nError: Documentar el error generado.\nEquipo:\nContacto:";
            break;
        case "conectaOffice":
            textPlantilla.value = "Incidente: El colaborador informa que presenta problemas de conexión con su Correo.\nError: No conecta.\nEquipo:\nContacto:";
            break;
        case "outlookAsesoria":
            textPlantilla.value = "Incidente: El colaborador se comunica solicitando asesoría para XXXX\nError: N/A\n\n***Recuerda Direccionar al Colaborador al Sitio ¿Y como lo hago? para conocer el procedimiento que debe seguir***";
            break;
    }
}

function cambiarPlantilla2() {
    switch (selectPlantilla.value) {
        case "usm":
            selectPlantilla2.innerHTML = '<option value="usm">Seleccione</option><option value="consultaUsm">Consulta pedido</option><option value="crearUsm">Creación pedido portafolio</option><option value="otroUsm">Otra ruta UMS</option><option value="fallaUsm">Falla USM</option><option value=rutasUsm>Rutas Compartidas</option>';
            break;
        case "win":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="winDisco">Disco lleno</option><option value="winLentitud">Lentitud</option>';
            break;
        case "datos":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="basicos">Datos basicos</option><option value="sitio">Datos sitio</option>';
            break;
        case "lotus":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="nuevoLotus">Nuevo ID</option><option value="configLotus">Configuración</option>';
            break;
        case "mult":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="multAtasco">Atasco</option><option value="multConfig">Configurar impresora</option><option value="multDano">Daño físico</option><option value="multToner">Toner agotado</option>';
            break;
        case "office":
            selectPlantilla2.innerHTML = '<option value="">Seleccione</option><option value="fallaOffice">Correo falla</option><option value="conectaOffice">Correo no conecta</option><option value="outlookAsesoria">Outlook asesoria</option>'
            break;
        default:
            selectPlantilla2.innerHTML = '<option value="default">--Vacio--</option>';
    }
}

function mostrarCodigo() {
    switch (selectPlantilla.value) {
        case "golf":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es TI_Wolf_General';
            break;
        case "hclient":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_HCLIENT_Error inesperado"';
            break;
        case "nets":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Netscaler_General"';
            break;
        case "noEntregado":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Producto no Entregado"';
            break;
        case "qflow":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Qflow_General"';
            break;
        case "validadora":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Validadora_No imprime"';
            break;
        case "wiw":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Who is Who_Config. Scanback"';
            break;
        case "as400":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_As400_Mas de un dispositivo';
            break;
        default:
            codigoPlantilla.innerText = '';
    }
}

function mostrarCodigo2() {
    switch (selectPlantilla2.value) {
        case "consultaUsm":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_USM_Consultar Pedido"';
            break;
        case "crearUsm":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_USM_Crear Pedido Portafolio"';
            break;
        case "otroUsm":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_USM_Crear Otros Pedidos"';
            break;
        case "fallaUsm":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_USM_Falla"';
            break;
        case "rutaUsm":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_USM_Rutas Compartidas"';
            break;
        case "winDisco":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es TI_Windows_Lentitud';
            break;
        case "winLentitud":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es TI_Windows_Lentitud';
            break;
        case "nuevoLotus":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_BD Lotus_Nuevo ID"';
            break;
        case "configLotus":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_BD Lotus_Configuración ID"';
            break;
        case "multAtasco":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Multi_Atasco"';
            break;
        case "multConfig":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Multi_Configurar impresora"';
            break;
        case "multDano":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Multi_Daño Físico"';
            break;
        case "multToner":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Multi_Toner Agotado"';
            break;
        case "fallaOffice":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Office365.Correo_Falla"';
            break;
        case "conectaOffice":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Office365.Correo_No conecta"';
            break;
        case "outlookAsesoria":
            codigoPlantilla.innerText = 'La plantilla dentro de USD es "TI_Outlook_Asesoria"';
            break;
        default:
            codigoPlantilla.innerText = '';
    }
}

function guardarYBorrarTexto() {
    textPlantilla.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

let contadorCopias = 1;
function guardarContenido() { //Funcion que muestra el incidente copiado 
    textPlantilla.select();
    document.execCommand('copy');
    const copiarPlantilla = document.querySelector('#textPlantilla');
    const contenido = copiarPlantilla.value;
    var ahora = new Date();

    const contenedor = document.createElement('div')
    contenedor.id = 'copiado-' + contadorCopias;
    document.querySelector('#contenedor').appendChild(contenedor);

    // Borrar el contenido del textarea
    document.getElementById('textPlantilla').value = "";

    // Restaurar el texto predeterminado
    textPlantilla.value = 'Incidente: Colaborador/a informa que \n• Error: \n• Usuario de red: \n• Equipo: \n• Contacto: ';
    selectPlantilla.value = default;

    // Obtener las horas y minutos de la hora actual
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();

    // Convertir las horas a formato de 12 horas
    var horas12 = horas % 12;
    if (horas12 === 0) {
        horas12 = 12;
    }

    // Obtener la cadena AM o PM
    var amOpm = horas < 12 ? "AM" : "PM";

    // Formatear la hora en formato HH:mm AM/PM
    var horaFormateada = horas12 + ":" + minutos.toLocaleString('en-US', { minimumIntegerDigits: 2 }) + " " + amOpm;

    // Obtener la referencia de la tabla
    var tabla = document.getElementById('miTabla');

    // Crear una nueva fila en la tabla
    var fila = tabla.insertRow();

    // Insertar las celdas con el contenido del textarea en la nueva fila
    var celda1 = fila.insertCell();
    var celda2 = fila.insertCell();
    celda1.innerHTML = horaFormateada; // Puedes reemplazar con el valor deseado
    celda2.innerHTML = contenido;

    contadorCopias++;

    var tabla = document.getElementById("contenedor");
    tabla.style.display="block";
}

selectPlantilla.addEventListener('change', cambiarPlantilla);
selectPlantilla.addEventListener('change', cambiarPlantilla2);
selectPlantilla2.addEventListener('change', cambiarTexto);
selectPlantilla.addEventListener('change', mostrarCodigo);
selectPlantilla2.addEventListener('change', mostrarCodigo2);
