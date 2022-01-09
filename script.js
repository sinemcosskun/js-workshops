

let string_sayi = [1,2,3,"bir"];
let aaa = string_sayi.toString();


let j = [1,2,3,4];
let nnnnn = j.join("-");
console.log(nnnnn);

let arr_isim = ["Ali","Ahmet","Ayşe"];
//arr_isim.forEach();

function blabla(){
    return 1;
}

arr_isim.forEach(item => console.log((item))); // alt alta yazdırır 

//find
let userss = [
    {id:1, name:"Ali"},
    {id:2,name:"Aliii"},
    {id:3,name:"Ahmet"},
    {id:4,name:"Mehmet"}
]

let res_find = userss.find(e => e.id == 1);
console.log(res_find);

//
let sayii = [5,8,3,1];
let ssss = sayii.some(x =>x >3); 


// function
'ab';

'a';
s
'abcdefg';


const strngs = (str) => str.length < 2 ? str : str.slice(0,2) + str.slice(-2);

const half = (str) => str.length <=0 ? "hataa" : str.slice(0,str.length/2);

'abc' , 'bcd' // birinciyi atlayıp devamını yazdıran

const concat = (str1,str2) => str1.slice(1) + str2.slice(1);

const near = (num1,num2) => (100-num1) < (100-num2) ? num1 : num2; // iki sayının 100e olan yakınlığına bakan


const charss = (str, d) => {
    let arr = Array.from(str);
    let count = arr.filter(e => e === d).length;
    if (count>=2 && count<=4) return true;
    return count;
}

charss('alooo','o');


const charssCount = (str,char) => str.split('').filter(x=> x=== char).length; // strgin sayısını buluyor

const resChar = (str,char) => charsCount(str,char) >=2 && charsCount(str, char) <=4;

const cift = arr => arr.filter()
 let s = [1,2,3,4,5,6];














