const sidebar=document.querySelector(".sidebar");
const floatingBtn=document.querySelector(".floatingToggle");
const closeBtn=document.querySelector(".closeSidebar");

closeBtn.onclick=()=>{

sidebar.classList.add("hide");
floatingBtn.classList.add("show");

document.body.classList.add("sidebarGone");

};

floatingBtn.onclick=()=>{

sidebar.classList.remove("hide");
floatingBtn.classList.remove("show");

document.body.classList.remove("sidebarGone");

};

const hero=
document.getElementById("hero");

const head=
document.getElementById("head");


window.addEventListener(
"scroll",()=>{

if(window.scrollY>100){

hero.classList.add(
"shrink"
);

head.classList.add(
"active"
);

}
else{

hero.classList.remove(
"shrink"
);

head.classList.remove(
"active"
);

}

});
