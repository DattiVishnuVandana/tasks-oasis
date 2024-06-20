let display=document.querySelector("input")
let buttons=document.querySelectorAll(".btn")
let buttonArray=Array.from(buttons)
let string=''
let hist='';
buttonArray.forEach(btn=>{
   btn.addEventListener('click',function(e){
    if(e.target.innerHTML==='DEL'){
        string=string.substring(0,string.length-1);
        display.value=string;
    }
    else if(e.target.innerHTML==='his'){
        display.value='';
        display.value+=hist;
        
    }
    else if(e.target.innerHTML==='AC'){
        string=''
        display.value=string;
    }
    else if(e.target.innerHTML==='='){
        string=eval(string);
        display.value=string;
        hist+=string
        hist+='.. '
    }
    else{
    string+=e.target.innerHTML;
    display.value=string;}
   })
})


