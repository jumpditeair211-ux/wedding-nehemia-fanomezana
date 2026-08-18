const TARGET_URL =
  "https://sites.google.com/view/bebesynyraitapo/accueil";

document.addEventListener("DOMContentLoaded", () => {

  const left = document.querySelector(".curtain.left");
  const right = document.querySelector(".curtain.right");
  const box = document.getElementById("particles");
  const skip = document.getElementById("skip");

  // MISOKATRA NY RIDEAUX
  setTimeout(() => {

    if (left) {
      left.animate(
        [
          {
            transform: "translateX(0) scaleX(1)"
          },
          {
            transform: "translateX(-25%) scaleX(0.85)"
          },
          {
            transform: "translateX(-48%) scaleX(0.62) rotate(-2deg)"
          }
        ],
        {
          duration: 2400,
          easing: "cubic-bezier(.64,0,.18,1)",
          fill: "forwards"
        }
      );
    }

    if (right) {
      right.animate(
        [
          {
            transform: "translateX(0) scaleX(1)"
          },
          {
            transform: "translateX(25%) scaleX(0.85)"
          },
          {
            transform: "translateX(48%) scaleX(0.62) rotate(2deg)"
          }
        ],
        {
          duration: 2400,
          easing: "cubic-bezier(.64,0,.18,1)",
          fill: "forwards"
        }
      );
    }

  }, 700);


  // KINTANA SY BALLON
  function particle(type, i) {

    if (!box) return;

    const e = document.createElement("div");
    e.className = type;

    if (type === "star") {
      e.textContent =
        ["★", "✦", "✧", "⋆"][i % 4];
    }

    const palette = [
      "#e8b23c",
      "#ffe7a1",
      "#d9dadd",
      "#ffffff"
    ];

    e.style.setProperty(
      "--c",
      palette[i % palette.length]
    );

    e.style.setProperty(
      "--size",
      type === "star"
        ? (12 + Math.random() * 24) + "px"
        : (20 + Math.random() * 24) + "px"
    );

    e.style.setProperty(
      "--dur",
      (3.5 + Math.random() * 2) + "s"
    );

    e.style.setProperty(
      "--delay",
      (2 + Math.random()) + "s"
    );

    e.style.setProperty(
      "--drift",
      (-50 + Math.random() * 100) + "px"
    );

    e.style.setProperty(
      "--rot",
      (-90 + Math.random() * 180) + "deg"
    );

    e.style.left =
      (4 + Math.random() * 92) + "%";

    box.appendChild(e);
  }


  for (let i = 0; i < 26; i++) {
    particle("star", i);
  }

  for (let i = 0; i < 12; i++) {
    particle("balloon", i);
  }


  // ENTER / REDIRECT
  let going = false;

  function go() {

    if (going) return;

    going = true;

    window.location.href = TARGET_URL;
  }

  if (skip) {
    skip.addEventListener("click", go);
  }

  setTimeout(go, 7500);

});    type === "star"
      ? (12 + Math.random() * 24) + "px"
      : (20 + Math.random() * 24) + "px"
  );

  e.style.setProperty(
    "--dur",
    (3.4 + Math.random() * 2.1) + "s"
  );

  e.style.setProperty(
    "--delay",
    (1.9 + Math.random() * 1.0) + "s"
  );

  e.style.setProperty(
    "--drift",
    (-48 + Math.random() * 96) + "px"
  );

  e.style.setProperty(
    "--rot",
    (-90 + Math.random() * 180) + "deg"
  );

  e.style.left =
    (4 + Math.random() * 92) + "%";

  box.appendChild(e);
}

// Kintana
for (let i = 0; i < 24; i++) {
  particle("star", i);
}

// Ballon
for (let i = 0; i < 10; i++) {
  particle("balloon", i);
}

// Redirect
let going = false;

function go() {
  if (going) return;

  going = true;
  location.href = TARGET_URL;
}

// ENTER button
skip.onclick = go;

// Rehefa tapitra ny animation
setTimeout(go, 7200);
  e.style.setProperty(
    "--c",
    palette[i % palette.length]
  );

  e.style.setProperty(
    "--size",
    type === "star"
      ? (12 + Math.random() * 24) + "px"
      : (20 + Math.random() * 24) + "px"
  );

  e.style.setProperty(
    "--dur",
    (3.4 + Math.random() * 2.1) + "s"
  );

  e.style.setProperty(
    "--delay",
    (2.0 + Math.random() * 1.1) + "s"
  );

  e.style.setProperty(
    "--drift",
    (-48 + Math.random() * 96) + "px"
  );

  e.style.setProperty(
    "--rot",
    (-90 + Math.random() * 180) + "deg"
  );

  e.style.left =
    (4 + Math.random() * 92) + "%";

  box.appendChild(e);
}

// Kintana
for (let i = 0; i < 24; i++) {
  particle("star", i);
}

// Ballon
for (let i = 0; i < 10; i++) {
  particle("balloon", i);
}

// Fisorohana redirect indroa
let going = false;

function go() {
  if (going) return;

  going = true;

  location.href = TARGET_URL;
}

// ENTER button
skip.onclick = go;

// Rehefa tapitra ny animation
// dia mankany amin'ny Google Sites
setTimeout(go, 7200);  e.style.left=(3+Math.random()*94)+"%";

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
