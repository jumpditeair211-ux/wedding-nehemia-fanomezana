const TARGET_URL="https://sites.google.com/view/bebesynyraitapo/accueil";

const left=document.querySelector(".curtain.left");
const right=document.querySelector(".curtain.right");
const box=document.getElementById("particles");
const skip=document.getElementById("skip");

setTimeout(()=>{
  left.classList.add("open");
  right.classList.add("open");
},250);

function particle(type,i){
  const e=document.createElement("div");
  e.className=type;

  if(type==="star"){
    e.textContent=["★","✦","✧","⋆"][i%4];
  }

  const gold=["#e9b83f","#ffe49a","#d7d9dd","#ffffff"];

  e.style.setProperty("--c",gold[i%gold.length]);

  e.style.setProperty(
    "--size",
    type==="star"
      ? (14+Math.random()*27)+"px"
      : (22+Math.random()*28)+"px"
  );

  e.style.setProperty("--dur",(3.1+Math.random()*2.2)+"s");
  e.style.setProperty("--delay",(1.8+Math.random()*1.1)+"s");
  e.style.setProperty("--drift",(-55+Math.random()*110)+"px");
  e.style.setProperty("--rot",(-100+Math.random()*200)+"deg");

  e.style.left=(3+Math.random()*94)+"%";

  box.appendChild(e);
}

for(let i=0;i<28;i++){
  particle("star",i);
}

for(let i=0;i<12;i++){
  particle("balloon",i);
}

let going=false;

function go(){
  if(going)return;
  going=true;
  location.href=TARGET_URL;
}

skip.onclick=go;

setTimeout(go,6800);
