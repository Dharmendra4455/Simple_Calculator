var str=""
var opcheker=1;
var size;
var num_btn=document.getElementsByClassName("btn")
var text=document.querySelector(".text");
function numFun(a){
   
    opcheker=1;
    if(str.length>10 && str.length<16 )
    {
     text.style.fontSize = "2.2vw";
     str+=a
     text.innerHTML=str
    }
    else if(str.length<16)
    {
        str+=a
        text.innerHTML=str
    }
   

}
function opFun(op){
    if(opcheker==1)
    {
     str+=op
     size=str.length;
     text.innerHTML=str
     opcheker=0;
    }
    else if(str.length<size)
    {
        str+=op
     
     text.innerHTML=str
    }
    else
    text.innerHTML=str
}
function equalFun()
{
    if(str.length==0){
        text.innerHTML="0";
    }
    else if(str[str.length-1]=="*" ||str[str.length-1]=="+" ||str[str.length-1]=="-" ||str[str.length-1]=="/"
    ||str[0]=="*" ||str[0]=="/"  )
    {
        text.innerHTML="Maths Error"
    }
    else
    {
      str=eval(str);
      if(str.length>15)
      {
        str.toFixed(10);
        text.innerHTML=str
       }
       else
        text.innerHTML=str
      
    }
}
function AcFun(){
    str=""
    text.innerHTML="0";
}
function DelFun(){
   //alert(typeof(str))
    str=str.slice(0,str.length-1);
    if(str.length==0){
            text.innerHTML="0";
    }
    else
    text.innerHTML=str
}
