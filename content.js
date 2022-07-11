var request = new XMLHttpRequest();



//////////////////////// INFO DOLAR Y CONVERSOR ////////////////////////
async function dolar() {
  const url = 'https://api.bluelytics.com.ar/v2/latest';
  const url2 = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales';
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


  function createTable() {
    body = document.createElement('tbody');
    var oficial = '<tr><td style="column-width: 100px;">OFICIAL</td>\n<td style="column-width: 110px;">' + oficial_buy + '</td><td style="column-width: 110px;">' + oficial_sell + '</td></tr>';
    var blue = '<tr><td style="column-width: 100px;">PARALELO</td>\n<td style="column-width: 110px;">' + blue_buy + '</td><td style="column-width: 110px;">' + blue_sell + '</td></tr>';
    var ccl = '<tr><td style="column-width: 100px;">CCL</td>\n<td style="column-width: 110px;">' + ccl_compra + '</td><td style="column-width: 110px;">' + ccl_venta + '</td></tr>';
    var mep = '<tr><td style="column-width: 100px;">MEP</td>\n<td style="column-width: 110px;">' + mep_compra + '</td><td style="column-width: 110px;">' + mep_venta + '</td></tr>';
    var turista = '<tr><td style="column-width: 100px;">TURISTA</td>\n<td style="column-width: 110px;">' + turista_compra + '</td><td style="column-width: 110px;">' + turista_venta + '</td></tr><br>';
    var html = document.getElementById("dolar_table").innerHTML + oficial + blue + ccl + mep + turista;
      document.getElementById("dolar_table").innerHTML = html;
  }
  createTable();


  function input() {
    var pesos = document.getElementById('pesos_input');
    pesos.setAttribute("type", "text");
    pesos.setAttribute("placeholder", "ARS");
    pesos.setAttribute("class", 'input');
    pesos.style.position = "absolute";
    pesos.style.width = "80px";
    pesos.style.top = "430px";
    pesos.style.left = "100px";

    var dolar = document.getElementById('dolar_input');
    dolar.setAttribute("type", "text");
    dolar.setAttribute("placeholder", "USD");
    dolar.setAttribute("class", 'input');
    dolar.style.position = "absolute";
    dolar.style.width = "80px";
    dolar.style.top = "430px";
    dolar.style.left = "200px";
  }
  input();

  function button() {
    // var boton = document.createElement("BUTTON");
    // var t = document.createTextNode("Convertir");
    var boton = document.getElementById('enter_boton');
    boton.setAttribute("class", 'boton');
    boton.style.position = "absolute";
    boton.style.top = "465px";
    boton.style.left = "150px";
    // boton.appendChild(t);
    // document.body.appendChild(boton);
    var convertir = document.getElementById("enter_boton");
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
    oficial.style.top = "400px";
    oficial.style.left = "110px";
    document.body.appendChild(oficial);

    var blue = document.createElement("INPUT");
    blue.setAttribute("type", "text");
    blue.setAttribute("placeholder", "blue");
    blue.setAttribute("class", 'input');
    blue.setAttribute("id", "blue");
    blue.style.display = "none";
    blue.style.position = "absolute";
    blue.style.width = "150px";
    blue.style.top = "430px";
    blue.style.left = "110px";
    document.body.appendChild(blue);
  }
  resultado();

  function submit() 
  {
    const ars = document.getElementById("pesos_input").value;
    const usd = document.getElementById("dolar_input").value;
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
      a_oficial = a_oficial.toFixed(2);
      a_blue = a_blue.toFixed(2);
      document.getElementById('oficial').style.display = 'block';
      document.getElementById('blue').style.display = 'block';
      document.getElementById('oficial').setAttribute("value", 'ARS ' + a_oficial + ' Oficial');
      document.getElementById('blue').setAttribute("value", 'ARS ' + a_blue + ' Paralelo');
    }
  }
}
dolar();
















//////////////////////// PAGINAS WEB ////////////////////////

const link_argenbtc = "https://argenbtc.com/";
const link_belo = "https://www.belo.app/";
const link_bitex = "https://bitex.la/";
const link_bitmonedero = "https://www.bitmonedero.com/";
const link_bitso = "https://bitso.com/?l=es-ar";
const link_buda = "https://www.buda.com/argentina";
const link_buenbit = "https://www.buenbit.com/";
const link_copter = "https://exchangecopter.com/";
const link_criptofacil = "https://www.criptofacil.com.ar/";
const link_cryptomkt = "https://www.cryptomkt.com/es/";
const link_decrypto = "https://www.decrypto.la/";
const link_fiwind = "https://fiwind.io/";
const link_latamex = "https://latamex.com/ar/";
const link_lemoncash = "https://www.lemon.me/";
const link_letsbit = "https://letsbit.io/";
const link_ripio = "https://www.ripio.com/ar/";
const link_satoshitango = "https://www.satoshitango.com/es-AR/";
const link_sesocio = "https://www.sesocio.com/";
const link_tiendacrypto = "https://www.tiendacrypto.com/";
const link_universalcoins = "https://www.universalcoins.net/";









//////////////////////// TABLA COTIZACIONES DAI ////////////////////////
async function dai_ars() {
  const dai_ars = await fetch("https://criptoya.com/api/dai/ars/0.1");
  const dai_ars_data = await dai_ars.json();
  // console.log(dai_ars_data);

  len_dai = (Object.keys(dai_ars_data)).length;

  const lista_exchange = [];
  const lista_compra = [];
  const lista_venta = [];

  for (let i = 0; i < len_dai ; i++) {
    const exchange = Object.keys(dai_ars_data)[i];
    const exchange2 = Object.values(dai_ars_data)[i];
    const exchange_compra = Object.values(exchange2)[0];
    const exchange_venta = Object.values(exchange2)[2];
    // console.log(exchange);
    // console.log(exchange_compra);
    // console.log(exchange_venta);
    lista_exchange.push(exchange);
    lista_compra.push(exchange_compra);
    lista_venta.push(exchange_venta);
  }

  function createTable() {
    for (let i = 0; i < len_dai; i++) {
      var row = '<tr><td style="column-width: 100px;">' + lista_exchange[i] + '</td>\n<td style="column-width: 100px;">' + lista_compra[i] + '</td><td style="column-width: 100px;">' + lista_venta[i] + '</td></tr>';
      let html = document.getElementById("dai_ars_table").innerHTML + row;
        document.getElementById("dai_ars_table").innerHTML = html;
    }
  }
  createTable();

}
dai_ars();
























//////////////////////// TABLA COTIZACIONES BTC ////////////////////////

async function btc_ars() {
  const btc_ars = await fetch("https://criptoya.com/api/btc/ars/0.1");
  const btc_ars_data = await btc_ars.json();
  
  len_btc = (Object.keys(btc_ars_data)).length;

  const lista_exchange = [];
  const lista_compra = [];
  const lista_venta = [];



  for (let i = 0; i < len_btc ; i++) {
    const exchange = Object.keys(btc_ars_data)[i];
    const exchange2 = Object.values(btc_ars_data)[i];
    
    const exchange_compra = Number.parseInt(Object.values(exchange2)[0]).toLocaleString().replace(/,/g, ".");
    const exchange_venta = Number.parseInt(Object.values(exchange2)[2]).toLocaleString().replace(/,/g, ".");
    lista_exchange.push(exchange);
    lista_compra.push(exchange_compra);
    lista_venta.push(exchange_venta);
  }

  function createTable() {
    for (let i = 0; i < len_btc; i++) {
      var row = '<tr><td style="column-width: 100px;">' + lista_exchange[i] + '</td>\n<td style="column-width: 100px;">' + lista_compra[i] + '</td><td style="column-width: 100px;">' + lista_venta[i] + '</td></tr>';
      let html = document.getElementById("btc_ars_table").innerHTML + row;
        document.getElementById("btc_ars_table").innerHTML = html;
    }
  }
  createTable();
}
btc_ars();


























//////////////////////// TABLA COTIZACIONES ETH ////////////////////////

async function eth_ars() {
  const eth_ars = await fetch("https://criptoya.com/api/eth/ars/0.1");
  const eth_ars_data = await eth_ars.json();
  
  len_eth = (Object.keys(eth_ars_data)).length;

  const lista_exchange = [];
  const lista_compra = [];
  const lista_venta = [];

  for (let i = 0; i < len_eth ; i++) {
    const exchange = Object.keys(eth_ars_data)[i];
    const exchange2 = Object.values(eth_ars_data)[i];
    const exchange_compra = Number.parseInt(Object.values(exchange2)[0]).toLocaleString().replace(/,/g, ".");
    const exchange_venta = Number.parseInt(Object.values(exchange2)[2]).toLocaleString().replace(/,/g, ".");
    // console.log(exchange);
    // console.log(exchange_compra);
    // console.log(exchange_venta);
    lista_exchange.push(exchange);
    lista_compra.push(exchange_compra);
    lista_venta.push(exchange_venta);
  }

  function createTable() {

    for (let i = 0; i < len_eth; i++) {
      var row = '<tr><td style="column-width: 100px;">' + lista_exchange[i] + '</td>\n<td style="column-width: 100px;">' + lista_compra[i] + '</td><td style="column-width: 100px;">' + lista_venta[i] + '</td></tr>';
      let html = document.getElementById("eth_ars_table").innerHTML + row;
        document.getElementById("eth_ars_table").innerHTML = html;
    }
  }
  createTable();

}
eth_ars();



















//////////////////////// TABLA SUPPORTED COINS ////////////////////////

async function soportadas() {
  
  const url_coins = await fetch("https://criptoya.com/api/fees");
  const coins_data = await url_coins.json();
  // console.log(coins_data);

  len_coins = (Object.keys(coins_data)).length;

  const lista_exchange = [];
  const lista_coins = [];
  

  for (let i = 0; i < len_coins ; i++) {
    const exchange = Object.keys(coins_data)[i]
    const exchange2 = Object.values(coins_data)[i]
    const exchange_coins = Object.keys(exchange2)
    // console.log(exchange);
    // console.log(exchange_coins);
    lista_exchange.push(exchange);
    lista_coins.push(exchange_coins);
  }

  function createTable() {

    for (let i = 0; i < len_coins; i++) {
      let row = '<tr><td>' + lista_exchange[i] + '</td><td style="column-width: 700px;">' + lista_coins[i] + '</td></tr>';
      let html = document.getElementById("coins_table").innerHTML + row;
        document.getElementById("coins_table").innerHTML = html;
    }
  }
  createTable();

}
soportadas();


























////////////////////////// TABLA COTIZACIONES RATES ////////////////////////

async function earn() {
  

  const uala_ars = '29.16%';
  const mercadopago_ars = '29.6 %';


  const url_belo = 'https://beta.belo.app/public/rate';
  const info_belo = await fetch(url_belo);
  const belo_data = await info_belo.json();
  for (i = 0; i < belo_data.length; i++) {
    if (Object.values(Object.values(belo_data)[i])[0] == 'USDT') {
      var belo_usdt = (Number.parseFloat(Object.values(Object.values(belo_data)[4])[1]) * 100).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < belo_data.length; i++) {
    if (Object.values(Object.values(belo_data)[i])[0] == 'USDC') {
      var belo_usdc = (Number.parseFloat(Object.values(Object.values(belo_data)[5])[1]) * 100).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < belo_data.length; i++) {
    if (Object.values(Object.values(belo_data)[i])[0] == 'DAI') {
      var belo_dai = (Number.parseFloat(Object.values(Object.values(belo_data)[3])[1]) * 100).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < belo_data.length; i++) {
    if (Object.values(Object.values(belo_data)[i])[0] == 'BTC') {
      var belo_btc = (Number.parseFloat(Object.values(Object.values(belo_data)[1])[1]) * 100).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < belo_data.length; i++) {
    if (Object.values(Object.values(belo_data)[i])[0] == 'ETH') {
      var belo_eth = (Number.parseFloat(Object.values(Object.values(belo_data)[2])[1]) * 100).toLocaleString().replace(".", ",") + '%';
    }
  }
  
  
  
  // const url_buenbit = 'https://be.buenbit.com/api/mobile/market/currencies/';
  // const info_buenbit = await fetch(url_buenbit, {
  //  headers: {
  //       'Access-Control-Allow-Origin': '*'
  //   }
  // });
  // const info_buenbit = await fetch(url_buenbit);
  // const buenbit_data = await info_buenbit.json();
  // console.log(buenbit_data);
  const buenbit_usdt = '-';
  const buenbit_usdc = '-';
  const buenbit_dai = '13%';
  const buenbit_btc = '3%';
  const buenbit_eth = '4.5%';



  const url_lemon = 'https://api.lemoncash.com.ar/api/v1/interest-funds-percentages';
  const info_lemon = await fetch(url_lemon);
  const lemon_data = await info_lemon.json();
  

  for (i = 0; i < lemon_data.length; i++) {
    if (Object.values(Object.values(lemon_data)[i])[1] == 'USDT') {
      var lemon_usdt = (Number.parseFloat(Object.values(Object.values(lemon_data)[i])[0])).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < lemon_data.length; i++) {
    if (Object.values(Object.values(lemon_data)[i])[1] == 'DAI') {
      var lemon_dai = (Number.parseFloat(Object.values(Object.values(lemon_data)[i])[0])).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < lemon_data.length; i++) {
    if (Object.values(Object.values(lemon_data)[i])[1] == 'BTC') {
      var lemon_btc = (Number.parseFloat(Object.values(Object.values(lemon_data)[i])[0])).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < lemon_data.length; i++) {
    if (Object.values(Object.values(lemon_data)[i])[1] == 'ETH') {
      var lemon_eth = (Number.parseFloat(Object.values(Object.values(lemon_data)[i])[0])).toLocaleString().replace(".", ",") + '%';
    }
  }
  var lemon_usdc = '-';



  const ripio_usdt = '-';
  const ripio_usdc = '6%';
  const ripio_dai = '-';
  const ripio_btc = '2,5%';
  const ripio_eth = '4%';


  const url_tiendacrypto = 'https://api.tiendacrypto.com/v1/price/aUST/data';
  const info_tiendacrypto = await fetch(url_tiendacrypto);
  const tiendacrypto_data = await info_tiendacrypto.json();
  const tiendacrypto_dai = (((Object.values(tiendacrypto_data)[1]) * 100).toFixed(2)).toLocaleString().replace(".", ",") + '%';
  const tiendacrypto_usdt = '-';
  const tiendacrypto_usdc = '-';
  const tiendacrypto_btc = '-';
  const tiendacrypto_eth = '-';

  const decrypto_usdt = '9%';
  const decrypto_usdc = '-';
  const decrypto_dai = '-';
  const decrypto_btc = '6%';
  const decrypto_eth = '4.5%';


  const url_quantia = 'https://api.quantiacapital.com:8080/1.0/interest/';
  const info_quantia = await fetch(url_quantia);
  const quantia_data = await info_quantia.json();
  // console.log(Object.values(quantia_data)[0].length);
  for (i = 0; i < Object.values(quantia_data)[0].length; i++) {
    // console.log(Object.values(quantia_data)[0]);
    if (Object.values(Object.values(Object.values(quantia_data)[0])[i])[0] == 'USDt') {
      var quantia_usdt = (Object.values(Object.values(Object.values(quantia_data)[0])[i])[1]).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < Object.values(quantia_data)[0].length; i++) {
    if (Object.values(Object.values(Object.values(quantia_data)[0])[i])[0] == 'USDC') {
      var quantia_usdc = (Object.values(Object.values(Object.values(quantia_data)[0])[i])[1]).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < Object.values(quantia_data)[0].length; i++) {
    if (Object.values(Object.values(Object.values(quantia_data)[0])[i])[0] == 'DAI') {
      var quantia_dai = (Object.values(Object.values(Object.values(quantia_data)[0])[i])[1]).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < Object.values(quantia_data)[0].length; i++) {
    if (Object.values(Object.values(Object.values(quantia_data)[0])[i])[0] == 'BTC') {
      var quantia_btc = (Object.values(Object.values(Object.values(quantia_data)[0])[i])[1]).toLocaleString().replace(".", ",") + '%';
    }
  }
  for (i = 0; i < Object.values(quantia_data)[0].length; i++) {
    if (Object.values(Object.values(Object.values(quantia_data)[0])[i])[0] == 'ETH') {
      var quantia_eth = (Object.values(Object.values(Object.values(quantia_data)[0])[i])[1]).toLocaleString().replace(".", ",") + '%';
    }
  }

  

  // const url_letsbit = 'https://api.letsbit.io/api/v1/lb/interests/public/currencies'
  // const info_letsbit = await fetch(url_letsbit);
  // const letsbit_data = await info_letsbit.json();
  // console.log(letsbit_data);


  // const url_letsbit = 'https://api.letsbit.io/api/v1/lb/interests/public/currencies'
  // const info_letsbit = await fetch(url_letsbit);
  // const letsbit_data = await info_letsbit.json();
  // lista = []
  // for (i = 0; i < letsbit_data.length; i++) {
  //     moneda = letsbit_data[i]['code'];
  //     strategy = letsbit_data[i]['strategies'];
  //     console.log(strategy);
  //     // if (len(strategy) > 1):
  //     //     rate1 = float(strategy[0]['rate']['rate'])
  //     //     rate2 = float(strategy[1]['rate']['rate'])
  //     //     if (rate1 > rate2):
  //     //         rate = rate1 * 100
  //     //         rate = round(rate, 2)
  //     //         rate_str = str(rate)
  //     //     else:
  //     //         rate = rate2 * 100
  //     //         rate = round(rate, 2)
  //     //         rate_str = str(rate)
  //     // elif (len(strategy) == 1):
  //     //     strategy_dict = strategy[0]
  //     //     rate_dict = strategy_dict['rate']
  //     //     rate = float(rate_dict['rate']) * 100
  //     //     rate = round(rate,2)
  //     //     rate_str = str(rate)
  //     // if (moneda == 'ars'):
  //     //     letsbit_ars_rate = rate_str
  // }












  function createTable() {
    body = document.createElement('tbody');
    var belo = '<tr><td>belo</td>\n<td>' + belo_usdt + '</td><td>' + belo_usdc + '</td><td>' + belo_dai + '</td><td>' + belo_btc + '</td><td>' + belo_eth + '</td></tr>';
    var buenbit = '<tr><td>buenbit</td>\n<td>' + buenbit_usdt + '</td><td>' + buenbit_usdc + '</td><td>' + buenbit_dai + '</td><td>' + buenbit_btc + '</td><td>' + buenbit_eth + '</td></tr>';
    var lemon = '<tr><td>lemon</td>\n<td>' + lemon_usdt + '</td><td>' + lemon_usdc + '</td><td>' + lemon_dai + '</td><td>' + lemon_btc + '</td><td>' + lemon_eth + '</td></tr>';
    var ripio = '<tr><td>ripio</td>\n<td>' + ripio_usdt + '</td><td>' + ripio_usdc + '</td><td>' + ripio_dai + '</td><td>' + ripio_btc + '</td><td>' + ripio_eth + '</td></tr>';
    var tiendacrypto = '<tr><td>tiendacrypto</td>\n<td>' + tiendacrypto_usdt + '</td><td>' + tiendacrypto_usdc + '</td><td>' + tiendacrypto_dai + '</td><td>' + tiendacrypto_btc + '</td><td>' + tiendacrypto_eth + '</td></tr>';
    var decrypto = '<tr><td>decrypto</td>\n<td>' + belo_usdt + '</td><td>' + decrypto_usdc + '</td><td>' + decrypto_dai + '</td><td>' + decrypto_btc + '</td><td>' + decrypto_eth + '</td></tr>';
    var quantia = '<tr><td>quantia_capital</td>\n<td>' + quantia_usdt + '</td><td>' + quantia_usdc + '</td><td>' + quantia_dai + '</td><td>' + quantia_btc + '</td><td>' + quantia_eth + '</td></tr>';
    var html = document.getElementById("earn_table").innerHTML +belo+buenbit+lemon+ripio+tiendacrypto+decrypto+quantia+'<br></br>';
      document.getElementById("earn_table").innerHTML = html;
    
  }
  createTable();
}
earn();






// ORDENA POR LA COLUMNA COMPRA EN DAI
// let dai_compra = document.querySelectorAll("sort_dai_compra");
// let sort_daicompra = dai_compra.parentNode;

// console.log(dai_compra);
// dai_compra.sortDaiCompra();
// dai_compra.addEventListener(new Event("change"));
// dai_compra.dispatchEvent(new Event('change', { 'bubbles': true }));

// document.getElementById('sort_dai_compra')[0].dispatchEvent(evt);
// console.log(typeof(dai_compra));
// console.log(sort_daicompra);
// console.log(typeof(sort_dai_compra));
// dai_compra.addEventListener("click", sortDaiCompra);

// dai_compra.setAttribute("onclick","sortDaiCompra();");
// elemm.onclick = function() { alert('blah'); };

// document.addEventListener('click',function(e){
//     if(e.target && e.target.id== 'brnPrepend'){
//           //do something
//      }
//  });
// Get the element, add a click listener...
// document.getElementById("sort_dai_compra").addEventListener("click", sortDaiCompra());
















//////////////////////// BOTONES ////////////////////////

let boton_dai = document.getElementById("btnDai");
boton_dai.addEventListener("click", toggle_dai);
function toggle_dai() {
  let body_dai = document.getElementById("dai_ars_table");
  body_dai.style.display = "block";
  let body_btc = document.getElementById("btc_ars_table");
  body_btc.style.display = "none";
  let body_eth = document.getElementById("eth_ars_table");
  body_eth.style.display = "none";
  let body_dolar = document.getElementById("dolar_table");
  body_dolar.style.display = "none";
  let body_coins = document.getElementById("coins_table");
  body_coins.style.display = "none";
  let pesos_input = document.getElementById("pesos_input");
  pesos_input.style.display = "none";
  let dolar_input = document.getElementById("dolar_input");
  dolar_input.style.display = "none";
  let enter_boton = document.getElementById("enter_boton");
  enter_boton.style.display = "none";
  let oficial = document.getElementById("oficial");
  oficial.style.display = "none";
  let blue = document.getElementById("blue");
  blue.style.display = "none";
  let earn = document.getElementById("earn_table");
  earn.style.display = "none";
  let belo = document.getElementById("btnBelo");
  belo.style.display = "none";
  let ripio = document.getElementById("btnRipio");
  ripio.style.display = "none";
  let buenbit = document.getElementById("btnBuenbit");
  buenbit.style.display = "none";
  let satoshi = document.getElementById("btnSatoshi");
  satoshi.style.display = "none";
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}

let boton_btc = document.getElementById("btnBtc");
boton_btc.addEventListener("click", toggle_btc);
function toggle_btc() {
  let body_dai = document.getElementById("dai_ars_table");
  body_dai.style.display = "none";
  let body_btc = document.getElementById("btc_ars_table");
  body_btc.style.display = "block";
  let body_eth = document.getElementById("eth_ars_table");
  body_eth.style.display = "none";
  let body_dolar = document.getElementById("dolar_table");
  body_dolar.style.display = "none";
  let body_coins = document.getElementById("coins_table");
  body_coins.style.display = "none";
  let pesos_input = document.getElementById("pesos_input");
  pesos_input.style.display = "none";
  let dolar_input = document.getElementById("dolar_input");
  dolar_input.style.display = "none";
  let enter_boton = document.getElementById("enter_boton");
  enter_boton.style.display = "none";
  let oficial = document.getElementById("oficial");
  oficial.style.display = "none";
  let blue = document.getElementById("blue");
  blue.style.display = "none";
  let earn = document.getElementById("earn_table");
  earn.style.display = "none";
  let belo = document.getElementById("btnBelo");
  belo.style.display = "none";
  let ripio = document.getElementById("btnRipio");
  ripio.style.display = "none";
  let buenbit = document.getElementById("btnBuenbit");
  buenbit.style.display = "none";
  let satoshi = document.getElementById("btnSatoshi");
  satoshi.style.display = "none";
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}

let boton_eth = document.getElementById("btnEth");
boton_eth.addEventListener("click", toggle_eth);
function toggle_eth() {
  let body_dai = document.getElementById("dai_ars_table");
  body_dai.style.display = "none";
  let body_btc = document.getElementById("btc_ars_table");
  body_btc.style.display = "none";
  let body_eth = document.getElementById("eth_ars_table");
  body_eth.style.display = "block";
  let body_dolar = document.getElementById("dolar_table");
  body_dolar.style.display = "none";
  let body_coins = document.getElementById("coins_table");
  body_coins.style.display = "none";
  let pesos_input = document.getElementById("pesos_input");
  pesos_input.style.display = "none";
  let dolar_input = document.getElementById("dolar_input");
  dolar_input.style.display = "none";
  let enter_boton = document.getElementById("enter_boton");
  enter_boton.style.display = "none";
  let oficial = document.getElementById("oficial");
  oficial.style.display = "none";
  let blue = document.getElementById("blue");
  blue.style.display = "none";
  let earn = document.getElementById("earn_table");
  earn.style.display = "none";
  let belo = document.getElementById("btnBelo");
  belo.style.display = "none";
  let ripio = document.getElementById("btnRipio");
  ripio.style.display = "none";
  let buenbit = document.getElementById("btnBuenbit");
  buenbit.style.display = "none";
  let satoshi = document.getElementById("btnSatoshi");
  satoshi.style.display = "none";
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}
  
let boton_coins = document.getElementById("btnCoins");
boton_coins.addEventListener("click", toggle_coins);
function toggle_coins() {
  let body_dai = document.getElementById("dai_ars_table");
  body_dai.style.display = "none";
  let body_btc = document.getElementById("btc_ars_table");
  body_btc.style.display = "none";
  let body_eth = document.getElementById("eth_ars_table");
  body_eth.style.display = "none";
  let body_dolar = document.getElementById("dolar_table");
  body_dolar.style.display = "none";
  let body_coins = document.getElementById("coins_table");
  body_coins.style.display = "block";
  let pesos_input = document.getElementById("pesos_input");
  pesos_input.style.display = "none";
  let dolar_input = document.getElementById("dolar_input");
  dolar_input.style.display = "none";
  let enter_boton = document.getElementById("enter_boton");
  enter_boton.style.display = "none";
  let oficial = document.getElementById("oficial");
  oficial.style.display = "none";
  let blue = document.getElementById("blue");
  blue.style.display = "none";
  let earn = document.getElementById("earn_table");
  earn.style.display = "none";
  let belo = document.getElementById("btnBelo");
  belo.style.display = "none";
  let ripio = document.getElementById("btnRipio");
  ripio.style.display = "none";
  let buenbit = document.getElementById("btnBuenbit");
  buenbit.style.display = "none";
  let satoshi = document.getElementById("btnSatoshi");
  satoshi.style.display = "none";
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}

let boton_dolar = document.getElementById("btnDolar");
boton_dolar.addEventListener("click", toggle_dolar);
function toggle_dolar() {
  let body_dai = document.getElementById("dai_ars_table");
  body_dai.style.display = "none";
  let body_btc = document.getElementById("btc_ars_table");
  body_btc.style.display = "none";
  let body_eth = document.getElementById("eth_ars_table");
  body_eth.style.display = "none";
  let body_coins = document.getElementById("coins_table");
  body_coins.style.display = "none";
  let body_dolar = document.getElementById("dolar_table");
  body_dolar.style.display = "block";
  let pesos_input = document.getElementById("pesos_input");
  pesos_input.style.display = "block";
  let dolar_input = document.getElementById("dolar_input");
  dolar_input.style.display = "block";
  let enter_boton = document.getElementById("enter_boton");
  enter_boton.style.display = "block";
  let earn = document.getElementById("earn_table");
  earn.style.display = "none";
  let belo = document.getElementById("btnBelo");
  belo.style.display = "none";
  let ripio = document.getElementById("btnRipio");
  ripio.style.display = "none";
  let buenbit = document.getElementById("btnBuenbit");
  buenbit.style.display = "none";
  let satoshi = document.getElementById("btnSatoshi");
  satoshi.style.display = "none";
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}

let boton_earn = document.getElementById("btnEarn");
boton_earn.addEventListener("click", toggle_earn);
function toggle_earn() {
  let body_dai = document.getElementById("dai_ars_table");
  body_dai.style.display = "none";
  let body_btc = document.getElementById("btc_ars_table");
  body_btc.style.display = "none";
  let body_eth = document.getElementById("eth_ars_table");
  body_eth.style.display = "none";
  let body_coins = document.getElementById("coins_table");
  body_coins.style.display = "none";
  let body_dolar = document.getElementById("dolar_table");
  body_dolar.style.display = "none";
  let pesos_input = document.getElementById("pesos_input");
  pesos_input.style.display = "none";
  let dolar_input = document.getElementById("dolar_input");
  dolar_input.style.display = "none";
  let enter_boton = document.getElementById("enter_boton");
  enter_boton.style.display = "none";
  let oficial = document.getElementById("oficial");
  oficial.style.display = "none";
  let blue = document.getElementById("blue");
  blue.style.display = "none";
  let earn = document.getElementById("earn_table");
  earn.style.display = "block";
  let belo = document.getElementById("btnBelo");
  belo.style.display = "none";
  let ripio = document.getElementById("btnRipio");
  ripio.style.display = "none";
  let buenbit = document.getElementById("btnBuenbit");
  buenbit.style.display = "none";
  let satoshi = document.getElementById("btnSatoshi");
  satoshi.style.display = "none";
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}



let boton_wallet = document.getElementById("btnWallet");
boton_wallet.addEventListener("click", toggle_wallet);
function toggle_wallet() {
  let body_dai = document.getElementById("dai_ars_table");
  body_dai.style.display = "none";
  let body_btc = document.getElementById("btc_ars_table");
  body_btc.style.display = "none";
  let body_eth = document.getElementById("eth_ars_table");
  body_eth.style.display = "none";
  let body_coins = document.getElementById("coins_table");
  body_coins.style.display = "none";
  let body_dolar = document.getElementById("dolar_table");
  body_dolar.style.display = "none";
  let pesos_input = document.getElementById("pesos_input");
  pesos_input.style.display = "none";
  let dolar_input = document.getElementById("dolar_input");
  dolar_input.style.display = "none";
  let enter_boton = document.getElementById("enter_boton");
  enter_boton.style.display = "none";
  let oficial = document.getElementById("oficial");
  oficial.style.display = "none";
  let blue = document.getElementById("blue");
  blue.style.display = "none";
  let earn = document.getElementById("earn_table");
  earn.style.display = "none";
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
  let body_belo = document.getElementById("btnBelo");
  let body_buenbit = document.getElementById("btnBuenbit");
  let body_ripio = document.getElementById("btnRipio");
  let body_satoshi = document.getElementById("btnSatoshi");
  if (body_belo.style.display == "none") {
    body_belo.style.display = "inline";
    body_buenbit.style.display = "inline";
    body_ripio.style.display = "inline";
    body_satoshi.style.display = "inline";
  }
  else {
    body_belo.style.display = "none";
    body_buenbit.style.display = "none";
    body_ripio.style.display = "none";
    body_satoshi.style.display = "none";
  }
}



let boton_belo = document.getElementById("btnBelo");
boton_belo.addEventListener("click", toggle_belo);
function toggle_belo() {
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "block";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}
let boton_ripio = document.getElementById("btnRipio");
boton_ripio.addEventListener("click", toggle_ripio);
function toggle_ripio() {
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "block";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}
let boton_buenbit = document.getElementById("btnBuenbit");
boton_buenbit.addEventListener("click", toggle_buenbit);
function toggle_buenbit() {
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "block";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "none";
}
let boton_satoshi = document.getElementById("btnSatoshi");
boton_satoshi.addEventListener("click", toggle_satoshi);
function toggle_satoshi() {
  let belo_qr = document.getElementById("belo_qr");
  belo_qr.style.display = "none";
  let ripio_qr = document.getElementById("ripio_qr");
  ripio_qr.style.display = "none";
  let buenbit_qr = document.getElementById("buenbit_qr");
  buenbit_qr.style.display = "none";
  let satoshi_qr = document.getElementById("satoshi_qr");
  satoshi_qr.style.display = "block";
}


















//////////////////////// ORDENA POR LA COLUMNA NOMBRE EN DAI ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_dai_name' ) {
    sortNameDai();
  };
} );
function sortNameDai() {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dai_ars_table");
  switching = true;
  dir = "asc";
  while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
            }
          } 
          else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } 
      else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
      }
    }
}
////////////////////////// ORDENA POR LA COLUMNA COMPRA EN DAI ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_dai_compra' ) {
    sortCompraDai();
  };
} );
function sortCompraDai() {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dai_ars_table");
  switching = true;
  dir = "desc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
          }
        } 
        else if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } 
    else {
      if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        }
    }
  }
}
//////////////////////// ORDENA POR LA COLUMNA VENTA EN DAI ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_dai_venta' ) {
    sortVentaDai();
  };
} );
function sortVentaDai() {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("dai_ars_table");
  switching = true;
  dir = "desc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
          }
        } 
        else if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } 
    else {
      if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        }
    }
  }
}




























//////////////////////// ORDENA POR LA COLUMNA NOMBRE EN BTC ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_btc_name' ) {
    sortNameBtc();
  };
} );
function sortNameBtc() {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("btc_ars_table");
  switching = true;
  dir = "asc";
  while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
            }
          } 
          else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } 
      else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
      }
    }
}
//////////////////////// ORDENA POR LA COLUMNA COMPRA EN BTC ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_btc_compra' ) {
    sortCompraBtc();
  };
} );
function sortCompraBtc() {
  let table2, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table2 = document.getElementById("btc_ars_table");
  for (let i = 1; i < len_btc ; i++) {
    trs = table2.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_num = Number.parseInt((trs_compra).toLocaleString().replace(/\./g,''));
    venta_to_num = Number.parseInt((trs_venta).toLocaleString().replace(/\./g,''));
    trs.children[1].innerHTML = compra_to_num;
    trs.children[2].innerHTML = venta_to_num;
  }
  switching = true;
  dir = "desc";
  while (switching) {
    switching = false;
    rows = table2.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
          }
        } 
        else if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } 
    else {
      if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        }
    }
  }
  for (let i = 1; i < len_btc ; i++) {
    trs = table2.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_str = Number.parseInt(trs_compra).toLocaleString().replace(/,/g, ".");
    venta_to_str = Number.parseInt(trs_venta).toLocaleString().replace(/,/g, ".");
    trs.children[1].innerHTML = compra_to_str;
    trs.children[2].innerHTML = venta_to_str;
  }    
}
//////////////////////// ORDENA POR LA COLUMNA VENTA EN BTC ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_btc_venta' ) {
    sortVentaBtc();
  };
} );
function sortVentaBtc() {
  let table3, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table3 = document.getElementById("btc_ars_table");
  for (let i = 1; i < len_btc ; i++) {
    trs = table3.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_num = Number.parseInt((trs_compra).toLocaleString().replace(/\./g,''));
    venta_to_num = Number.parseInt((trs_venta).toLocaleString().replace(/\./g,''));
    trs.children[1].innerHTML = compra_to_num;
    trs.children[2].innerHTML = venta_to_num;
  }
  switching = true;
  dir = "desc";
  while (switching) {
    switching = false;
    rows = table3.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
          }
        } 
        else if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } 
    else {
      if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        }
    }
  }
  for (let i = 1; i < len_btc ; i++) {
    trs = table3.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_str = Number.parseInt(trs_compra).toLocaleString().replace(/,/g, ".");
    venta_to_str = Number.parseInt(trs_venta).toLocaleString().replace(/,/g, ".");
    trs.children[1].innerHTML = compra_to_str;
    trs.children[2].innerHTML = venta_to_str;
  }    
}


















//////////////////////// ORDENA POR LA COLUMNA NOMBRE EN ETH ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_eth_name' ) {
    sortNameEth();
  };
} );
function sortNameEth() {
  let table4, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table4 = document.getElementById("eth_ars_table");
  switching = true;
  dir = "asc";
  while (switching) {
      switching = false;
      rows = table4.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
            }
          } 
          else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } 
      else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
      }
    }
}
//////////////////////// ORDENA POR LA COLUMNA COMPRA EN ETH ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_eth_compra' ) {
    sortCompraEth();
  };
} );
function sortCompraEth() {
  let table5, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table5 = document.getElementById("eth_ars_table");
  for (let i = 1; i < len_eth ; i++) {
    trs = table5.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_num = Number.parseInt((trs_compra).toLocaleString().replace(/\./g,''));
    venta_to_num = Number.parseInt((trs_venta).toLocaleString().replace(/\./g,''));
    trs.children[1].innerHTML = compra_to_num;
    trs.children[2].innerHTML = venta_to_num;
  }
  switching = true;
  dir = "desc";
  while (switching) {
    switching = false;
    rows = table5.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
          }
        } 
        else if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } 
    else {
      if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        }
    }
  }
  for (let i = 1; i < len_eth ; i++) {
    trs = table5.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_str = Number.parseInt(trs_compra).toLocaleString().replace(/,/g, ".");
    venta_to_str = Number.parseInt(trs_venta).toLocaleString().replace(/,/g, ".");
    trs.children[1].innerHTML = compra_to_str;
    trs.children[2].innerHTML = venta_to_str;
  }    
}
//////////////////////// ORDENA POR LA COLUMNA VENTA EN ETH ////////////////////////
document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'sort_eth_venta' ) {
    sortVentaEth();
  };
} );
function sortVentaEth() {
  let table6, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table6 = document.getElementById("eth_ars_table");
  for (let i = 1; i < len_eth ; i++) {
    trs = table6.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_num = Number.parseInt((trs_compra).toLocaleString().replace(/\./g,''));
    venta_to_num = Number.parseInt((trs_venta).toLocaleString().replace(/\./g,''));
    trs.children[1].innerHTML = compra_to_num;
    trs.children[2].innerHTML = venta_to_num;
  }
  switching = true;
  dir = "desc";
  while (switching) {
    switching = false;
    rows = table6.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      if (dir == "desc") {
          if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
          }
        } 
        else if (dir == "asc") {
          if (Number(x.innerHTML) > Number(y.innerHTML)) {
            shouldSwitch = true;
            break;
          }
        }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } 
    else {
      if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        }
    }
  }
  for (let i = 1; i < len_eth ; i++) {
    trs = table6.children[i];
    trs_compra = trs.children[1].innerHTML;
    trs_venta = trs.children[2].innerHTML;
    compra_to_str = Number.parseInt(trs_compra).toLocaleString().replace(/,/g, ".");
    venta_to_str = Number.parseInt(trs_venta).toLocaleString().replace(/,/g, ".");
    trs.children[1].innerHTML = compra_to_str;
    trs.children[2].innerHTML = venta_to_str;
  }    
}