var request = new XMLHttpRequest();


const url = 'https://api.bluelytics.com.ar/v2/latest';
const url2 = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';





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
  

  const dolarsi = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
  const data1 = await dolarsi.json();
  // console.log(data1);

  const ccl_const = Object.values(data1)[3];
  ccl_objeto = Object.values(ccl_const)[0];
  ccl_compra = Object.values(ccl_objeto)[0];
  ccl_compra = ccl_compra.replace(",", ".");
  ccl_venta = Object.values(ccl_objeto)[1];
  ccl_venta = ccl_venta.replace(",", ".");
  // console.log(ccl_compra);
  // console.log(ccl_venta);

  const mep_const = Object.values(data1)[4];
  mep_objeto = Object.values(mep_const)[0];
  mep_compra = Object.values(mep_objeto)[0];
  mep_compra = mep_compra.substring(0, mep_compra.length - 1);
  mep_compra = mep_compra.replace(",", ".");
  mep_venta = Object.values(mep_objeto)[1];
  mep_venta = mep_venta.substring(0, mep_venta.length - 1);
  mep_venta = mep_venta.replace(",", ".");
  // console.log(mep_compra);
  // console.log(mep_venta);

  const turista_const = Object.values(data1)[6];
  turista_objeto = Object.values(turista_const)[0];
  turista_compra = Object.values(turista_objeto)[1];
  turista_compra = turista_compra.replace(",", ".");
  turista_venta = Object.values(turista_objeto)[2];
  turista_venta = turista_venta.replace(",", ".");
  // console.log(turista_compra);
  // console.log(turista_venta);

  const dolar_cripto = await fetch("https://criptoya.com/api/usdt/ars");
  const data_cripto = await dolar_cripto.json();
  for (i = 0; i < Object.keys(data_cripto).length; i++) {
    const exchange = Object.keys(data_cripto)[i];
    if (exchange == 'belo') {
      var belo_v = Object.values(Object.values(data_cripto)[i])[1]
      var belo_c = Object.values(Object.values(data_cripto)[i])[3]
    }
    if (exchange == 'buenbit') {
      var buenbit_v = Object.values(Object.values(data_cripto)[i])[1]
      var buenbit_c = Object.values(Object.values(data_cripto)[i])[3]
    }
    if (exchange == 'lemoncash') {
      var lemon_v = Object.values(Object.values(data_cripto)[i])[1]
      var lemon_c = Object.values(Object.values(data_cripto)[i])[3]
    }
    if (exchange == 'letsbit') {
      var letsbit_v = Object.values(Object.values(data_cripto)[i])[1]
      var letsbit_c = Object.values(Object.values(data_cripto)[i])[3]
    }
    if (exchange == 'tiendacrypto') {
      var tienda_v = Object.values(Object.values(data_cripto)[i])[1]
      var tienda_c = Object.values(Object.values(data_cripto)[i])[3]
    }
  }  
  var cripto_compra = ((belo_c + buenbit_c + lemon_c + letsbit_c + tienda_c ) / 5).toFixed(2)
  var cripto_venta = ((belo_v + buenbit_v + lemon_v + letsbit_v + tienda_v ) / 5).toFixed(2)


  
  const mayorista = "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSVHM";
  // const mayor = await mayorista.json();
  // console.log(mayor);

  
 


  function createTable() {
    body = document.createElement('tbody');
    var oficial = '<tr><td>OFICIAL</td>\n<td>$ ' + oficial_buy + '</td><td>$ ' + oficial_sell + '</td></tr>';
    var blue = '<tr><td>PARALELO</td>\n<td>$ ' + blue_buy + '</td><td>$ ' + blue_sell + '</td></tr>';
    var ccl = '<tr><td>CCL</td>\n<td>$ ' + ccl_compra + '</td><td>$ ' + ccl_venta + '</td></tr>';
    var mep = '<tr><td>MEP</td>\n<td>$ ' + mep_compra + '</td><td>$ ' + mep_venta + '</td></tr>';
    var cripto = '<tr><td>CRIPTO</td>\n<td>$ ' + cripto_compra + '</td><td>$ ' + cripto_venta + '</td></tr>';
    var turista = '<tr><td>TURISTA</td>\n<td> - </td><td>$ ' + turista_venta + '</td></tr><br>';
    var html = document.getElementById("tbody").innerHTML + oficial + blue + ccl + mep + cripto + turista
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
    pesos.style.top = "220px";
    pesos.style.left = "40px";
    document.body.appendChild(pesos);

    var dolar = document.createElement("INPUT");
    dolar.setAttribute("type", "text");
    dolar.setAttribute("placeholder", "USD");
    dolar.setAttribute("class", 'input');
    dolar.style.position = "absolute";
    dolar.setAttribute("id", "dolar");
    dolar.style.width = "80px";
    dolar.style.top = "220px";
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
    boton.style.top = "250px";
    boton.style.left = "90px";
    boton.appendChild(t);
    document.body.appendChild(boton);
    var convertir = document.getElementById("boton");
    convertir.addEventListener("click", submit);
  }
  button();

  // var input = document.getElementById("pesos");
  // input.addEventListener("keypress", function(event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     document.getElementById("boton").click();
  //   }
  // });
  // var input = document.getElementById("dolar");
  // input.addEventListener("keypress", function(event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     document.getElementById("boton").click();
  //   }
  // });

  function resultado() {
    var oficial = document.createElement("INPUT");
    oficial.setAttribute("type", "text");
    oficial.setAttribute("placeholder", "oficial");
    oficial.setAttribute("class", 'input');
    oficial.setAttribute("id", "oficial");
    // oficial.style.display = "none";
    oficial.style.position = "absolute";
    oficial.style.width = "170px";
    oficial.style.top = "285px";
    oficial.style.left = "45px";
    document.body.appendChild(oficial);

    var blue = document.createElement("INPUT");
    blue.setAttribute("type", "text");
    blue.setAttribute("placeholder", "paralelo");
    blue.setAttribute("class", 'input');
    blue.setAttribute("id", "blue");
    // blue.style.display = "none";
    blue.style.position = "absolute";
    blue.style.width = "170px";
    blue.style.top = "315px";
    blue.style.left = "45px";
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
      a_oficial = Number.parseInt(a_oficial.toFixed(2)).toLocaleString().replace(/,/g, ".");
      a_blue = Number.parseInt(a_blue.toFixed(2)).toLocaleString().replace(/,/g, ".");
      document.getElementById('oficial').style.display = 'block';
      document.getElementById('blue').style.display = 'block';
      document.getElementById('oficial').setAttribute("value", 'USD ' + a_oficial + '   (oficial)');
      document.getElementById('blue').setAttribute("value", 'USD ' + a_blue + '   (paralelo)');
    }
    if (ars == 0 && usd != 0) {
      a_oficial = usd * oficial_avg;
      a_blue = usd * blue_avg;
      a_oficial = Number.parseInt(a_oficial.toFixed(2)).toLocaleString().replace(/,/g, ".");
      a_blue = Number.parseInt(a_blue.toFixed(2)).toLocaleString().replace(/,/g, ".");
      document.getElementById('oficial').style.display = 'block';
      document.getElementById('blue').style.display = 'block';
      document.getElementById('oficial').setAttribute("value", 'ARS ' + a_oficial + '   (oficial)');
      document.getElementById('blue').setAttribute("value", 'ARS ' + a_blue + '   (paralelo)');
    }
  }
}
dolar();




