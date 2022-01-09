
// ARRAYLAR VE METHOTLAR


let names = new Array("Ahmet","Mehmet");

let name = ["Ahmet", "x"];

let f = [];

f[0] = "Ahmet";
f[1] = "Mehmet";

let isim = ["Ali","Ahmet"];
isim.push("Serkan"); //push methodu sona ekler 

isim.unshift("Serkan");
console.log(isim);


let nn = ["Ali","Veli","Ayşe","Ahmet"];

//nn.splice(1,0,"Hakan"); // dizin içerisinde hiçbir inseksi silmeden "Hakan" elemanını ekler
nn.splice(1,1,"Hakan","Elif"); //1. indeksi sildi ve hakan ve elif elemanlarını ekledi.
console.log("splice",nn);

let arry = [1,2,5];
arry.splice(-1,0,3);
console.log("splice-2",arry); // tersten birinci indeksin yerine 3 elemanını ekler yani 2-5 arasına

let str ="test";
let arrstr = ["t","e","s","t"];
console.log(arrstr.slice(1,3)); // 1. ve 3. indeksler arasındakileri alır 3 dahil değil
console.log(arrstr.slice(-1)); // sondan başlayıp sadece o sondaki değerli yazdırır 

let nm= [12,16,18,20];
/*nm.pop(); // dizinin sondaki elemanını siler.
console.log(nm);

nm.shift(); // dizinin ilk elemanını siler.
console.log(nm);*/ 


delete nm[2]; // array için delete parametresi 
console.log(nm);
console.log(nm.length);

let is = ["Paris","İstanbul"];
let _c = nm.concat(is); // dizileri birleştirir.
console.log(_c);

let num = [3,8,4,1,7,9];
let _ss = num.sort(); // küçükten büyüğe sıralar.
console.log(_ss);

let alf = ["s","b","i"];
let _as = alf.sort();
console.log(_as);

let rnum = [3,8,4,1,7,9];
let _rnum = rnum.reverse(); // diziyi tersten tekrar yazdırıyor.
console.log(_rnum);


let iss = ["Paris","İstanbul","Viyana"];
let _search = iss.indexOf("Viyana"); // bulunduğu indeksi yazdırır.
console.log(_search);

//let _search = iss.indexOf("Viyan");
//console.log(_search);

let nmm = [1,0,2];
console.log(nmm.includes(1)); // aradığın değer dizinin içindeyse true değilse false verir.

