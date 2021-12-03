/*
//Selecccion del produto
function catalogoLong(){

//crear un array
var array = ["adornos","puertas","pasamanos","ventanas","techos"]
var selectlist=document.getElementById("listacatalogo");


//abrir opciones
for(var i = 0; i < array.length; i++){
    var opcion = document.createElement("opciones");
    opcion.value = array[i];
    opcion.text = array[i];
    selectlist.appendChild(opcion);
   }
}
*/

//Mostrar la categoria
document.getElementById("catalogo").onchange=listascargadas;


function listascargadas() {
    if (document.getElementById("catalogo").value =="") {
      document.getElementById("cargando-contenido").innerHTML ="";
      return;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if(xhttp.readyState == XMLHttpRequest.DONE){
        if(xhttp.status==200){
          document.getElementById("cargando-contenido").innerHTML = xhttp.responseText;
        }
        else if(xhttp.status="400"){
          alert('Usted acaba de regresar!');
        }else{
          alert('Error 200');
        }
      }
    }
    xhttp.open("GET",contenido_texto(),true);
    xhttp.send();
  
    function contenido_texto(){
      if(document.getElementById("catalogo").value=="1"){
        return "assets/archivos/puertas.txt";
      }else if(document.getElementById("catalogo").value=="2"){
        return "assets/archivos/portones.txt";
      }else if(document.getElementById("catalogo").value=="3"){
        return "assets/archivos/ventanas.txt";
         }else if(document.getElementById("catalogo").value=="4"){
        return "assets/archivos/pasamanos.txt";
         }else if(document.getElementById("catalogo").value=="5"){
            return "assets/archivos/adornos.txt";
      }
    }
  }



  //AGREGAR A CARRITO LOS PRODUCTOS
  let productos = [];
  // Agregar productos 
function agregar(sku, nombre, precio) {
  // Crear un objeto
  producto = {
      sku: sku,
      nombre: nombre,
      precio
  };
  // Agregar producto a lista
  productos.push(producto);
  // Crear la tabla
  let html=""
  for (var i = 0; i < productos.length; i++) {
      html += "<hr>"
      html += "<div class='row g-3' id='row'>"
      html += "<div class='col' id='imagenesR'>"
      html += "<img src="+"'"+productos[i].sku+"'"+">"
      
      //html += "<p>"+productos[i].sku+"</p>"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+productos[i].nombre+"</p>"
      html += "</div>"
      html += "<div class='col'>"
      html += "<p>"+productos[i].precio+"</p>"
      html += "</div>"
      html += "</div>"
  }

  // Mostrar la tabla en html
  var mi_contenedor = document.getElementById("Agregar_carrito");
  mi_contenedor.innerHTML = html;
}

