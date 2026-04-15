const users = [{"id":1,"first_name":"Merwyn","last_name":"Klementz","email":"mklementz0@bravesites.com","gender":"Male","ip_address":"186.161.39.165"},
{"id":2,"first_name":"Edvard","last_name":"Cristobal","email":"ecristobal1@mozilla.org","gender":"Male","ip_address":"230.17.88.214"},
{"id":3,"first_name":"Agretha","last_name":"Hucks","email":"ahucks2@bbb.org","gender":"Female","ip_address":"25.154.246.151"},
{"id":4,"first_name":"Lind","last_name":"Found","email":"lfound3@cnbc.com","gender":"Male","ip_address":"74.110.198.47"},
{"id":5,"first_name":"Anitra","last_name":"Waplington","email":"awaplington4@myspace.com","gender":"Female","ip_address":"151.4.105.24"},
{"id":6,"first_name":"Kinna","last_name":"Rustedge","email":"krustedge5@yale.edu","gender":"Female","ip_address":"152.20.250.169"},
{"id":7,"first_name":"Rebeka","last_name":"Vesty","email":"rvesty6@people.com.cn","gender":"Female","ip_address":"94.132.0.6"},
{"id":8,"first_name":"Ceciley","last_name":"Cutten","email":"ccutten7@deliciousdays.com","gender":"Female","ip_address":"133.161.218.18"},
{"id":9,"first_name":"Linnie","last_name":"Surpliss","email":"lsurpliss8@flickr.com","gender":"Female","ip_address":"163.37.77.229"},
{"id":10,"first_name":"Gisella","last_name":"Newitt","email":"gnewitt9@ycombinator.com","gender":"Female","ip_address":"49.149.190.165"},
{"id":11,"first_name":"Jorrie","last_name":"Mattersey","email":"jmatterseya@cornell.edu","gender":"Female","ip_address":"44.149.55.21"},
{"id":12,"first_name":"Kathye","last_name":"Drysdall","email":"kdrysdallb@craigslist.org","gender":"Female","ip_address":"222.47.233.51"},
{"id":13,"first_name":"Lyda","last_name":"Parslow","email":"lparslowc@unesco.org","gender":"Female","ip_address":"132.112.7.170"},
{"id":14,"first_name":"Clo","last_name":"Lorden","email":"clordend@miitbeian.gov.cn","gender":"Female","ip_address":"27.50.102.115"},
{"id":15,"first_name":"Ravid","last_name":"Sallery","email":"rsallerye@yolasite.com","gender":"Male","ip_address":"178.239.154.66"},
{"id":16,"first_name":"Jennifer","last_name":"Lorroway","email":"jlorrowayf@tuttocitta.it","gender":"Female","ip_address":"8.212.158.122"},
{"id":17,"first_name":"Kahlil","last_name":"Pennington","email":"kpenningtong@squarespace.com","gender":"Male","ip_address":"182.115.91.139"},
{"id":18,"first_name":"Wrennie","last_name":"Foye","email":"wfoyeh@geocities.com","gender":"Female","ip_address":"189.68.63.56"},
{"id":19,"first_name":"Stillmann","last_name":"Relph","email":"srelphi@deviantart.com","gender":"Male","ip_address":"238.134.145.217"},
{"id":20,"first_name":"Mead","last_name":"Huet","email":"mhuetj@google.de","gender":"Female","ip_address":"219.254.79.26"},
{"id":21,"first_name":"Sven","last_name":"Oldford","email":"soldfordk@slate.com","gender":"Non-binary","ip_address":"52.184.127.182"},
{"id":22,"first_name":"Merrili","last_name":"Bittleson","email":"mbittlesonl@alibaba.com","gender":"Female","ip_address":"117.173.12.237"},
{"id":23,"first_name":"Vida","last_name":"Roddy","email":"vroddym@buzzfeed.com","gender":"Female","ip_address":"181.133.135.214"},
{"id":24,"first_name":"Tamarra","last_name":"Cainey","email":"tcaineyn@ustream.tv","gender":"Female","ip_address":"83.136.127.97"},
{"id":25,"first_name":"Hubie","last_name":"Dilliston","email":"hdillistono@nyu.edu","gender":"Male","ip_address":"208.69.100.185"},
{"id":26,"first_name":"Wallie","last_name":"Le Franc","email":"wlefrancp@stumbleupon.com","gender":"Agender","ip_address":"164.105.157.134"},
{"id":27,"first_name":"Gabey","last_name":"Adamek","email":"gadamekq@latimes.com","gender":"Non-binary","ip_address":"191.243.97.79"},
{"id":28,"first_name":"Tymon","last_name":"Kennifick","email":"tkennifickr@nih.gov","gender":"Male","ip_address":"233.85.187.99"},
{"id":29,"first_name":"Jude","last_name":"Cheng","email":"jchengs@census.gov","gender":"Male","ip_address":"0.70.180.195"},
{"id":30,"first_name":"Alexa","last_name":"Veall","email":"aveallt@cnet.com","gender":"Polygender","ip_address":"116.205.255.214"},
{"id":31,"first_name":"Effie","last_name":"Christene","email":"echristeneu@nba.com","gender":"Female","ip_address":"194.225.7.43"},
{"id":32,"first_name":"Jandy","last_name":"Heintzsch","email":"jheintzschv@ucsd.edu","gender":"Female","ip_address":"123.14.113.113"},
{"id":33,"first_name":"Smitty","last_name":"Mepham","email":"smephamw@yahoo.co.jp","gender":"Male","ip_address":"139.198.55.61"},
{"id":34,"first_name":"Giacinta","last_name":"Pikhno","email":"gpikhnox@delicious.com","gender":"Female","ip_address":"53.165.31.116"},
{"id":35,"first_name":"Roscoe","last_name":"Godbald","email":"rgodbaldy@feedburner.com","gender":"Male","ip_address":"63.108.179.136"},
{"id":36,"first_name":"Malinde","last_name":"Sowden","email":"msowdenz@simplemachines.org","gender":"Female","ip_address":"216.145.52.174"},
{"id":37,"first_name":"Kory","last_name":"Sebley","email":"ksebley10@vkontakte.ru","gender":"Male","ip_address":"16.220.147.91"},
{"id":38,"first_name":"Renato","last_name":"Matejic","email":"rmatejic11@vistaprint.com","gender":"Male","ip_address":"162.188.248.115"},
{"id":39,"first_name":"Christyna","last_name":"Carlon","email":"ccarlon12@epa.gov","gender":"Female","ip_address":"116.71.128.208"},
{"id":40,"first_name":"Ofilia","last_name":"Dyhouse","email":"odyhouse13@newyorker.com","gender":"Female","ip_address":"5.197.217.251"},
{"id":41,"first_name":"Celle","last_name":"Haberjam","email":"chaberjam14@diigo.com","gender":"Female","ip_address":"147.161.207.136"},
{"id":42,"first_name":"Ami","last_name":"Ivic","email":"aivic15@alexa.com","gender":"Female","ip_address":"181.237.203.107"},
{"id":43,"first_name":"Hale","last_name":"Skellern","email":"hskellern16@rakuten.co.jp","gender":"Male","ip_address":"78.235.165.227"},
{"id":44,"first_name":"Evania","last_name":"Allnatt","email":"eallnatt17@ed.gov","gender":"Female","ip_address":"64.191.82.240"},
{"id":45,"first_name":"Hugh","last_name":"Broadis","email":"hbroadis18@hibu.com","gender":"Male","ip_address":"207.193.140.232"},
{"id":46,"first_name":"Marcelline","last_name":"Bench","email":"mbench19@alexa.com","gender":"Female","ip_address":"19.93.152.248"},
{"id":47,"first_name":"Aeriell","last_name":"Domeny","email":"adomeny1a@irs.gov","gender":"Female","ip_address":"210.58.160.101"},
{"id":48,"first_name":"Meghann","last_name":"Latchmore","email":"mlatchmore1b@wisc.edu","gender":"Female","ip_address":"177.143.30.115"},
{"id":49,"first_name":"Tessi","last_name":"Chandlar","email":"tchandlar1c@stanford.edu","gender":"Agender","ip_address":"89.191.76.189"},
{"id":50,"first_name":"Vanessa","last_name":"Pleasants","email":"vpleasants1d@si.edu","gender":"Female","ip_address":"67.69.70.7"}]


// Act 1

const idBuscado = parseInt(prompt("Ingrese el ID del usuario:"));

const usuarioEncontrado = users.find(user => user.id === idBuscado);

if (usuarioEncontrado) {
  console.log("Usuario encontrado:");
  console.log(usuarioEncontrado);
} else {
  alert("Usuario no encontrado");
}

// Act 2

const conteoGeneros = users.reduce((acc, user) => {
  const genero = user.gender;

  if (acc[genero]) {
    acc[genero]++;
  } else {
    acc[genero] = 1;
  }

  return acc;
}, {});

console.log(conteoGeneros);