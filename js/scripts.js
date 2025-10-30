function cargar() {
    $.ajax({
        url: 'js/noticias.json',
        type: 'GET',
        dataType: 'json', 
        success: function (data) {
            let random = Math.floor(Math.random() * data.length);
            let noticia = data[random];
            let cadena = noticia.title; 
            let cadena2 = noticia.description;
            let cadena3 = noticia.pubdate;
            $("#caja").html(cadena);
            $("#caja2").html(cadena2);
            $("#caja3").html(cadena3);
            stickFooter();
        },
        error: function (xhr, status) {
            alert('Disculpe, existió un problema');
        }
    });
}




function stickFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  footer.style.position = '';
  footer.style.bottom = '';
  footer.style.left = '';
  footer.style.width = '';
  footer.style.marginTop = '';

  const windowHeight = window.innerHeight;
  const bodyHeight = document.body.scrollHeight;
  const footerHeight = footer.offsetHeight;

  if ((bodyHeight - footerHeight) < windowHeight) {
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
    footer.style.left = '0';
    footer.style.width = '100%';
  } else {
    footer.style.position = 'static';
    document.querySelector('footer').style.height = '35%';
    
  }
}


function validar() {
  const nombre = document.getElementsByName('nombre')[0];
  const apellidos = document.getElementsByName('apellidos')[0];
  const email = document.getElementsByName('email')[0];
  const phone = document.getElementsByName('Phone')[0];
  const boton = document.getElementById('boton'); 

  const patrones = {
    nombre: /^[A-Za-z]{1,15}$/,
    apellidos: /^[A-Za-z\s]{1,40}$/,
    email: /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
    phone: /^[0-9]{1,9}$/
  };

  const validNombre = patrones.nombre.test(nombre.value.trim());
  const validApellidos = patrones.apellidos.test(apellidos.value.trim());
  const validEmail = patrones.email.test(email.value.trim());
  const validPhone = patrones.phone.test(phone.value.trim());


  if (validNombre && validApellidos && validEmail && validPhone) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
}

function calcular() {
    let precio = 0
    if (document.getElementsByName('productos')[0].value == "Verdad" ) {
        precio = precio + 500
}
    else if(document.getElementsByName('productos')[0].value == "Media" ) {
        precio = precio + 1000
}
    else if(document.getElementsByName('productos')[0].value == "Cooked" ) {
        precio = precio + 2000
}
else if(document.getElementsByName('productos')[0].value == "Full" ) {
        precio = precio + 4000
        document.getElementById('Presupuestos').value = precio
}
if(document.getElementById('recti').checked == true) {
    precio = precio*1.25
}
if(document.getElementById('propie').checked == true) {
    precio = precio*2
}
if(document.getElementById('art').checked == true) {
    precio = precio*1.5
}
let descuento = (1-(document.getElementById('plazo').value*0.01))
if (descuento <= 0.70 ) {descuento = 0.70}
precio = precio*descuento
document.getElementById('Presupuestos').value = precio+"€"
}         
          
function map() {
var map = L.map('map').setView([40.443677, -3.736636], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate();

map.on('locationfound', function (e) {
  var loc = L.latLng(e.latitude, e.longitude)


L.Routing.control({     waypoints: [         L.latLng(40.443677, -3.736636),         L.latLng(loc)     ], routeWhileDragging: true }).addTo(map);
});
}
