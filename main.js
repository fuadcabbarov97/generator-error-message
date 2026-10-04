
// XUSUSI GENERATOR:

let inputlar = document.querySelectorAll("input")
let inputAd = inputlar[0]
let inputYas = inputlar[1]
let button = document.querySelector("button")
let h3 = document.querySelector("h3")
  let yas
button.addEventListener("click", () => {
    let ad = inputAd.value
    yas=inputYas.value
  let metn = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis qui, debitis, dignissimos nihil quibusdam labore nesciunt id natus corrupti tempore molestiae molestias velit eos quo iusto eligendi quia tempora? "
for (let i = 0; i < yas; i++) {

    metn += " "
}
let orta=metn.length/2
let bosluq = metn.indexOf(" ", orta)
metn.slice(0, orta) + ad + metn.slice(orta)
let netice = metn.slice(0, orta) + ad + metn.slice(orta)
h3.innerText=netice

})

// BEZDIRICI ERROR MESAJI:

let button=document.querySelector("button")
let box =document.querySelector(".box")
box.style.position = "absolute"
button.addEventListener("mouseover",() => {
Math.random("")
box.style.left = Math.random() * 500 + "px"
box.style.top=Math.random()*100+ "px"

})



