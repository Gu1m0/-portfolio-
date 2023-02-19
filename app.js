function mostrar(selector, sentido) {
  let elemento = document.querySelectorAll(`.${selector}`);
  elemento.forEach((elem) => {
    const valorTopDiv = elem.getBoundingClientRect().top;
    if (valorTopDiv - 500 < 0) {
      elem.classList.add(sentido);
    } else if (valorTopDiv > 900) {
      elem.classList.remove(sentido);
    }
  });
}
document.addEventListener("scroll", () => {
  mostrar("skills", "left");
  mostrar("experiencias__container", "left");
});

function scrollUp() {
    setTimeout(() => {
      window.scrollTo(0,window.scrollY-80)
    }, 800);
}

const linksNav = document.querySelectorAll("#linksNav li a")
linksNav.forEach((el,index,linksNav)=>linksNav.length!=index+1&&el.addEventListener("click", scrollUp))