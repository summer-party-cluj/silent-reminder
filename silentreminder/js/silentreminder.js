var x=0;
var y=0;
var h;
var m;
var stop;

//***********************************************

function Setting(aName, aValue) 
{
  this.name = aName;
  this.value = aValue;  
}

//***********************************************

function inc1()
{
x++;
if(x==24) x=0;
if(x<10)
document.getElementById("hour").innerHTML="0"+x;
else
document.getElementById("hour").innerHTML=x;
}

//***********************************************

function inc2()
{
y++;
if(y==60) y=0;
if(y<10)
document.getElementById("minute").innerHTML="0"+y;
else
document.getElementById("minute").innerHTML=y;
}

//***********************************************

function dec1()
{
x--;
if(x<0) x=23;
if(x<10)
document.getElementById("hour").innerHTML="0"+x;
else
document.getElementById("hour").innerHTML=x;
}

//***********************************************

function dec2()
{
y--;
if(y<0) y=59;
if(y<10)
document.getElementById("minute").innerHTML="0"+y;
else
document.getElementById("minute").innerHTML=y;
}

//***********************************************

function quiet()
{
writexy();
h=new Date().getHours();
m=new Date().getMinutes();
writehm();
if(y+m>59)
{
h=h+x+1;
m=(m+y)%60;
}
else
{
h=h+x; m=m+y;
}
if(h>23) h=h%24;
new Setting("phone.ring.incoming",false);
new Setting("phone.vibration.incoming", false);
new Setting("sms.ring.received",false);
new Setting("sms.vibration.received",false);
writehm2();
document.getElementById("status").innerHTML="Status : SILENT";
stop=setInterval(check,60000);
}

//***********************************************

function writexy()
{
if(x<10 && y<10)
document.getElementById("time").innerHTML="Time.... "+"0"+x+":"+"0"+y;
else if(x<10)
document.getElementById("time").innerHTML="Time.... "+"0"+x+":"+y;
else if(y<10)
document.getElementById("time").innerHTML="Time.... "+x+":"+"0"+y;
else
document.getElementById("time").innerHTML="Time.... "+x+":"+y;
}

//***********************************************

function writehm()
{
if(h<10 && m<10)
document.getElementById("start").innerHTML="Start.... "+"0"+h+":"+"0"+m;
else if(h<10)
document.getElementById("start").innerHTML="Start.... "+"0"+h+":"+m;
else if(m<10)
document.getElementById("start").innerHTML="Start.... "+h+":"+"0"+m;
else
document.getElementById("start").innerHTML="Start.... "+h+":"+m;
}

//***********************************************

function writehm2()
{
if(h<10 && m<10)
document.getElementById("finish").innerHTML="Finish.. "+"0"+h+":"+"0"+m;
else if(h<10)
document.getElementById("finish").innerHTML="Finish.. "+"0"+h+":"+m;
else if(m<10)
document.getElementById("finish").innerHTML="Finish.. "+h+":"+"0"+m;
else
document.getElementById("finish").innerHTML="Finish.. "+h+":"+m;
}

//***********************************************

function cancel()
{
WindowManager.kill(origin);
}

//***********************************************

function check()
{
var a;
var b;
a=new Date().getHours();
b=new Date().getMinutes();
if(a==h && b==m)
{
new Setting("phone.ring.incoming",true);
new Setting("phone.vibration.incoming",true);
new Setting("sms.ring.received",true);
new Setting("sms.vibration.received",true);
document.getElementById("status").innerHTML="Status : AUDIBLE";
clearInterval(stop);
}
}