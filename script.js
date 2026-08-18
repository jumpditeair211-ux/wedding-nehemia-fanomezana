"use strict";


const TARGET_URL =
  "https://sites.google.com/view/bebesynyraitapo/accueil";


window.addEventListener(
  "load",
  function () {


    const left =
      document.getElementById(
        "curtainLeft"
      );


    const right =
      document.getElementById(
        "curtainRight"
      );


    const particles =
      document.getElementById(
        "particles"
      );


    /*
    =====================================
    MISOKATRA NY RIDEAUX
    =====================================
    */


    window.setTimeout(
      function () {


        if (left) {

          left.classList.add(
            "open"
          );

        }


        if (right) {

          right.classList.add(
            "open"
          );

        }


      },
      700
    );


    /*
    =====================================
    PARTICLES
    =====================================
    */


    function createParticle(
      type,
      index
    ) {


      if (!particles) {
        return;
      }


      const element =
        document.createElement(
          "div"
        );


      element.className =
        type;


      /*
      KINTANA
      */


      if (
        type === "star"
      ) {


        const stars = [

          "★",

          "✦",

          "✧",

          "⋆"

        ];


        element.textContent =

          stars[
            index %
            stars.length
          ];

      }


      /*
      GOLD / SILVER
      */


      const colors = [

        "#e8b23c",

        "#ffe7a1",

        "#d8d9dd",

        "#ffffff"

      ];


      element.style.setProperty(

        "--particle-color",

        colors[
          index %
          colors.length
        ]

      );


      /*
      SIZE
      */


      let size;


      if (
        type === "star"
      ) {


        size =
          13 +
          Math.random() * 24;


      } else {


        size =
          22 +
          Math.random() * 25;

      }


      element.style.setProperty(

        "--particle-size",

        size + "px"

      );


      /*
      DURATION
      */


      element.style.setProperty(

        "--duration",

        (
          3.6 +
          Math.random() * 2
        ) +
        "s"

      );


      /*
      DELAY
      */


      element.style.setProperty(

        "--delay",

        (
          1.8 +
          Math.random() * 1.2
        ) +
        "s"

      );


      /*
      DRIFT
      */


      element.style.setProperty(

        "--drift",

        (
          -55 +
          Math.random() * 110
        ) +
        "px"

      );


      /*
      ROTATION
      */


      element.style.setProperty(

        "--rotation",

        (
          -100 +
          Math.random() * 200
        ) +
        "deg"

      );


      /*
      POSITION
      */


      element.style.left =

        (
          3 +
          Math.random() * 94
        ) +
        "%";


      particles.appendChild(
        element
      );

    }


    /*
    =====================================
    28 KINTANA
    =====================================
    */


    for (
      let i = 0;
      i < 28;
      i++
    ) {


      createParticle(
        "star",
        i
      );

    }


    /*
    =====================================
    12 BALLON
    =====================================
    */


    for (
      let i = 0;
      i < 12;
      i++
    ) {


      createParticle(
        "balloon",
        i
      );

    }


    /*
    =====================================
    REDIRECT AUTOMATIQUE

    TSY MISY ENTER.
    TSY MILA TSINDRINA.
    =====================================
    */


    window.setTimeout(
      function () {


        window.location.replace(
          TARGET_URL
        );


      },
      7200
    );


  }
);    */

    setTimeout(
      function () {

        if (left) {
          left.classList.add(
            "open"
          );
        }

        if (right) {
          right.classList.add(
            "open"
          );
        }

      },
      650
    );


    /*
    =========================
    PARTICLES
    =========================
    */

    function makeParticle(
      type,
      index
    ) {

      if (!particles) {
        return;
      }


      const item =
        document.createElement(
          "div"
        );


      item.className =
        type;


      /*
      KINTANA
      */

      if (
        type === "star"
      ) {

        const stars = [
          "★",
          "✦",
          "✧",
          "⋆"
        ];


        item.textContent =
          stars[
            index %
            stars.length
          ];

      }


      /*
      GOLDEN + SILVER
      */

      const palette = [

        "#e8b23c",

        "#ffe7a1",

        "#d8d9dd",

        "#ffffff"

      ];


      item.style.setProperty(

        "--c",

        palette[
          index %
          palette.length
        ]

      );


      /*
      HABENY
      */

      if (
        type === "star"
      ) {

        item.style.setProperty(

          "--size",

          (
            12 +
            Math.random() * 24
          ) +
          "px"

        );

      }

      else {

        item.style.setProperty(

          "--size",

          (
            22 +
            Math.random() * 25
          ) +
          "px"

        );

      }


      /*
      FAHARETAN'NY
      FANIDINANA
      */

      item.style.setProperty(

        "--dur",

        (
          3.6 +
          Math.random() * 2
        ) +
        "s"

      );


      /*
      Manomboka rehefa
      efa manomboka misokatra
      ny rideaux
      */

      item.style.setProperty(

        "--delay",

        (
          1.7 +
          Math.random() * 1.4
        ) +
        "s"

      );


      /*
      FIHEZIVEZENA
      GAUCHE/DROITE
      */

      item.style.setProperty(

        "--drift",

        (
          -55 +
          Math.random() * 110
        ) +
        "px"

      );


      /*
      ROTATION
      */

      item.style.setProperty(

        "--rot",

        (
          -100 +
          Math.random() * 200
        ) +
        "deg"

      );


      /*
      POSITION
      */

      item.style.left =

        (
          3 +
          Math.random() * 94
        ) +
        "%";


      particles.appendChild(
        item
      );

    }


    /*
    KINTANA
    */

    for (
      let i = 0;
      i < 28;
      i++
    ) {

      makeParticle(
        "star",
        i
      );

    }


    /*
    BALLON
    */

    for (
      let i = 0;
      i < 12;
      i++
    ) {

      makeParticle(
        "balloon",
        i
      );

    }


    /*
    =========================
    ENTER BUTTON
    =========================
    */

    setTimeout(
      function () {

        if (skip) {

          skip.classList.add(
            "visible"
          );

        }

      },
      4300
    );


    /*
    =========================
    REDIRECT
    =========================
    */

    let redirecting =
      false;


    function enterSite() {

      if (
        redirecting
      ) {
        return;
      }


      redirecting =
        true;


      window.location.href =
        TARGET_URL;

    }


    if (skip) {

      skip.addEventListener(
        "click",
        enterSite
      );

    }


    /*
    8 secondes eo ho eo
    dia miditra Google Sites
    */

    setTimeout(
      enterSite,
      8000
    );

  }
);        [
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
