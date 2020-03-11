let inputvatly = prompt("Nhập điểm vật lý: ")
let inputhoahoc = prompt("Nhập điểm hóa học: ")
let inputsinhhoc = prompt("Nhập điểm sinh học: ")
let vatly = parseInt(inputvatly)
let hoahoc = parseInt(inputhoahoc)
let sinhhoc = parseInt(inputsinhhoc)
let sum = vatly + hoahoc + sinhhoc
document.write("Tổng điểm các môn là: "+sum)
let avarage = (vatly + hoahoc + sinhhoc)/3
document.write('<br/>')
document.write('Trung bình cộng các môn là: '+avarage)
let inputdoC = prompt("Nhập độ C: ")
let C = parseInt(inputdoC)
let F;
F=(C*5/9)+32
document.write("<br/> Độ F là: "+F)
let inputbankinh = prompt("Nhập bán kính: ")
let r= inputbankinh;
let S;
S=r*r+3,14;
let P ;
    P=2*r*3,14;
document.write("<br/> Diện tích hình tròn là: " +S)
document.write("<br/> Chu vi hình tròn là: " +P)