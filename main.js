const users = [{"id":1,"first_name":"Suzi","last_name":"Whymark","bank":"COMMUNITY BANK","city":"Oslo","country":"Norway","salary":3596,"expenses":524},
{"id":2,"first_name":"Davina","last_name":"Bentall","bank":"BANK OF AMERICA","city":"Nūr","country":"Iran","salary":2088,"expenses":966},
{"id":3,"first_name":"Joelly","last_name":"Estabrook","bank":"Kreissparkasse Ravensburg","city":"Václavovice","country":"Czech Republic","salary":1053,"expenses":320},
{"id":4,"first_name":"Richy","last_name":"Donson","bank":"Swedbank AB","city":"Gangnan","country":"China","salary":1328,"expenses":1416},
{"id":5,"first_name":"Ofilia","last_name":"Pudsall","bank":"CITIZENS STATE BANK","city":"Dadus","country":"Philippines","salary":4886,"expenses":1519},
{"id":6,"first_name":"Adrian","last_name":"Grimoldby","bank":"UMPQUA BANK","city":"Huangling","country":"China","salary":1093,"expenses":2283},
{"id":7,"first_name":"Domenic","last_name":"Levene","bank":"FIRST STATE BANK","city":"Dosso","country":"Niger","salary":2900,"expenses":664},
{"id":8,"first_name":"Moses","last_name":"Cahen","bank":"CITIBANK","city":"Glogovac","country":"Kosovo","salary":4249,"expenses":2912},
{"id":9,"first_name":"Chrissy","last_name":"Woodyeare","bank":"CASSA RAIFFEISEN DI MONGUELFO-CASIES-TESIDO SOCIETA' COOPERATIVA (RAIFFEISENKASSE WELSBERG-GSIES-TAISTEN GENOSSENSCHAFT)","city":"Crumlin","country":"Ireland","salary":3203,"expenses":562},
{"id":10,"first_name":"Daphene","last_name":"Lamzed","bank":"Raiffeisen Regionalbank Schwaz-Wattens eGen","city":"Gambarjati","country":"Indonesia","salary":4580,"expenses":2716},
{"id":11,"first_name":"Meredith","last_name":"Pochet","bank":"PayPal (Europe) S.à r.l. et Cie, S.C.A.","city":"Jiangjing","country":"China","salary":1802,"expenses":907},
{"id":12,"first_name":"Wallie","last_name":"Ralling","bank":"Schrobenhausener Bank eG","city":"San Pedro","country":"Mexico","salary":2186,"expenses":2654},
{"id":13,"first_name":"Galina","last_name":"Rawlence","bank":"Cicobail","city":"Zhongzhai","country":"China","salary":3430,"expenses":3263},
{"id":14,"first_name":"Teddie","last_name":"Knagges","bank":"Volksbank Franken eG","city":"Zalesnoye","country":"Ukraine","salary":2469,"expenses":3372},
{"id":15,"first_name":"Randie","last_name":"Kynforth","bank":"M & T BANK","city":"Santa Rita","country":"Venezuela","salary":3173,"expenses":466},
{"id":16,"first_name":"Sarah","last_name":"Hellwich","bank":"Raiffeisenbank Region Grieskirchen eGen","city":"Güines","country":"Cuba","salary":3002,"expenses":1773},
{"id":17,"first_name":"Kameko","last_name":"Napoli","bank":"Yapi Kredi Bank Deutschland GmbH & Co. OHG","city":"Peñaflor","country":"Chile","salary":3403,"expenses":1596},
{"id":18,"first_name":"Everard","last_name":"Stoite","bank":"Swedbank AB","city":"Guinoaliuan","country":"Philippines","salary":3146,"expenses":2535},
{"id":19,"first_name":"Fawne","last_name":"Giacobilio","bank":"Volksbank Niedergrafschaft eG","city":"Oyskhara","country":"Russia","salary":2031,"expenses":3155},
{"id":20,"first_name":"Lavena","last_name":"Quinnelly","bank":"US BANK","city":"Semirara","country":"Philippines","salary":2941,"expenses":1766},
{"id":21,"first_name":"Dyane","last_name":"Gaukrodge","bank":"BANK OF AMERICA","city":"Idi Rayeuk","country":"Indonesia","salary":1501,"expenses":2542},
{"id":22,"first_name":"Gracia","last_name":"Dupre","bank":"GRANDPOINT BANK","city":"Salt Lake City","country":"United States","salary":1262,"expenses":508},
{"id":23,"first_name":"Zahara","last_name":"Lunge","bank":"MAINSOURCE BANK","city":"Cishan","country":"China","salary":3094,"expenses":1082},
{"id":24,"first_name":"Herby","last_name":"Aslet","bank":"Volksbank eG Emstek Essen Cappeln","city":"Itapuí","country":"Brazil","salary":3295,"expenses":1379},
{"id":25,"first_name":"Lilith","last_name":"Vassay","bank":"Volksbank Kurpfalz eG","city":"Desa Werasari","country":"Indonesia","salary":1926,"expenses":2078},
{"id":26,"first_name":"Christopher","last_name":"Rowan","bank":"DEUTSCHE BANK S.P.A.","city":"Mohammedia","country":"Morocco","salary":3499,"expenses":3159},
{"id":27,"first_name":"Lonny","last_name":"Linsley","bank":"GREAT SOUTHERN BANK","city":"Ouagadougou","country":"Burkina Faso","salary":3119,"expenses":3375},
{"id":28,"first_name":"Alysa","last_name":"Bloxsum","bank":"St. Canice's Kilkenny Credit Union Limited","city":"Ouégoa","country":"New Caledonia","salary":2573,"expenses":1324},
{"id":29,"first_name":"Alastair","last_name":"Halkyard","bank":"S & T BANK","city":"Aurora","country":"Philippines","salary":2213,"expenses":1776},
{"id":30,"first_name":"Pernell","last_name":"Cornes","bank":"Raiffeisenbank Region Bad Leonfelden eGen","city":"Port Colborne","country":"Canada","salary":3103,"expenses":2794},
{"id":31,"first_name":"Pip","last_name":"Alderton","bank":"CASSA RAIFFEISEN BASSA ATESINA (IN LINGUA TEDESCA RAIFFEISENKASSE UNTERLAND)","city":"Czarna","country":"Poland","salary":3964,"expenses":190},
{"id":32,"first_name":"Sophronia","last_name":"Wannop","bank":"Caja Rural San José de Almassora, S. Coop. de Crédito V.","city":"General Viamonte","country":"Argentina","salary":3722,"expenses":1441},
{"id":33,"first_name":"Arabel","last_name":"Danielski","bank":"Volksbank Raiffeisenbank Bad Kissingen eG","city":"Cabalawan","country":"Philippines","salary":4313,"expenses":933},
{"id":34,"first_name":"Kandace","last_name":"Idle","bank":"FARMERS STATE BANK","city":"Dijon","country":"France","salary":3223,"expenses":284},
{"id":35,"first_name":"Damara","last_name":"Dannatt","bank":"PINNACLE BANK","city":"Jambesari","country":"Indonesia","salary":4098,"expenses":3283},
{"id":36,"first_name":"Jeri","last_name":"Leverage","bank":"Raiffeisenbank Meggenhofen-Kematen eGen","city":"Jazovo","country":"Serbia","salary":4115,"expenses":975},
{"id":37,"first_name":"Murdock","last_name":"Cannon","bank":"CAPITAL ONE","city":"Bohumín","country":"Czech Republic","salary":3476,"expenses":1111},
{"id":38,"first_name":"Deni","last_name":"Anthoin","bank":"Cofidis, S.A. Sucursal en España","city":"Tianguá","country":"Brazil","salary":4364,"expenses":1915},
{"id":39,"first_name":"Drud","last_name":"Doig","bank":"BANCA FINANZIARIA INTERNAZIONALE S.P.A. IN BREVE BANCA FININT S.P.A.","city":"Talcahuano","country":"Chile","salary":2698,"expenses":832},
{"id":40,"first_name":"Paige","last_name":"Deval","bank":"CA Indosuez Wealth (Europe)","city":"Ülken","country":"Kazakhstan","salary":3966,"expenses":2435},
{"id":41,"first_name":"Trixy","last_name":"Poolman","bank":"Ostfriesische Volksbank eG","city":"Baltimore","country":"United States","salary":3156,"expenses":836},
{"id":42,"first_name":"Nomi","last_name":"Lippiatt","bank":"UNITED COMMUNITY BANK","city":"Ponta Grossa","country":"Brazil","salary":2976,"expenses":1319},
{"id":43,"first_name":"Ainslie","last_name":"Cantwell","bank":"State Bank of India","city":"Colonia Elisa","country":"Argentina","salary":2701,"expenses":2866},
{"id":44,"first_name":"Alic","last_name":"Pauling","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Ketapang","country":"Indonesia","salary":4246,"expenses":1493},
{"id":45,"first_name":"Weider","last_name":"Ramas","bank":"Industrial and Commercial Bank of China (Europe) S.A.","city":"La Esmeralda","country":"Venezuela","salary":4861,"expenses":204},
{"id":46,"first_name":"Filmer","last_name":"Sloam","bank":"Allied Irish Banks, Public Limited Company","city":"Shahrisabz Shahri","country":"Uzbekistan","salary":4684,"expenses":3204},
{"id":47,"first_name":"Tabbie","last_name":"McLaverty","bank":"FARMERS STATE BANK","city":"Łęki Szlacheckie","country":"Poland","salary":2567,"expenses":1367},
{"id":48,"first_name":"Barbette","last_name":"Adacot","bank":"AION BANK","city":"Golomunta","country":"Indonesia","salary":3547,"expenses":2394},
{"id":49,"first_name":"Otha","last_name":"Antoons","bank":"Raiffeisenbank am Kulm eG","city":"Villa Nueva","country":"Honduras","salary":2295,"expenses":1512},
{"id":50,"first_name":"Lorine","last_name":"Craisford","bank":"FIRST NATIONAL BANK OF PENNSYLVANIA","city":"Srebrenica","country":"Bosnia and Herzegovina","salary":4349,"expenses":2501}]

// Funciones auxiliares // 

function calcularAhorro(usuario) {
  return usuario.salary - usuario.expenses;
}

function obtenerNombreCompleto(usuario) {
  return `${usuario.first_name} ${usuario.last_name}`;
}

function buscarUsuario(nombre) {
  return users.find(
    (user) =>
      obtenerNombreCompleto(user).toLowerCase() === nombre.toLowerCase()
  );
}

function agruparPor(campo) {
  const grupos = {};

  users.forEach((user) => {
    const clave = user[campo];
    const ahorro = calcularAhorro(user);

    if (!grupos[clave]) {
      grupos[clave] = {
        [campo]: clave,
        cantidadUsuarios: 0,
        ahorroTotal: 0
      };
    }
    grupos[clave].cantidadUsuarios++;
    grupos[clave].ahorroTotal += ahorro;
  });

  return Object.values(grupos);
}

// ACT 1 //

function balanceMensual() {
  const nombreIngresado = prompt("Ingrese el nombre completo del usuario:");

  const usuario = buscarUsuario(nombreIngresado);

  if (!usuario) {
    console.log("Usuario no encontrado");
    return;
  }

  const resultado = {
    nombre: obtenerNombreCompleto(usuario),
    banco: usuario.bank,
    ahorro: calcularAhorro(usuario)
  };

  console.log(resultado);
}

balanceMensual();

// ACT 2 //

function clasificarAhorro(usuario) {
  const ahorro = calcularAhorro(usuario);

  return ahorro < 500
    ? "Ahorro bajo"
    : ahorro <= 1500
    ? "Ahorro medio"
    : "Ahorro alto";
}

function mostrarClasificaciones() {
  const clasificaciones = users.map((user) => ({
    nombre: obtenerNombreCompleto(user),
    clasificacion: clasificarAhorro(user)
  }));

  console.log(clasificaciones);
}

mostrarClasificaciones();

// ACT 3 //

function ahorroPorBanco() {
  const resultado = agruparPor("bank");

  console.log(resultado);
}

ahorroPorBanco();

// ACT 4 //

function ahorroPorPais() {
  const resultado = agruparPor("country");

  console.log(resultado);

  // Obtener el país con mayor ahorro
  const mejorPais = resultado.reduce((max, actual) =>
    actual.ahorroTotal > max.ahorroTotal ? actual : max
  );

  console.log("País con mejor ahorro:");
  console.log(mejorPais);
}

ahorroPorPais();