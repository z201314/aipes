
document.writeln("<div id=\'piao\' style=\'position:absolute\'>");
document.writeln("<a href=\'http://kg55.cc\' target=\'_blank\'><img src=\'https://ae01.alicdn.com/kf/Ue906990a1e98402fa0966c6b2bcac01ak.jpg\' border=\'0\'></a>");
document.writeln("</div>");

var xin = true, yin = true 
var step = 1 
var delay = 50 
var obj=document.getElementById("piao");
var x=y=0;
function float() {
var L=T=0;
var R= document.body.clientWidth-obj.offsetWidth; 
var B = document.body.clientHeight-obj.offsetHeight;
obj.style.left = x + document.body.scrollLeft; 
obj.style.top = y + document.body.scrollTop; 
x = x + step*(xin?1:-1);
if (x < L) { xin = true; x = L} 
if (x > R){ xin = false; x = R} 
y = y + step*(yin?1:-1);
if (y < T) { yin = true; y = T } 
if (y > B) { yin = false; y = B } 
} 
var itl= setInterval("float()", delay) 


