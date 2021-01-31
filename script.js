function menuDropdown() {
const x = document.querySelector(".menu__dropdown-content");
if (x.style.display === "none"||x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function catalogDropdown() {
const x = document.querySelector(".catalog__dropdown-content");
const y = document.querySelector(".main__inner");
if (x.style.display === "none"||x.style.display === "") {
    x.style.display = "block";
    y.style.filter = "blur(2px)"
  } else {
    x.style.display = "none";
    y.style.filter = "none"
  }
}

function catalogDropdownMobile() {
const x = document.querySelector(".catalog__dropdown-content-mobile");
const a = document.querySelector(".arrow-down");
const b = document.querySelector(".arrow-up");

if (x.style.display === "none"||x.style.display === "") {
    x.style.display = "block";
    a.style.display = "none";
    b.style.display = "inline";
  } else {
    x.style.display = "none";
    a.style.display = "inline";
    b.style.display = "none";
  }
}

function menuOpen() {
  if (window.innerWidth > 620) {
    menuDropdown()
  } else {catalogDropdown()}
}

function closeCatalog() {
  document.querySelector(".catalog__dropdown-content").style.display = "none";
  document.querySelector(".main__inner").style.filter = "none";
}

function closeLocation() {
  document.querySelector(".location__dropdown-content").style.display = "none";
}

function closeMenu() {
  document.querySelector(".menu__dropdown-content").style.display = "none";
}

function closeCity() {
  document.querySelector(".city__dropdown-content").style.display = "none";
  document.querySelector(".main__inner").style.filter = "none";
}

function locationDropdown() {
  const x = document.querySelector(".location__dropdown-content");
  if (x.style.display === "none"||x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function cityDropdown() {
  const x = document.querySelector(".city__dropdown-content");
  const y = document.querySelector(".location__dropdown-content");
  const z = document.querySelector(".main__inner");
  if (x.style.display === "none"|| x.style.display === "") {
    if (y.style.display === "block")
    x.style.display = "block";
    y.style.display = "none";
    z.style.filter = "blur(2px)"
  } else {
    x.style.display = "none";
    z.style.filter = "none"
  }
}

