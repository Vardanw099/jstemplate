let anun = document.getElementById("name");
var arajin = document.querySelector(".pageOne");
var erkrord = document.querySelector(".pageTwo");
var errord = document.querySelector(".pageThree");
function check() {
  arajin.style.display = "none";
  erkrord.style.display = "block";
  st1.removeAttribute("class", "tviA");
  st1.setAttribute("class", "tvi");
  st2.setAttribute("class", "tviA");
}

function back() {
  arajin.style.display = "block";
  erkrord.style.display = "none";
  st1.removeAttribute("class", "tviA");
  st1.setAttribute("class", "tviA");
  st2.setAttribute("class", "tvi");
}
function next() {
  erkrord.style.display = "none";
  errord.style.display = "block";
  st2.removeAttribute("class", "tviA");
  st2.setAttribute("class", "tvi");
  st3.setAttribute("class", "tviA");
  
}

function fsyo() {
  verjin.style.display = "none";
  conf.style.display = "flex";
}

function back2() {
  verjin.style.display = "none";
  errord.style.display = "block";
  st4.removeAttribute("class", "tviA");
  st3.setAttribute("class", "tviA");
  st4.setAttribute("class", "tvi");
}

het.setAttribute("onclick", "back()");
araj.setAttribute("onclick", "next()");
function back1() {
  erkrord.style.display = "block";
  errord.style.display = "none";
  st3.removeAttribute("class", "tviA");
  st2.setAttribute("class", "tviA");
  st3.setAttribute("class", "tvi");
}

function next1() {
  var totl = 0;
  errord.style.display = "none";
  verjin.style.display = "block";
  st3.removeAttribute("class", "tviA");
  st3.setAttribute("class", "tvi");
  st4.setAttribute("class", "tviA");
  if (tesak == 1 && vkl == "off") {
    totl = 9;
  }
  if (tesak == 1 && vkl == "on") {
    vtesak.innerText = "Arcade (Monthly)";
    vtespric.innerText = "$90/yr";
    totl = 90;
  }
  if (tesak == 2 && vkl == "off") {
    vtesak.innerText = "Advanced (Monthly)";
    vtespric.innerText = "$12/mo";
    totl = 12;
  }
  if (tesak == 2 && vkl == "on") {
    vtesak.innerText = "Advanced (Yearly)";
    vtespric.innerText = "$120/yr";
    totl = 120;
  }
  if (tesak == 3 && vkl == "off") {
    vtesak.innerText = "Pro (Monthly)";
    vtespric.innerText = "$15/mo";
    totl = 15;
  }
  if (tesak == 3 && vkl == "on") {
    vtesak.innerText = "Pro (Yearly)";
    vtespric.innerText = "$150/yr";
    totl = 150;
  }
  if (z == true || z == null) {
    dop1.innerText = "";
    doppr1.innerText = "";
  }
  if (z == false && vkl == "off") {
    dop1.innerText = "Online services";
    doppr1.innerText = "+$1/mo";
    totl = totl + 1;
  }
  if (z == false && vkl == "on") {
    doppr1.innerText = "+$10/yr";
    totl = totl + 10;
  }
  if (z1 == true || z1 == null) {
    dop2.innerText = "";
    doppr2.innerText = "";
  }
  if (z1 == false && vkl == "off") {
    dop2.innerText = "Larger Storage";
    doppr2.innerText = "+$2/mo";
    totl = totl + 2;
  }
  if (z1 == false && vkl == "on") {
    doppr2.innerText = "+$20/yr";
    totl = totl + 20;
  }
  
  if (z2 == false && vkl == "off") {
    dop3.innerText = "Customizable profile";
    doppr3.innerText = "+$2/mo";
    totl = totl + 2;
  }
  if (z2 == false && vkl == "on") {
    dop3.innerText = "Customizable profile";
    doppr3.innerText = "+$20/yr";
    totl = totl + 20;
  }
  if (vkl == "off") {
    tot.innerText = `+ $${totl}/mo`;
  }
  if (vkl == "on") {
    tot.innerText = `+ $${totl}/yr`;
  }
}
var tesak = 1;
function a1() {
  tesak = 1;
}
function a2() {
  tesak = 2;
}
function a3() {
  tesak = 3;
}

het1.setAttribute("onclick", "back1()");
araj1.setAttribute("onclick", "next1()");
function selc(a) {
  arc1.removeAttribute("id", "arc1");
  a.setAttribute("id", "arc1");
}
butn.setAttribute("onclick", "check()");

var vkl = "off";
var cht = document.querySelector(".ajdzax");
var mo = document.createElement("i");
mo.setAttribute("class", "fa-solid fa-toggle-" + vkl + "");
cht.appendChild(mo);
mo.style.fontSize = "25px";
mo.style.color = "#032a5b";
var fre = document.createElement("span");
fre.innerText = "2 month free";
fre.style.color = "#032a5b";
fre.style.fontSize = "12px";
var fre1 = document.createElement("span");
fre1.innerText = "2 month free";
fre1.style.color = "#032a5b";
fre1.style.fontSize = "12px";
var fre2 = document.createElement("span");
fre2.innerText = "2 month free";
fre2.style.color = "#032a5b";
fre2.style.fontSize = "12px";
var i = 1;

function yemo() {
  if (i % 2 == 1) {
    vkl = "on";
    advp.innerText = "$120/yr \n";
    advp.appendChild(fre);
    advp.style.fontSize = "12px";
    arcp.innerText = "$90/yr \n";
    arcp.appendChild(fre2);
    arcp.style.fontSize = "12px";
    prop.innerText = "$150/yr \n";
    prop.appendChild(fre1);
    prop.style.fontSize = "12px";
    sp.innerText = "+$10/yr";
    sp1.innerText = "+$20/yr";
    sp2.innerText = "+$20/yr";
  }
  else if (i % 2 == 0) {
    vkl = "off";
    advp.innerText = "$12/mo";
    arcp.innerText = "$9/mo";
    prop.innerText = "$15/mo";
    sp.innerText = "+$1/mo";
    sp1.innerText = "+$2/mo";
    sp2.innerText = "+$2/mo";
  }
  
  i++;
  mo.setAttribute("class", "fa-solid fa-toggle-" + vkl + "");
}

cht.addEventListener("click", yemo);

function firHov(a) {
  a.style.border = "1px solid #483FFC";
  a.style.transition = "0.4s";
}
var z = null;
var z1 = null;
var z2 = null;
var fir = document.getElementsByClassName("fir");
function nshv() {
  z = document.getElementById("ch").checked;
  if (z == false) {
    fir[0].style.border = "1px solid #483FFC";
  } else if (z == true) {
    fir[0].style.border = "1px solid rgba(128, 128, 128, 0.39)";
  }
}

function nshv1() {
  z1 = document.getElementById("ch1").checked;
  if (z1 == false) {
    fir[1].style.border = "1px solid #483FFC";
  } else if (z1 == true) {
    fir[1].style.border = "1px solid rgba(128, 128, 128, 0.39)";
  }
}
function nshv2() {
  z2 = document.getElementById("ch2").checked;
  if (z2 == false) {
    fir[2].style.border = "1px solid #483FFC";
  } else if (z2 == true) {
    fir[2].style.border = "1px solid rgba(128, 128, 128, 0.39)";
  }
}

function exit() {
  if (z == null || z == true) {
    fir[0].style.border = "1px solid rgba(128, 128, 128, 0.39)";
  }
  if (z1 == null || z1 == true) {
    fir[1].style.border = "1px solid rgba(128, 128, 128, 0.39)";
  }
  if (z2 == null || z2 == true) {
    fir[2].style.border = "1px solid rgba(128, 128, 128, 0.39)";
  }
}
