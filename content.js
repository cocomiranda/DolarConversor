var request = new XMLHttpRequest()


const url = 'https://api.bluelytics.com.ar/v2/latest'
//const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=200&currency=USD'
async function dolar() {
	const response = await fetch(url);
	const data = await response.json();
	const oficial = Object.values(data)[0];
  const blue = Object.values(data)[1];

  const lista_oficial = [];
  const lista_blue = [];
  const lista_cambio = [];

  oficial_avg = Object.values(oficial)[0];
  oficial_sell = Object.values(oficial)[1];
  oficial_buy = Object.values(oficial)[2];
  blue_avg = Object.values(blue)[0];
  blue_sell = Object.values(blue)[1];
  blue_buy = Object.values(blue)[2];

  //console.log(oficial_avg);
  //console.log(oficial_sell);
  //console.log(oficial_buy);
  //console.log(blue_avg);
  //console.log(blue_sell);
  //console.log(blue_buy);

  function createTable() {
    body = document.createElement('tbody');
    var oficial = '<tr><td>Oficial</td>\n<td>' + oficial_buy + '</td><td>' + oficial_sell + '</td></tr>';
    var blue = '<tr><td>Paralelo</td>\n<td>' + blue_buy + '</td><td>' + blue_sell + '</td></tr><br>';
    var html = document.getElementById("tbody").innerHTML + oficial + blue;
      document.getElementById("tbody").innerHTML = html;
  }
  createTable();

  function input() {
    var pesos = document.createElement("INPUT");
    pesos.setAttribute("type", "text");
    pesos.setAttribute("placeholder", "ARS");
    pesos.setAttribute("class", 'input');
    pesos.setAttribute("id", "pesos");
    pesos.style.position = "absolute";
    pesos.style.width = "80px";
    pesos.style.top = "110px";
    pesos.style.left = "40px";
    document.body.appendChild(pesos);

    var dolar = document.createElement("INPUT");
    dolar.setAttribute("type", "text");
    dolar.setAttribute("placeholder", "USD");
    dolar.setAttribute("class", 'input');
    dolar.style.position = "absolute";
    dolar.setAttribute("id", "dolar");
    dolar.style.width = "80px";
    dolar.style.top = "110px";
    dolar.style.left = "140px";
    document.body.appendChild(dolar);
  }
  input();

  function button() {
    var boton = document.createElement("BUTTON");
    var t = document.createTextNode("Convertir");
    boton.setAttribute("class", 'boton');
    boton.setAttribute("id", 'boton');
    boton.style.position = "absolute";
    boton.style.top = "150px";
    boton.style.left = "90px";
    boton.appendChild(t);
    document.body.appendChild(boton);
    var convertir = document.getElementById("boton");
    convertir.addEventListener("click", submit);
  }
  button();

  function resultado() {
    var oficial = document.createElement("INPUT");
    oficial.setAttribute("type", "text");
    oficial.setAttribute("placeholder", "oficial");
    oficial.setAttribute("class", 'input');
    oficial.setAttribute("id", "oficial");
    oficial.style.display = "none";
    oficial.style.position = "absolute";
    oficial.style.width = "150px";
    oficial.style.top = "185px";
    oficial.style.left = "50px";
    document.body.appendChild(oficial);

    var blue = document.createElement("INPUT");
    blue.setAttribute("type", "text");
    blue.setAttribute("placeholder", "blue");
    blue.setAttribute("class", 'input');
    blue.setAttribute("id", "blue");
    blue.style.display = "none";
    blue.style.position = "absolute";
    blue.style.width = "150px";
    blue.style.top = "215px";
    blue.style.left = "50px";
    document.body.appendChild(blue);
  }
  resultado();

  function submit() 
  {
    const ars = document.getElementById("pesos").value;
    const usd = document.getElementById("dolar").value;
    if (ars == 0 && usd == 0) {
      document.getElementById('oficial').style.display = 'none';
      document.getElementById('blue').style.display = 'none';
      alert('Ingrese una moneda a convertir');
    }
    if (ars != 0 && usd != 0) {
      document.getElementById('oficial').style.display = 'none';
      document.getElementById('blue').style.display = 'none';
      alert('Ingrese una sola moneda a convertir');
    }
    if (ars != 0 && usd == 0) {
      a_oficial = ars / oficial_avg;
      a_blue = ars / blue_avg;
      a_oficial = a_oficial.toFixed(2);
      a_blue = a_blue.toFixed(2);
      document.getElementById('oficial').style.display = 'block';
      document.getElementById('blue').style.display = 'block';
      document.getElementById('oficial').setAttribute("value", 'USD ' + a_oficial + ' Oficial');
      document.getElementById('blue').setAttribute("value", 'USD ' + a_blue + ' Paralelo');
    }
    if (ars == 0 && usd != 0) {
      a_oficial = usd * oficial_avg;
      a_blue = usd * blue_avg;
      document.getElementById('oficial').style.display = 'block';
      document.getElementById('blue').style.display = 'block';
      document.getElementById('oficial').setAttribute("value", 'ARS ' + a_oficial + ' Oficial');
      document.getElementById('blue').setAttribute("value", 'ARS ' + a_blue + ' Paralelo');
    }
  }
}
dolar();




