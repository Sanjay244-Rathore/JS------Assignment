var ary = [];
console.log(ary.length);

ary[5] = "info@gmail.com";
ary[0] = "iHunar";
console.log(ary);

ary[55] = "academy";
console.log(ary);
ary[55] = "iSkillers";
console.log(ary);

var mobile_num = prompt("Enter your mobile number");
if(mobile_num === null || mobile_num === ""){
    ary.pop()
}else{
    ary.push("successful")
}
console.log(ary);