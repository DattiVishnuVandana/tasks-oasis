let inputTitle=document.getElementById("inp");
let text=document.querySelector(".com-tasks");
let addbtn=document.querySelector(".btn");
let comp=document.querySelector(".completed")
addbtn.addEventListener('click',add);
let last=document.querySelector("#end");
let descript=document.getElementById("myText");

function add(){
    if(inputTitle.value==""){
        alert("enter your task||")
    }
    else{
        let newEl=document.createElement("ul");
        let compEl=document.createElement("ul");
        newEl.innerHTML=`<div class="icon"><p >${inputTitle.value}</p> <i class="fa-solid fa-trash icons-del"></i> <i class="fa-solid fa-check icons-comp"></i></div>
        <div class="active dates"><p>duration:from ${start.value} to ${last.value}</p></div>
        <p>About task:${descript.value}</p>
        `
        ;
      console.log(descript.value);
        compEl.innerHTML=`<div class="icon"><p>${inputTitle.value}</p> <i class="fa-solid fa-trash icons-del"></i> </div>`;


       text.appendChild(newEl);
  
        inputTitle.value="";
        newEl.querySelector(".icons-comp").addEventListener("click",function(){
                  console.log(newEl);
           
            comp.appendChild(compEl);
            newEl.remove()
        });
        newEl.querySelector(".icons-del").addEventListener("click",function(){
            
            newEl.remove()
        });
        compEl.querySelector(".icons-del").addEventListener("click",function(){
            
            compEl.remove()
        }
    );
        
    }
}

