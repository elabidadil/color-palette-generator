let colorSections = document.querySelectorAll(".container .section");
let colorName = document.querySelector(".colorName");

function colorGenerator() {
  let redGenerator = Math.round(Math.random() * 255);
  let greenGenerator = Math.round(Math.random() * 255);
  let blueGenerator = Math.round(Math.random() * 255);
  return `rgb(${redGenerator}, ${greenGenerator}, ${blueGenerator})`
}

colorSections.forEach(section => {
  let copyBtn = section.querySelector(".copyBtn");
  let newBtn = section.querySelector(".newBtn");

  section.style.backgroundColor = colorGenerator();
  section.children[0].children[0].textContent = section.style.backgroundColor;
  
  newBtn.addEventListener('click', function () {
    section.style.backgroundColor = colorGenerator();
    section.children[0].children[0].textContent = section.style.backgroundColor;
    newBtn.classList.add("clicked")
    
    const reseatBtns = setTimeout(reseat, 100);
    function reseat() {
      newBtn.classList.remove("clicked");
    }
  })
  
  section.querySelector(".copyBtn").addEventListener('click', () => {
    navigator.clipboard.writeText(section.children[0].children[0].textContent);
    copyBtn.classList.add("clicked");
    
    const reseatBtns = setTimeout(reseat, 100);
    function reseat() {
      copyBtn.classList.remove("clicked");
    }
  })
});